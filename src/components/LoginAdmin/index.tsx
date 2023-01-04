import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";

const LOGIN = gql`
  query Users($auth: AuthInput!) {
    auth(auth: $auth) {
      msg
      token
    }
  }
`;

export const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, { loading, error, data }] = useLazyQuery(LOGIN);

  useEffect(() => {
    if (!data?.auth?.msg) return;
    if (data?.auth?.msg === "ok" && data?.auth?.token) {
      const user = jwtDecode<any>(data?.auth?.token);
      setTimeout(() => {
        if (user?.profile === "admin") {
          localStorage.setItem("token", data.auth.token);
          window.location.href = "/admin";
        }
      }, 1000);
    }
  }, [data]);

  const classes = useStyles();

  const handleLogin = () => {
    setPassword("");
    auth({
      variables: {
        auth: {
          email,
          password,
        },
      },
    });
  };

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Typography variant="h4">Painel Administrativo</Typography>
          <TextField
            placeholder="usuário@email.com"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
          />
          <TextField
            placeholder="Senha"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
          <Button onClick={handleLogin} variant="contained">
            Entrar
          </Button>
          {data?.auth?.token &&
            jwtDecode<any>(data.auth.token)?.profile === "admin" && (
              <Alert color="success">Logado com Sucesso, Redirecionando!</Alert>
            )}
          {data?.auth?.msg && data?.auth?.msg !== "ok" && (
            <Alert color="warning">{data?.auth?.msg}</Alert>
          )}
          {error && <Alert color="error">Erro : {error.message}</Alert>}
        </Box>
      </Box>
      <Modal open={loading}>
        <Box className={classes.containerLoading}>
          <Box className={classes.contentLoading}>
            <CircularProgress />;
          </Box>
        </Box>
      </Modal>
    </>
  );
};

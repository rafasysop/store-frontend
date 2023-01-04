import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    minHeight: "100vh",
    background: "#EAEAEA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLoading: {
    width: "100%",
    minHeight: "100vh",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentLoading: {
    width: "500px",
    minHeight: "350px",
    background: "rgba(255, 255 , 255, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "500px",
    background: "#fff",
    boxShadow: "0 0 16px 2px #ccc",
    textAlign: "center",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
});

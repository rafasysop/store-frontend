import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Depositos Recentes</Title>
      <Typography component="p" variant="h4">
        R$3.024,00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        em 04 de Janeiro, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          ver balaço
        </Link>
      </div>
    </React.Fragment>
  );
}
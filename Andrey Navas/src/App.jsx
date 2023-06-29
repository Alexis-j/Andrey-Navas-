import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <Container>
      <h1>App</h1>
      <Box sx={{
        border: "5px",
        p:8 ,
        borderStyle: "solid",
        boxShadow: 3,
        bgcolor: "#111",
        }}>
      pero que belleza</Box>
      <Button variant="contained">El botón</Button>
    </Container>
  );
}

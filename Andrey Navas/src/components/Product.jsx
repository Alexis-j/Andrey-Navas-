import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";


export default function Product() {

    const Img = styled("img")({
      with: "100%",
      heith: "100%",
      ObjectFit: "cover",
      ObjectPosition: "center",
    })
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overFlow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80"
        alt="perro"
      />

      <Box>
        <Typography variant="h4">Produtc Name</Typography>
        <Typography variant="h5">Produtc Description</Typography>
        <Button variant="contained">Add to Cart</Button>
      </Box>
    </Paper>
  );
}

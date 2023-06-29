import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";


export default function Postcard() {

    const Img = styled("img")({
      width: 200,
      heith: 200,
      ObjectFit: "cover",
      ObjectPosition: "center",
      borderRadius:4,
    })
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overFlow: "hidden",
        mt: 5,
        width: 600,
        bgcolor: "#f2c10f",
      }}
    >
      <Img
        src="https://images.unsplash.com/photo-1522787345986-d5c7885a889e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        alt="perro"
      />

      <Box  sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="body1">Product Description</Typography>
        <Button variant="contained">Add to Cart</Button>
      </Box>
      <Box sx={{ mr: 2}}
        component="p"
      >
      €19,99</Box>
    </Paper>
  );
}

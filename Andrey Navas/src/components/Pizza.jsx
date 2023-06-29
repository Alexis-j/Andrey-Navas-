import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Pizza() {
  const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 4,
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
        width: 600,
        bgcolor: "#f2c10f",
      }}
    >
      <Box sx={{ width: 200, height: 200, flexShrink: 0 }}> {/* Cambio: Agrega flexShrink: 0 */}
        <Img
          src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          alt="perro"
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">BreakFast</Typography>
        <Button sx={{ display: "flex", justifyContent: "center" }} variant="contained">
          €21,99
          <br />
          <Box component="p"></Box>
        </Button>
      </Box>
    </Paper>
  );
}

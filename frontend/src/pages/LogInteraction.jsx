import Sidebar from "../components/Sidebar";
import InteractionForm from "../components/InteractionForm";
import {
  Box,
  Typography,
  Paper
} from "@mui/material";

export default function LogInteraction() {
  return (
    <>
      <Sidebar />

      <Box
        sx={{
          ml: "240px",
          p: 4,
          bgcolor: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Log HCP Interaction
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Log interactions using a structured form.
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
          }}
        >
          <InteractionForm />
        </Paper>
      </Box>
    </>
  );
}
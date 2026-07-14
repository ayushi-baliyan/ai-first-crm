import Sidebar from "../components/Sidebar";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

export default function History() {
  const history = [
    {
      doctor: "Dr. Sharma",
      hospital: "Apollo Hospital",
      date: "14 Jul 2026",
      summary: "Discussed diabetes medication and requested product samples.",
    },
    {
      doctor: "Dr. Gupta",
      hospital: "Fortis Hospital",
      date: "13 Jul 2026",
      summary: "Follow-up regarding cardiac products and next visit planned.",
    },
    {
      doctor: "Dr. Mehta",
      hospital: "Max Hospital",
      date: "12 Jul 2026",
      summary: "Discussed new therapy and shared marketing brochure.",
    },
  ];

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
          Interaction History
        </Typography>

        <Typography color="text.secondary" mb={3}>
          View previous HCP interactions.
        </Typography>

        <Paper sx={{ borderRadius: 3 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Doctor</b></TableCell>
                  <TableCell><b>Hospital</b></TableCell>
                  <TableCell><b>Date</b></TableCell>
                  <TableCell><b>Summary</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {history.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.doctor}</TableCell>
                    <TableCell>{item.hospital}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.summary}</TableCell>
                    <TableCell>
                      <Chip
                        label="Completed"
                        color="success"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}
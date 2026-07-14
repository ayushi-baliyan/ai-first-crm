import Sidebar from "../components/Sidebar";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

export default function ChatInterface() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes: message,
        }),
      });

      const data = await res.json();
      setReply(data.summary);
    } catch (err) {
      setReply("❌ Backend not running");
    }

    setLoading(false);
  };

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
        <Typography variant="h4" fontWeight="bold" mb={3}>
          AI Chat Assistant
        </Typography>

        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Ask AI..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "Ask AI"}
          </Button>

          {reply && (
            <Paper
              elevation={2}
              sx={{
                mt: 3,
                p: 2,
                bgcolor: "#eef7ff",
              }}
            >
              <Typography variant="h6" gutterBottom>
                AI Response
              </Typography>

              <Typography>{reply}</Typography>
            </Paper>
          )}
        </Paper>
      </Box>
    </>
  );
}
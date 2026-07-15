import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  MenuItem,
  Typography,
  Alert,
} from "@mui/material";

export default function InteractionForm() {
  const [form, setForm] = useState({
    doctor: "",
    hospital: "",
    speciality: "",
    interactionType: "",
    notes: "",
  });

  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  // Render Backend URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ai-first-crm-backend-gfwr.onrender.com";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setError("");
    setSummary("");

    try {
      const res = await fetch(`${API_URL}/summary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes: form.notes,
        }),
      });

      if (!res.ok) {
        throw new Error("Backend Error");
      }

      const data = await res.json();

      setSummary(data.summary);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to backend.");
    }
  };

  return (
    <Stack spacing={3}>
      <TextField
        label="Doctor Name"
        name="doctor"
        value={form.doctor}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Hospital"
        name="hospital"
        value={form.hospital}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Speciality"
        name="speciality"
        value={form.speciality}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        select
        label="Interaction Type"
        name="interactionType"
        value={form.interactionType}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Visit">Visit</MenuItem>
        <MenuItem value="Call">Call</MenuItem>
        <MenuItem value="Email">Email</MenuItem>
      </TextField>

      <TextField
        label="Interaction Notes"
        name="notes"
        multiline
        rows={5}
        value={form.notes}
        onChange={handleChange}
        fullWidth
      />

      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
      >
        Generate AI Summary
      </Button>

      {summary && (
        <>
          <Typography variant="h6">
            AI Summary
          </Typography>

          <Alert severity="success">
            {summary}
          </Alert>
        </>
      )}

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}
    </Stack>
  );
}
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes: form.notes,
        }),
      });

      const data = await res.json();

      setSummary(data.summary);
    } catch (err) {
      alert("Backend not running");
    }
  };

  return (
    <Stack spacing={3}>
      <TextField
        label="Doctor Name"
        name="doctor"
        value={form.doctor}
        onChange={handleChange}
      />

      <TextField
        label="Hospital"
        name="hospital"
        value={form.hospital}
        onChange={handleChange}
      />

      <TextField
        label="Speciality"
        name="speciality"
        value={form.speciality}
        onChange={handleChange}
      />

      <TextField
        select
        label="Interaction Type"
        name="interactionType"
        value={form.interactionType}
        onChange={handleChange}
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
    </Stack>
  );
}
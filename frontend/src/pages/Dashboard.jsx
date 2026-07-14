import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import {
  Chat,
  History,
  NoteAdd,
  People,
  Event,
  Psychology,
  Assignment,
} from "@mui/icons-material";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <Box
        sx={{
          ml: "240px",
          p: 4,
          background: "#f4f6f9",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold">
            AI-First CRM (HCP Module)
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Welcome to Healthcare Professional Interaction Management Dashboard
          </Typography>

          {/* Statistics */}

          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <People sx={{ color: "#1976d2", fontSize: 45 }} />
                  <Typography color="text.secondary" mt={1}>
                    Total HCPs
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    124
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Event sx={{ color: "#2e7d32", fontSize: 45 }} />
                  <Typography color="text.secondary" mt={1}>
                    Today's Visits
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    18
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Psychology sx={{ color: "#8e24aa", fontSize: 45 }} />
                  <Typography color="text.secondary" mt={1}>
                    AI Summaries
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    56
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Assignment sx={{ color: "#ef6c00", fontSize: 45 }} />
                  <Typography color="text.secondary" mt={1}>
                    Pending Follow-ups
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Main Cards */}

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <NoteAdd
                    sx={{ fontSize: 50, color: "#1976d2", mb: 2 }}
                  />

                  <Typography variant="h6" fontWeight="bold">
                    Log Interaction
                  </Typography>

                  <Typography color="text.secondary" mt={1} mb={2}>
                    Record doctor meetings using structured forms.
                  </Typography>

                  <Button
                    component={Link}
                    to="/log"
                    variant="contained"
                    fullWidth
                  >
                    Open
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Chat
                    sx={{ fontSize: 50, color: "#2e7d32", mb: 2 }}
                  />

                  <Typography variant="h6" fontWeight="bold">
                    AI Chat Assistant
                  </Typography>

                  <Typography color="text.secondary" mt={1} mb={2}>
                    Chat naturally with AI to log HCP interactions.
                  </Typography>

                  <Button
                    component={Link}
                    to="/chat"
                    color="success"
                    variant="contained"
                    fullWidth
                  >
                    Open
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <History
                    sx={{ fontSize: 50, color: "#ef6c00", mb: 2 }}
                  />

                  <Typography variant="h6" fontWeight="bold">
                    Interaction History
                  </Typography>

                  <Typography color="text.secondary" mt={1} mb={2}>
                    View and manage previous interactions.
                  </Typography>

                  <Button
                    component={Link}
                    to="/history"
                    color="warning"
                    variant="contained"
                    fullWidth
                  >
                    Open
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* LangGraph Tools */}

          <Card sx={{ mt: 5, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                LangGraph AI Agent Tools
              </Typography>

              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={4}>
                  ✅ Log Interaction
                </Grid>

                <Grid item xs={12} md={4}>
                  ✅ Edit Interaction
                </Grid>

                <Grid item xs={12} md={4}>
                  ✅ Summarize Visit
                </Grid>

                <Grid item xs={12} md={4}>
                  ✅ Suggest Follow-up
                </Grid>

                <Grid item xs={12} md={4}>
                  ✅ Fetch HCP Profile
                </Grid>

                <Grid item xs={12} md={4}>
                  ✅ AI Conversation
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
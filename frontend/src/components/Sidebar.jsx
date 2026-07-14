import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ChatIcon from "@mui/icons-material/Chat";
import HistoryIcon from "@mui/icons-material/History";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      text: "Log Interaction",
      icon: <NoteAddIcon />,
      path: "/log",
    },
    {
      text: "AI Chat",
      icon: <ChatIcon />,
      path: "/chat",
    },
    {
      text: "History",
      icon: <HistoryIcon />,
      path: "/history",
    },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        background: "#1565C0",
        color: "#fff",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          py: 3,
          fontWeight: "bold",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        AI CRM
      </Typography>

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: "#fff",
              mx: 1,
              borderRadius: 2,
              mb: 1,
              "&.Mui-selected": {
                backgroundColor: "#42A5F5",
              },
              "&:hover": {
                backgroundColor: "#1976D2",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
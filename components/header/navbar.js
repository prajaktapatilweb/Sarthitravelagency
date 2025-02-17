import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { linkID: "/#home", label: "Home" },
  { linkID: "/#services", label: "Services" },
  { linkID: "/#vehicles", label: "Vehicles" },
  { linkID: "/#offers", label: "Offers" },
  { linkID: "/#testimonials", label: "Testimonials" },
  { linkID: "/#contactform", label: "Contact Us" },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      {/* App Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none", width: "100%" }}>
        
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",borderBottom:'2px solid #d70030'  }}>
          
          {/* 🔴 Logo Section with Full Left-Side Background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0, // Start from the very left
              height: "100%",
              width: "max-content",
              backgroundColor: "#d70030",
              padding: "10px 30px",
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
         
            }}
          >
            <a href="/">
              <Image
                src="/images/logosarthi.jpeg"
                width={180}
                height={80}
                alt="Logo"
                style={{ cursor: "pointer", backgroundColor: "transparent", }}
              />
            </a>
          </Box>

          {/* 🔹 Menu for Large Screens */}
          {isLargeScreen && (
                     
                      <Stack direction="row" spacing={2} sx={{ ml: "auto", alignItems: "center",  }}> 
              {navItems.map((item) => (
                <Link key={item.label} href={item.linkID} passHref>
                  <Button
                    sx={{
                      color: "#28282B",
                      textTransform: "initial",
                      fontSize: "16px",
                      py:4,
                      letterSpacing: 1,
                      "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: "white",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}

              {/* 🔹 Book My Car Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d70030",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  px: 3,
                  py: 1,
                  borderRadius: "30px",
                  "&:hover": { backgroundColor: "#b00026" }, // Darker red on hover
                }}
              >
                Book My Car
              </Button>
            </Stack>
          )}

          {/* 🔹 Menu Icon for Mobile */}
          {!isLargeScreen && (
            <IconButton onClick={toggleDrawer(true)} sx={{ ml: "auto" }}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* 🔹 Drawer for Mobile Menu */}
      {!isLargeScreen && (
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
          {/* Drawer Animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }}
            exit={{ x: "-100%", transition: { duration: 0.3 } }}
            style={{
              width: 250,
              height: "100%",
              background: "linear-gradient(135deg, #d70030, #2f58b1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <List>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.3 } }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <ListItem button onClick={toggleDrawer(false)}>
                    <Link href={item.linkID} passHref>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      />
                    </Link>
                  </ListItem>
                </motion.div>
              ))}

              {/* 🔹 Book My Car Button for Mobile */}
              <ListItem sx={{ justifyContent: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#d70030",
                    fontSize: "16px",
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    borderRadius: "30px",
                    "&:hover": { backgroundColor: "#f8d7da", color: "#b00026" },
                  }}
                >
                  Book My Car
                </Button>
              </ListItem>
            </List>
          </motion.div>
        </Drawer>
      )}
    </>
  );
}

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#E60303",
        minHeight: { xs: 56, sm: 64 },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: { xs: "left", sm: "space-between" },
          width: "100%",
        }}
      >
        <IconButton
          aria-label="open drawer"
          sx={{
            display: { xs: "block", sm: "none" },
            color: "white",
          }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: { xs: 1, sm: 0 },
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "1.5rem", sm: "1.5rem" },
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Maldar Tours and Travels
        </Typography>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 1.5,
            // marginLeft: "-5000  rem",
            paddingRight: "4rem",
            justifyContent: "flex-start",

          }}
        >
          <Button color="inherit" component={Link} to="/">
            HOME
          </Button>
          <Button color="inherit" component={Link} to="/services">
            SERVICES
          </Button>
          <Button color="inherit" component={Link} to="/tour-packs">
            TOUR PACKS
          </Button>
          <Button color="inherit" component={Link} to="/about-us">
            ABOUT US
          </Button>
          <Button color="inherit" component={Link} to="/contact-us">
            CONTACT US
          </Button>
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: 220 },
          "& .MuiListItemText-primary": {
            color: "red",
          },
        }}
      >
        <List>
          {["HOME", "SERVICES", "TOUR PACKS", "ABOUT US", "CONTACT US"].map(
            (text) => (
              <ListItem
                button ={true}
                key={text}
                component={Link}
                to={`/${text.replace(" ", "-").toLowerCase()}`}
                onClick={handleDrawerClose}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;



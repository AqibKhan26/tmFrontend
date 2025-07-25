import React, { useState, useRef, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import routes from "../../routes"
import logoCT from "assets/images/tripmaster.inLogoTransparentWhite2.png";
import logoCTBlack from "assets/images/tripmaster.inLogoTransparent2.png";

export default function NewNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 900px)");
    const [scrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [openCollapse, setOpenCollapse] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenCollapse(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const drawer = (
        <Box sx={{ width: 260, p: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Link to="/home" style={{ display: "inline-block" }}>
                    <img
                        src={logoCTBlack} // 👉 Replace with your logo path
                        alt="TripMaster Logo"
                        style={{ height: "100px", objectFit: "contain" }}
                    />
                </Link>
            </Box>
            <List>
                {routes.map((route, idx) =>
                    route.collapse ? (
                        <React.Fragment key={idx}>
                            <ListItem button onClick={() => setOpenCollapse(!openCollapse)}>
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <ListItemText primary={route.name} />
                                {openCollapse ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {route.collapse.map((sub, subIdx) => (
                                        <ListItem
                                            button
                                            key={subIdx}
                                            component={Link}
                                            to={sub.route}
                                            sx={{ pl: 4 }}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            <ListItemText primary={sub.name} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ) : (
                        <ListItem
                            button
                            key={idx}
                            component={Link}
                            to={route.route}
                            onClick={() => setMobileOpen(false)}
                        >
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText primary={route.name} />
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                elevation={scrolled ? 4 : 0}
                sx={{
                    backgroundColor: scrolled
                        ? "rgba(0, 0, 0, 0.7)"
                        : "rgba(255, 255, 255, 0.1)", // light transparent when not scrolled
                    backdropFilter: "blur(10px)", // adds blur effect
                    WebkitBackdropFilter: "blur(10px)", // Safari support
                    transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/home" style={{ display: "inline-block" }}>
                            <img
                                src={logoCT} // 👉 Replace with your logo path
                                alt="TripMaster Logo"
                                style={{ height: "100px", objectFit: "contain" }}
                            />
                        </Link>
                    </Box>

                    {/* Desktop Links */}
                    {!isMobile &&
                        routes.map((route, idx) =>
                            route.collapse ? (
                                <Box key={idx} sx={{ position: "relative", mx: 1 }} ref={dropdownRef}>
                                    <Button
                                        disableRipple
                                        onClick={() => setOpenCollapse(!openCollapse)}
                                        endIcon={openCollapse ? <ExpandLess /> : <ExpandMore />}
                                        sx={{
                                            color: "#fff",
                                            textTransform: "none",
                                            "&:hover": { backgroundColor: "transparent", color: "#f0f0f0" },
                                            "&:active": { backgroundColor: "transparent", color: "#fff" },
                                            "&:focus": { outline: "none", backgroundColor: "transparent" },
                                        }}
                                    >
                                        {route.icon}
                                        {route.name}
                                    </Button>

                                    {openCollapse && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "40px",
                                                right: 0,
                                                background: "#fff",
                                                borderRadius: "6px",
                                                boxShadow: 3,
                                                p: 1,
                                                zIndex: 10,
                                            }}
                                        >
                                            {route.collapse.map((sub, subIdx) => (
                                                <Button
                                                    key={subIdx}
                                                    component={Link}
                                                    to={sub.route}
                                                    onClick={() => setOpenCollapse(false)} // ✅ close on link click
                                                    sx={{
                                                        display: "block",
                                                        color: "#333",
                                                        width: "100%",
                                                        justifyContent: "flex-start",
                                                        "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                                                    }}
                                                >
                                                    {sub.name}
                                                </Button>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <Button
                                    key={idx}
                                    component={Link}
                                    to={route.route}
                                    disableRipple
                                    sx={{
                                        color: "#fff",
                                        textTransform: "none",
                                        "&:hover": { backgroundColor: "transparent", color: "#f0f0f0" },
                                        "&:active": { backgroundColor: "transparent", color: "#fff" },
                                        "&:focus": { outline: "none", backgroundColor: "transparent" },
                                        "&:visited": { color: "#fff" },
                                    }}
                                >
                                    {route.icon}
                                    {route.name}
                                </Button>
                            )
                        )}

                    {/* Mobile Menu Icon */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ color: "#fff" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ "& .MuiDrawer-paper": { background: "#f8f8f8" } }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

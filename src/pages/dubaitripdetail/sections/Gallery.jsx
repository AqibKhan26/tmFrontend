import { useState, useEffect } from "react";
import { Box, Grid, Dialog, IconButton, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSwipeable } from 'react-swipeable';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import dubaiGallery1 from "assets/images/dubai/DubaiGallery01.jpg";
// Skipping DubaiGallery02 as per instruction
import dubaiGallery3 from "assets/images/dubai/DubaiGallery03.jpg";
import dubaiGallery4 from "assets/images/dubai/DubaiGallery04.jpg";
import dubaiGallery5 from "assets/images/dubai/DubaiGallery05.jpg";
import dubaiGallery6 from "assets/images/dubai/DubaiGallery06.jpg";
import dubaiGallery7 from "assets/images/dubai/DubaiGallery07.jpg";
import dubaiGallery8 from "assets/images/dubai/DubaiGallery08.jpg";
import dubaiGallery9 from "assets/images/dubai/DubaiGallery09.jpg";
import dubaiGallery10 from "assets/images/dubai/DubaiGallery10.jpg";
import dubaiGallery11 from "assets/images/dubai/DubaiGallery11.jpg";
import dubaiGallery12 from "assets/images/dubai/DubaiGallery12.jpg";
import dubaiGallery13 from "assets/images/dubai/DubaiGallery13.jpg"; 
import dubaiGallery15 from "assets/images/dubai/DubaiGallery15.jpg";
import dubaiGallery16 from "assets/images/dubai/DubaiGallery16.jpg";
import dubaiGallery17 from "assets/images/dubai/DubaiGallery17.jpg";

function Gallery() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        dubaiGallery1,
        dubaiGallery3,
        dubaiGallery4,
        dubaiGallery5,
        dubaiGallery6,
        dubaiGallery7,
        dubaiGallery8,
        dubaiGallery9,
        dubaiGallery10,
        dubaiGallery11,
        dubaiGallery12,
        dubaiGallery13,
        dubaiGallery15,
        dubaiGallery16,
        dubaiGallery17,
    ];

    const handleOpen = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Swipeable configuration
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
        onSwipedRight: () => setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        ),
        trackMouse: true,
    });

    // Handle left and right image navigation
    const goToNextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const goToPreviousImage = () => setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

    // Keyboard navigation handler
    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            goToNextImage();
        } else if (event.key === "ArrowLeft") {
            goToPreviousImage();
        }
    };

    useEffect(() => {
        if (open) {
            // Add the keyboard event listener when the modal is open
            window.addEventListener("keydown", handleKeyDown);

            // Clean up the event listener when the modal is closed
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [open]);

    return (
        <Box sx={{ px: 2 }}>
            {isMobile ? (
                // Mobile: horizontal slider
                <Box
                    sx={{
                        overflowX: "auto",
                        display: "flex",
                        gap: 2,
                        py: 2,
                        px: 1,
                        scrollSnapType: "x mandatory",
                        width: "100%", // Ensure the container width is limited to 100% of the parent container
                    }}
                >
                    {images.map((img, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={img}
                            alt={`Gallery ${index}`}
                            onClick={() => handleOpen(index)}
                            sx={{
                                flexShrink: 0,
                                scrollSnapAlign: "start",
                                width: "100%", // Let the image take the full width of the container
                                height: 200,
                                objectFit: "cover",
                                borderRadius: 2,
                                cursor: "pointer",
                                border: "2px solid rgba(0,0,0,0.1)",
                                boxShadow: 1,
                            }}
                        />
                    ))}
                </Box>

            ) : (
                // Desktop: grid layout
                <Grid container spacing={2} sx={{ px: 4, py: 2 }}>
                    {images.map((img, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Box
                                component="img"
                                src={img}
                                alt={`Gallery ${index}`}
                                onClick={() => handleOpen(index)}
                                sx={{
                                    width: "100%",
                                    height: 200,
                                    objectFit: "cover",
                                    borderRadius: 2,
                                    cursor: "pointer",
                                    border: "2px solid rgba(0,0,0,0.1)",
                                    boxShadow: 1,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Enlarged Image Viewer */}
            <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
                <Box
                    {...swipeHandlers} // Add swipe functionality to the container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        width: "100%",
                        height: "100vh",
                        position: "relative",
                    }}
                >
                    {/* Close button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "white",
                            zIndex: 2,
                            backgroundColor: "rgba(148, 148, 148, 0.64)",
                            borderRadius: "50%",
                            padding: "8px",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Left Navigation */}
                    <IconButton
                        onClick={goToPreviousImage}
                        sx={{
                            position: "absolute",
                            left: 10,
                            top: "50%",
                            color: "white",
                            zIndex: 2,
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(148, 148, 148, 0.64)",
                            borderRadius: "50%",
                            padding: "8px",
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    {/* Right Navigation */}
                    <IconButton
                        onClick={goToNextImage}
                        sx={{
                            position: "absolute",
                            right: 10,
                            top: "50%",
                            color: "white",
                            zIndex: 2,
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(148, 148, 148, 0.64)",
                            borderRadius: "50%",
                            padding: "8px",
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>

                    <Box
                        component="img"
                        src={images[currentIndex]}
                        alt={`Enlarged ${currentIndex}`}
                        sx={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            borderRadius: 2,
                        }}
                    />
                </Box>
            </Dialog>
        </Box>
    );
}

export default Gallery;

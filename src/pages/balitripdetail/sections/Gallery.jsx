import { useState, useEffect } from "react";
import { Box, Grid, Dialog, IconButton, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSwipeable } from 'react-swipeable';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import baliGallery1 from "assets/images/bali/BaliGallery01.png"
import baliGallery2 from "assets/images/bali/BaliGallery02.png"
import baliGallery3 from "assets/images/bali/BaliGallery03.png"
import baliGallery4 from "assets/images/bali/BaliGallery04.png"
import baliGallery5 from "assets/images/bali/BaliGallery05.jpg"
import baliGallery6 from "assets/images/bali/BaliGallery06.jpg"
import baliGallery7 from "assets/images/bali/BaliGallery07.jpg"
import baliGallery8 from "assets/images/bali/BaliGallery08.jpg"
import baliGallery9 from "assets/images/bali/BaliGallery09.jpg"
import baliGallery10 from "assets/images/bali/BaliGallery10.jpg"
import baliGallery11 from "assets/images/bali/BaliGallery11.jpg"
import baliGallery12 from "assets/images/bali/BaliGallery12.jpg"
import baliGallery13 from "assets/images/bali/BaliGallery13.jpg"
import baliGallery14 from "assets/images/bali/BaliGallery14.jpg"
import baliGallery15 from "assets/images/bali/BaliGallery15.jpg"

function Gallery() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        baliGallery1,
        baliGallery2,
        baliGallery3,
        baliGallery4,
        baliGallery5,
        baliGallery6,
        baliGallery7,
        baliGallery8,
        baliGallery9,
        baliGallery10,
        baliGallery11,
        baliGallery12,
        baliGallery13,
        baliGallery14,
        baliGallery15,
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

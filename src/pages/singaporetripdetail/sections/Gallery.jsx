import { useState, useEffect } from "react";
import { Box, Grid, Dialog, IconButton, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSwipeable } from 'react-swipeable';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import singaporeGallery01 from "assets/images/singapore/SingaporeGallery01.jpg";
import singaporeGallery02 from "assets/images/singapore/SingaporeGallery02.jpg";
import singaporeGallery03 from "assets/images/singapore/SingaporeGallery03.jpg";
import singaporeGallery04 from "assets/images/singapore/SingaporeGallery04.jpg";
import singaporeGallery05 from "assets/images/singapore/SingaporeGallery05.jpg";
import singaporeGallery06 from "assets/images/singapore/SingaporeGallery06.jpg";
import singaporeGallery07 from "assets/images/singapore/SingaporeGallery07.jpg";
import singaporeGallery08 from "assets/images/singapore/SingaporeGallery08.jpg";
import singaporeGallery09 from "assets/images/singapore/SingaporeGallery09.jpg";
import singaporeGallery10 from "assets/images/singapore/SingaporeGallery10.jpg";
import singaporeGallery11 from "assets/images/singapore/SingaporeGallery11.jpg";
import singaporeGallery12 from "assets/images/singapore/SingaporeGallery12.jpg";
import singaporeGallery13 from "assets/images/singapore/SingaporeGallery13.jpg";
import singaporeGallery14 from "assets/images/singapore/SingaporeGallery14.jpg";
import singaporeGallery15 from "assets/images/singapore/SingaporeGallery15.jpg";
import singaporeGallery16 from "assets/images/singapore/SingaporeGallery16.jpg";

function Gallery() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        singaporeGallery01,
        singaporeGallery02,
        singaporeGallery03,
        singaporeGallery04,
        singaporeGallery05,
        singaporeGallery06,
        singaporeGallery07,
        singaporeGallery08,
        singaporeGallery09,
        singaporeGallery10,
        singaporeGallery11,
        singaporeGallery12,
        singaporeGallery13,
        singaporeGallery14,
        singaporeGallery15,
        singaporeGallery16,
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

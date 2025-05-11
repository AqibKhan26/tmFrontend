// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import CloseIcon from "@mui/icons-material/Close";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bgContact.jpg";

function Contact() {
    const form = useRef();
    const userName = useRef();
    const userEmail = useRef();
    const message = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        try {
            emailjs.sendForm('service_zp5bise', 'template_xs3so7s', form.current, 'm0rSpVWLEEmmFzz9z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            toggleSuccessSnackbar()
        } catch {
            toggleErrorSnackbar()
        } finally {
            e.target.reset()
        }

    };

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const toggleSuccessSnackbar = () => setShowSuccess(!showSuccess);
    const toggleErrorSnackbar = () => setShowError(!showError);
    
    const toastStylesSuccess = ({
      palette: { info },
      borders: { borderRadius },
      typography: { size },
      boxShadows: { lg },
    }) => ({
      "& .MuiPaper-root": {
        backgroundColor: "green",
        borderRadius: borderRadius.lg,
        fontSize: size.sm,
        fontWeight: 400,
        boxShadow: lg,
        px: 2,
        py: 0.5,
      },
    });

    const toastStylesError = ({
        palette: { info },
        borders: { borderRadius },
        typography: { size },
        boxShadows: { lg },
      }) => ({
        "& .MuiPaper-root": {
          backgroundColor: "red",
          borderRadius: borderRadius.lg,
          fontSize: size.sm,
          fontWeight: 400,
          boxShadow: lg,
          px: 2,
          py: 0.5,
        },
      });
  
    const toastTemplateSuccess = (
      <MKBox display="flex" justifyContent="space-between" alignItems="center" color="white">
        The message has been sent !! 
        <CloseIcon
          fontSize="medium"
          sx={{ ml: 4, mr: -1, cursor: "pointer" }}
          onClick={toggleSuccessSnackbar}
        />
      </MKBox>
    );

    const toastTemplateError = (
        <MKBox display="flex" justifyContent="space-between" alignItems="center" color="white">
          Message could not be sent, please contact via email.
          <CloseIcon
            fontSize="medium"
            sx={{ ml: 4, mr: -1, cursor: "pointer" }}
            onClick={toggleErrorSnackbar}
          />
        </MKBox>
      );

    return (
        <MKBox component="section" py={{ xs: 0, lg: 6 }}>
            <Container>
                <Grid container item px={6}>
                    <MKBox
                        width="100%"
                        bgColor="white"
                        borderRadius="xl"
                        shadow="xl"
                        mb={6}
                        sx={{ overflow: "hidden" }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={7}>
                                <MKBox component="form" ref={form} p={2} method="submit" onSubmit={sendEmail}>
                                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                                        <MKTypography variant="h2" mb={1}>
                                            Say Hi!
                                        </MKTypography>
                                        <MKTypography variant="body1" color="text" mb={2}>
                                            Have a Question ? 🤔 or.. <br />
                                            Do you want to work together?  🤩
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox pt={0.5} pb={3} px={3}>
                                        <Grid container>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                    variant="standard"
                                                    label="My name is"
                                                    placeholder="Full Name"
                                                    name="user_name"
                                                    InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                    ref={userName}
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                    variant="standard"
                                                    label="My email is"
                                                    placeholder="Your email"
                                                    name="user_email"
                                                    InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                    ref={userEmail}
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={3}>
                                                <MKInput
                                                    variant="standard"
                                                    label="Your message"
                                                    placeholder="I want to say that..."
                                                    name="message"
                                                    InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                    multiline
                                                    rows={6}
                                                    ref={message}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            md={6}
                                            justifyContent="flex-end"
                                            textAlign="right"
                                            ml="auto"
                                        >
                                            <MKButton variant="gradient" color="info" type="submit">
                                                Send Message
                                            </MKButton>
                                        </Grid>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                position="relative"
                                px={0}
                                sx={{
                                    backgroundImage: ({
                                        palette: { gradients },
                                        functions: { rgba, linearGradient },
                                    }) => `${linearGradient(rgba(gradients.info.main, 0.3), rgba(gradients.info.state, 0.3))}, url(${bgImage})`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <MKBox
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                    height="100%"
                                >
                                    <MKBox py={6} pl={6} pr={{ xs: 6, sm: 12 }} my="auto">
                                        <MKTypography variant="h3" color="white" mb={1}>
                                            Contact Information
                                        </MKTypography>
                                        <MKBox display="flex" color="white" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-envelope" />
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                aqibkhan026@gmail.com
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox display="flex" color="white" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-map-marker-alt" />
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                South Jordan, UT 84095
                                            </MKTypography>
                                        </MKBox>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Grid>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={showSuccess}
                    autoHideDuration={3000}
                    onClose={toggleSuccessSnackbar}
                    message={toastTemplateSuccess}
                    action={toggleSuccessSnackbar}
                    sx={toastStylesSuccess}
                />
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={showError}
                    autoHideDuration={3000}
                    onClose={toggleErrorSnackbar}
                    message={toastTemplateError}
                    action={toggleErrorSnackbar}
                    sx={toastStylesError}
                />
            </Container>
        </MKBox>
    );
}

export default Contact;
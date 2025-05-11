  /*
  =========================================================
  * Material Kit 2 PRO React - v2.1.1
  =========================================================

  * Product Page: https://www.creative-tim.com/product/material-kit-pro-react
  * Copyright 2024 Creative Tim (https://www.creative-tim.com)

  Coded by www.creative-tim.com

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  */

  // @mui material components
  import Container from "@mui/material/Container";
  import Grid from "@mui/material/Grid";
  import Snackbar from "@mui/material/Snackbar";

  import React, { useRef, useState } from 'react';
  import emailjs from '@emailjs/browser';

  import CloseIcon from "@mui/icons-material/Close";

  // Material Kit 2 PRO React components
  import MKBox from "components/MKBox";
  import MKTypography from "components/MKTypography";
  import MKInput from "components/MKInput";
  import MKButton from "components/MKButton";
  import MKSnackbar from "components/MKSnackbar";

  function Contact() {
    const form = useRef();
    const userName = useRef();
    const userEmail = useRef();
    const message = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        try {
            emailjs.sendForm('service_jo0p4bc', 'template_qp8ybp3', form.current, '80lmAscu1BNn0JgZO')
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
      <MKBox
        component="section"
        display="grid"
        position="relative"
        minHeight="90vh"
        borderRadius="xl"
        mr={{ xs: 0, lg: -2 }}
        mb={{ xs: 0, lg: -2 }}
        mt="20px"
        sx={{ overflow: { xs: "hidden", lg: "visible" }, placeItems: "center" }}
      >
        <MKBox
          component="img"
          alt="lake house"
          src="https://images.unsplash.com/photo-1539803442075-48618f39bb3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=963&amp;q=80"
          width={{ xs: "100%", lg: "50%" }}
          height={{ xs: "100%", lg: "100%" }}
          position="absolute"
          right={0}
          bottom={{ xs: "-25%", lg: "unset" }}
          top={{ xs: 0, lg: "unset" }}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: ({ borders: { borderRadius } }) => ({ xs: 0, lg: borderRadius.lg }),
          }}
        />
        <Container>
          <Grid container spacing={{ xs: 0, lg: 3 }} sx={{ mt: { xs: 0, lg: 12 } }}>
            <Grid item xs={12} lg={7} justifyContent="center" flexDirection="column" sx={{
                width: {
                  xs: '100%', // 100% width on xs and sm
                  md: '100%',
                  lg: '60%' // default width from md and up
                },
              }}>
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                shadow="lg"
                borderRadius="xl"
                sx={{
                  backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                    rgba(white.main, 0.8),
                  backdropFilter: "saturate(200%) blur(30px)",
                  px: { xs: 3, sm: 6 },
                  py: { xs: 3, sm: 8 },
                  mb: { xs: 0, lg: 8 },
                  mt: { xs: 0, lg: -6 },
                }}
              >
                <MKTypography variant="h3" textAlign="center" mb={2}>
                  Contact us
                </MKTypography>
                <MKBox component="form" ref={form} method="submit" onSubmit={sendEmail} width='100%'>
                  <MKBox py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                    <Grid container spacing={3} sx={{ mb: 3 }} flexDirection="column">
                      <Grid item xs={12} md={6} lg={12} xl={6}>
                        <MKInput
                          variant="standard"
                          placeholder="eg. Michael DeSanta"
                          label="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          name="user_name"
                          ref={userName}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ my: 1 }}>
                        <MKInput
                          variant="standard"
                          type="email"
                          placeholder="eg. material@design.com"
                          label="Email Address"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          name="user_email"
                          ref={userEmail}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          variant="standard"
                          label="Your Message"
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          multiline
                          fullWidth
                          name="message"
                          ref={message}
                        />
                      </Grid>
                    </Grid>
                    <Grid container flexDirection="column">
                      <Grid item xs={12}>
                        <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                          Send Message
                        </MKButton>
                      </Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
          <MKSnackbar
            color="success"
            content={toastTemplateSuccess}
            open={showSuccess}
            onClose={toggleSuccessSnackbar}
          />
          <MKSnackbar
            color="error"
            icon="warning"
            content={toastTemplateError}
            open={showError}
            onClose={toggleErrorSnackbar}
          />
        </Container>
      </MKBox>
    );
  }

  export default Contact;

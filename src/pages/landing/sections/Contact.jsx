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

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKSnackbar from "components/MKSnackbar";
import MKAlert from "components/MKAlert";


const imageUrl = "https://images.unsplash.com/photo-1539803442075-48618f39bb3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=963&amp;q=80"

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
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
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
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${imageUrl})`,
                  backgroundSize: "cover",
                }}
                width="100%"
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      {/* <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </MKTypography> */}
                    </MKBox>
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
                        experience@tripmaster.in
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
                        No: 110, 7th Cross Rd, Dollar Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7} width="100%">
                <MKBox component="form" p={2} method="post" ref={form} onSubmit={sendEmail} type="submit">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Say Hi!
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container flexDirection="column">
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Email"
                          placeholder="xyz@gmail.com"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          name="user_email"
                          inputRef={userEmail}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          name="message"
                          inputRef={message}
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
                      mt={3}
                    >
                      <MKButton variant="gradient" color="info" type="submit">
                        Send Message
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
      {showSuccess && (
        <MKBox px={3} pb={2}>
          <MKAlert color="success" dismissible onClose={toggleSuccessSnackbar}>
            The message has been sent!!
          </MKAlert>
        </MKBox>
      )}

      {showError && (
        <MKBox px={3} pb={2}>
          <MKAlert color="error" dismissible onClose={toggleErrorSnackbar}>
            Message could not be sent, please contact via email.
          </MKAlert>
        </MKBox>
      )}
    </MKBox>
  );
}

export default Contact;
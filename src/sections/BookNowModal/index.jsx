import { useRef, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import emailjs from '@emailjs/browser';

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKAlert from "components/MKAlert";

function SimpleModal({ show, toggleModal, defaultMessage = "" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // `sm` = 600px
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // `md` = 900px

  const form = useRef();
  const userName = useRef();
  const userEmail = useRef();
  const message = useRef();

  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");
    try {
      emailjs.sendForm('service_jo0p4bc', 'template_qp8ybp3', form.current, '80lmAscu1BNn0JgZO')
        .then((result) => {
          console.log(result.text);
          setEmailSent(true);
          toggleModal(); // Close modal
          setTimeout(() => setEmailSent(false), 4000); // Hide alert after 4s
        }, (error) => {
          console.log(error.text);
        });
    } catch {
      console.error("Email send failed:", error.text);
    } finally {
      e.target.reset()
    }
  };

  const modalWidth = isMobile ? "90%" : isTablet ? "70%" : "500px";

  return (
    <MKBox component="section">
      {emailSent && (
        <MKBox
          position="fixed"
          top={20}
          left="50%"
          sx={{ transform: "translateX(-50%)", zIndex: 1500 }}
          width={isMobile ? "90%" : "auto"}
        >
          <MKAlert color="success" dismissible>
            Your inquiry has been sent successfully!
          </MKAlert>
        </MKBox>
      )}
      <Container>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              component="form"
              ref={form}
              onSubmit={sendEmail}
              method="post"
              type="submit"
              width={modalWidth}
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              maxHeight="90vh"
              overflow="auto"
              px={isMobile ? 2 : 3}
              py={2}
            >
              <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <MKTypography variant="h5">Send an Inquiry</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox>

              <Divider sx={{ my: 0 }} />

              <MKBox py={2}>
                <Grid container spacing={2} flexDirection="column">
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="My name is"
                      placeholder="Full Name"
                      name="user_name"
                      inputRef={userName}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Email"
                      placeholder="xyz@gmail.com"
                      name="user_email"
                      inputRef={userEmail}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <MKInput type="hidden" name="message" value={defaultMessage} inputRef={message} />
                </Grid>
              </MKBox>

              <Divider sx={{ my: 0 }} />

              <MKBox display="flex" justifyContent="space-between" pt={2}>
                <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                  Close
                </MKButton>
                <MKButton variant="gradient" color="info" type="submit">
                  Send Inquiry
                </MKButton>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default SimpleModal;

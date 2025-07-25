import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information({ title, description }) {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="h3" mb={3}>
            {title}
          </MKTypography>
          <MKTypography variant="body2">
            {description}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

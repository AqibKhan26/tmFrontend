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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer" py={4}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="flex-start">
          {/* Left Side: Logo + Socials */}
          <Grid item xs={12} md={4}>
            <MKBox display="flex" flexDirection="column" alignItems="flex-start" textAlign="left">
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} width="10rem" mb={1} />
              </Link>
              <MKTypography variant="h6" fontWeight="bold" color="dark">
                {brand.name}
              </MKTypography>
              <MKBox display="flex" mt={2}>
                {socials.map(({ icon, link }, key) => (
                  <MKTypography
                    key={link}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    mr={key === socials.length - 1 ? 0 : 2}
                  >
                    {icon}
                  </MKTypography>
                ))}
              </MKBox>
            </MKBox>
          </Grid>

          {/* Right Side: Menus */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3} justifyContent="flex-end">
              {menus.map(({ name: title, items }) => (
                <Grid key={title} item xs={6} sm={4} md={3}>
                  <MKTypography
                    display="block"
                    variant="button"
                    fontWeight="bold"
                    textTransform="capitalize"
                    mb={1}
                    color="dark"
                  >
                    {title}
                  </MKTypography>
                  <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                    {items.map(({ name, route, href }) => (
                      <MKBox key={name} component="li" py={0.5}>
                        {href ? (
                          <MKTypography
                            component="a"
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            variant="button"
                            fontWeight="regular"
                            color="text"
                          >
                            {name}
                          </MKTypography>
                        ) : (
                          <MKTypography
                            component={Link}
                            to={route}
                            variant="button"
                            fontWeight="regular"
                            color="text"
                          >
                            {name}
                          </MKTypography>
                        )}
                      </MKBox>
                    ))}
                  </MKBox>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Full-width Copyright (below both sections) */}
          <Grid item xs={12} mt={4}>
            <MKTypography variant="body2" color="text" textAlign="center">
              {copyright}
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;

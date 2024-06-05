import { Link as ReactRouterLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { Button, Typography } from "@mui/material";

const socialLinks: { text: "linkedin" | "email"; url: string }[] = [
  { text: "linkedin", url: "https://linkedin/you" },
  { text: "email", url: "mailto:your@email.com" },
];

const wrapperStyles = {
  width: "100%",
  position: "relative",
  backgroundColor: "background.weak",
  pb: { xs: 12, md: 0 },
};

const Footer = () => {
  return (
    <Stack sx={wrapperStyles} spacing={1.5} alignItems="center">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "row-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1.5}>
            {socialLinks.map(({ url, text }) => (
              <ReactRouterLink
                key={text}
                to={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>{text}</Typography>
              </ReactRouterLink>
            ))}
          </Stack>

          <Typography variant="h6" color="text.soft">
            {`© Hyland Analytics ${new Date().getFullYear()}`}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;

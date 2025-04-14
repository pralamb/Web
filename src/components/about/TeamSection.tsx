import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { UI_TEXTS, TEAM_MEMBERS } from "../../config/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const { team } = UI_TEXTS.sections.about;

export default function TeamSection() {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            color="primary"
            align="center"
            sx={{ display: "block", mb: 2 }}
          >
            {team.overline}
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 4,
              background: (theme) => theme.palette.primary.main,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {team.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            {team.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {TEAM_MEMBERS.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="text.secondary"
                    sx={{ fontWeight: "medium" }}
                  >
                    {member.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {member.description}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      component="a"
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: "#0077B5" },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: "#1DA1F2" },
                      }}
                    >
                      <TwitterIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href={`mailto:${member.social.email}`}
                      size="small"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      <EmailIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

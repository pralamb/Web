import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { TEAM_MEMBERS, UI_TEXTS } from "../../config/constants";

const MotionBox = motion(Box);

const TeamSection = () => {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom align="center">
        {UI_TEXTS.sections.about.team.title}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {TEAM_MEMBERS.map((member, index) => (
          <Grid item xs={12} md={4} key={member.name}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    color="primary"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    gutterBottom
                  >
                    {member.position}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;

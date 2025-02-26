import { Container } from "@mui/material";
import HistorySection from "../components/about/HistorySection";
import ValuesSection from "../components/about/ValuesSection";
import TeamSection from "../components/about/TeamSection";

const About = () => {
  return (
    <Container maxWidth="lg">
      <HistorySection />
      <ValuesSection />
      <TeamSection />
    </Container>
  );
};

export default About;

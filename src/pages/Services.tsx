import { Container } from "@mui/material";
import ServiceHeader from "../components/services/ServiceHeader";
import ServiceGrid from "../components/services/ServiceGrid";
import ServiceCTA from "../components/services/ServiceCTA";

const Services = () => {
  return (
    <Container maxWidth="lg">
      <ServiceHeader />
      <ServiceGrid />
      <ServiceCTA />
    </Container>
  );
};

export default Services;

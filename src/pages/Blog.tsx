import { Box, Container, useTheme } from "@mui/material";
import { useState } from "react";
import BlogHeader from "../components/blog/BlogHeader";
import BlogGrid from "../components/blog/BlogGrid";
import { BLOG_POSTS } from "../config/constants";
import { IMAGES } from "../config/constants";

const Blog = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.colors.background}E6, ${theme.palette.primary.dark}80)`,
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "500px",
          opacity: 0.03,
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <BlogHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <BlogGrid filteredPosts={filteredPosts} />
      </Container>
    </Box>
  );
};

export default Blog;

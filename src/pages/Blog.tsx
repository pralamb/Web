import { useState } from "react";
import { Container } from "@mui/material";
import { BLOG_POSTS } from "../config/constants";
import BlogHeader from "../components/blog/BlogHeader";
import BlogGrid from "../components/blog/BlogGrid";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <BlogHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <BlogGrid filteredPosts={filteredPosts} />
    </Container>
  );
};

export default Blog;

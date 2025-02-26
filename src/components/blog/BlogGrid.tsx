import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { BLOG_POSTS, UI_TEXTS } from "../../config/constants";

const MotionCard = motion(Card);

interface BlogGridProps {
  filteredPosts: typeof BLOG_POSTS;
}

const BlogGrid = ({ filteredPosts }: BlogGridProps) => {
  return (
    <Grid container spacing={4}>
      {filteredPosts.map((post, index) => (
        <Grid item xs={12} md={6} key={post.id}>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              height="200"
              image={post.image}
              alt={post.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ mb: 2 }}>
                <Chip
                  label={post.category}
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Typography variant="caption" color="text.secondary">
                  {new Date(post.date).toLocaleDateString(
                    UI_TEXTS.sections.blog.date.locale,
                    UI_TEXTS.sections.blog.date.options
                  )}
                </Typography>
              </Box>
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {post.excerpt}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button variant="outlined" color="primary" fullWidth>
                {UI_TEXTS.buttons.readMore}
              </Button>
            </CardActions>
          </MotionCard>
        </Grid>
      ))}

      {filteredPosts.length === 0 && (
        <Box sx={{ textAlign: "center", my: 4, width: "100%" }}>
          <Typography variant="h6" color="text.secondary">
            {UI_TEXTS.sections.blog.noResults}
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default BlogGrid;

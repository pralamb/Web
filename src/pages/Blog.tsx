import { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  TextField,
} from '@mui/material'
import { motion } from 'framer-motion'
import { BLOG_POSTS, UI_TEXTS } from '../config/constants'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 6 }}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          {UI_TEXTS.sections.blog.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {UI_TEXTS.sections.blog.subtitle}
        </Typography>

        {/* Buscador */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder={UI_TEXTS.sections.blog.search.placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mt: 2 }}
        />
      </MotionBox>

      {/* Grid de Posts */}
      <Grid container spacing={4}>
        {filteredPosts.map((post, index) => (
          <Grid item xs={12} md={6} key={post.id}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: 'cover' }}
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
      </Grid>

      {/* Mensaje si no hay resultados */}
      {filteredPosts.length === 0 && (
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h6" color="text.secondary">
            {UI_TEXTS.sections.blog.noResults}
          </Typography>
        </Box>
      )}
    </Container>
  )
}

export default Blog 
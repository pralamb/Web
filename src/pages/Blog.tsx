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

const MotionBox = motion(Box)
const MotionCard = motion(Card)

const blogPosts = [
  {
    id: 1,
    title: 'Innovaciones en el Tratamiento de Aguas Residuales',
    excerpt: 'Descubre las últimas tecnologías y métodos para el tratamiento eficiente de aguas residuales industriales.',
    image: '/Web-Ambiental/images/blog/water-treatment.jpg',
    category: 'Tratamiento de Aguas',
    date: '2024-02-20',
  },
  {
    id: 2,
    title: 'Economía Circular en la Gestión de Residuos',
    excerpt: 'Cómo implementar principios de economía circular para optimizar la gestión de residuos empresariales.',
    image: '/Web-Ambiental/images/blog/circular-economy.jpg',
    category: 'Gestión de Residuos',
    date: '2024-02-15',
  },
  {
    id: 3,
    title: 'Certificaciones Ambientales para Empresas',
    excerpt: 'Guía completa sobre las principales certificaciones ambientales y sus beneficios para tu empresa.',
    image: '/Web-Ambiental/images/blog/certifications.jpg',
    category: 'Gestión Ambiental',
    date: '2024-02-10',
  },
  {
    id: 4,
    title: 'Energías Renovables en la Industria',
    excerpt: 'Análisis de las diferentes opciones de energías renovables y su implementación en el sector industrial.',
    image: '/Web-Ambiental/images/blog/renewable-energy.jpg',
    category: 'Eficiencia Energética',
    date: '2024-02-05',
  },
]

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(
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
          Blog y Novedades
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Mantente al día con las últimas noticias y tendencias en sostenibilidad ambiental
        </Typography>

        {/* Buscador */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar artículos..."
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
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
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
                  Leer más
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
            No se encontraron artículos que coincidan con tu búsqueda.
          </Typography>
        </Box>
      )}
    </Container>
  )
}

export default Blog 
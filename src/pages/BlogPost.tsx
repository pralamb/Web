import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Chip,
  useTheme,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import { BLOG_POSTS, UI_TEXTS, IMAGES } from "../config/constants";
import { motion } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogPost = () => {
  const { id } = useParams();
  const theme = useTheme();

  const post = BLOG_POSTS.find((post) => post.id === Number(id));

  if (!post) {
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
        <Container>
          <Box sx={{ py: 8, textAlign: "center" }}>
            <Typography variant="h4">Post no encontrado</Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  const contentParagraphs = post.content.split("\n\n");

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            position: "relative",
            height: "50vh", // Reducido de 70vh a 50vh
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ mt: -20, position: "relative", pb: 8 }}>
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              p: { xs: 3, md: 6 },
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Chip
                label={post.category}
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                  color: theme.palette.common.white,
                  fontWeight: 500,
                  px: 2,
                }}
              />
              <Stack direction="row" spacing={1} alignItems="center">
                <AccessTimeIcon
                  sx={{ color: theme.palette.text.secondary, fontSize: 20 }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {post.readingTime}
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {new Date(post.date).toLocaleDateString(
                  UI_TEXTS.sections.blog.date.locale
                )}
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                mb: 4,
                fontSize: { xs: "2rem", md: "3.5rem" },
                background: `linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  src={post.author.avatar}
                  alt={post.author.name}
                  sx={{ width: 48, height: 48 }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.palette.common.white, fontWeight: 600 }}
                  >
                    {post.author.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {post.author.role}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Divider sx={{ mb: 6, opacity: 0.1 }} />

            <Box sx={{ mb: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "40%", // Ancho reducido para que quepa al lado
                  float: "right", // Flotamos la imagen a la derecha
                  margin: "0 0 20px 20px", // Margen izquierdo y inferior para separar del texto
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                <Box
                  component="img"
                  src={post.image}
                  alt={post.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "cover",
                    display: "block",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Box>
              {contentParagraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                    mb: 3,
                    whiteSpace: "pre-line",
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Box sx={{ mt: 6 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {post.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      color: theme.palette.text.secondary,
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.15)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default BlogPost;

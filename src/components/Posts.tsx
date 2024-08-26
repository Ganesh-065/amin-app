import { Grid } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Posts = () => {
  const [posts] = useState([
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/100",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/101",
      imageLabel: "Image Text",
    },

    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/100",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/101",
      imageLabel: "Image Text",
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/100",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/101",
      imageLabel: "Image Text",
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/100",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/101",
      imageLabel: "Image Text",
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/100",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://picsum.photos/200/101",
      imageLabel: "Image Text",
    },
  ]);

  return (
    <div>
      <Grid container style={{ maxWidth: 700, margin: "auto" }} gap={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} key={index}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                  image={post.image}
                  alt={post.imageLabel}
                />
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;

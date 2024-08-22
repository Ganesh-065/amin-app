import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";
import Sidebar from "./Sidebar";
import Login from "../components/Login";
import Register from "../components/Register";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://picsum.photos/200/300",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://picsum.photos/200/300",
    imageLabel: "Image Text",
  },
];

const posts = ["post 1", "post 2", "post 3"];

const sidebar = {
  title: "About",
  description:
    "Embrace each day with gratitude and focus on the things you can control; happiness naturally follows when you appreciate the little moments and let go of what you cannot change.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// to do remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          {/* <pre>{BlogPost2}</pre> */}
        </main>
      </Container>
      {/* <BlogPost2 /> */}
      <Footer />
    </ThemeProvider>
  );
}

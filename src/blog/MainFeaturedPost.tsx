import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { incrementBlogVal, setBlogVal } from "../redux/blogSlice";
import { RootState } from "../redux/store";
interface MainProps {
  posts: {
    id: number;
    title: string;
    description: string;
    image: string;
    imageText: string;
    linkText: string;
  }[];
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;
  const { blogIndex } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      if (blogIndex === posts.length - 1) {
        dispatch(setBlogVal(0));
      } else {
        dispatch(incrementBlogVal());
      }
    }, 3000);

    return () => clearInterval(timeoutId);
  }, [blogIndex]);

  return (
    <Grid
      item
      xs={12}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />

      <img
        src={posts[blogIndex].image}
        alt={posts[blogIndex].imageText}
        style={{ width: "100%", height: "300px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          position: "relative",
          top: "-40px",
          right: "-90%",
        }}
      >
        {posts.map((post) => (
          <div
            role="button"
            key={post.id}
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "white",
              zIndex: 100,
              borderRadius: "50%",
              border: "1px solid black",
              marginRight: "5px",
            }}
            onClick={() => dispatch(setBlogVal(post.id))}
          ></div>
        ))}
      </div>
    </Grid>
  );
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBlogVal, setBlogVal } from "../redux/blogSlice";
import { RootState } from "../redux/store";

const Corousel = () => {
  const { blogIndex } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch();

  const posts = [
    {
      id: 0,
      title: "Title of a longer featured blog post 0",
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: "https://picsum.photos/1100/355",
      imageText: "main image description 0",
      linkText: "Continue 0 reading…",
    },
    {
      id: 1,
      title: "Title of a longer featured blog post",
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: "https://picsum.photos/1100/353",
      imageText: "main image description",
      linkText: "Continue reading…",
    },
    {
      id: 2,
      title: "Title of a longer featured blog post 1",
      description:
        "Multiple lines of text that form the 1 lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: "https://picsum.photos/1100/351",
      imageText: "main image description 1",
      linkText: "Continue reading 1…",
    },
    {
      id: 3,
      title: "Title of a longer featured blog post 2",
      description:
        "Multiple lines of text that form the lede, 2 informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: "https://picsum.photos/1100/352",
      imageText: "main image description 2",
      linkText: "Continue reading 2…",
    },
  ];

  useEffect(() => {
    const timeoutId = setInterval(() => {
      if (blogIndex === posts.length - 1) {
        dispatch(setBlogVal(0));
      } else {
        dispatch(incrementBlogVal());
      }
    }, 3000);

    return () => clearInterval(timeoutId);
  }, [blogIndex, dispatch, posts.length]);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={posts[blogIndex].image}
        alt={posts[blogIndex].imageText}
        style={{ width: "100%", height: "300px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          position: "absolute",
          bottom: "20px",
          right: "10px",
        }}
      >
        {posts.map((post) => (
          <button
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
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Corousel;

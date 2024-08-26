import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./post.css";
import Corousel from "../components/Corousel";
import ImageScrollbar from "../components/ImageScrollbar";

export default function Main() {
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
        Corousel
      </Typography>
      <Divider />

      <Corousel />
      <ImageScrollbar />
    </Grid>
  );
}

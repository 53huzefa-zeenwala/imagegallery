import { Container } from "@mui/material";
import ImagesList from "./components/imagesList/ImagesList";
import Nav from "./components/Nav.jsx";
import Upload from "./components/upload/Upload.jsx";
function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        mt: "3rem",
      }}
    >
      <Nav />
      <Upload />
      <ImagesList />
    </Container>
  );
}

export default App;

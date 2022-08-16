import { Container } from "@mui/material";
import ImagesList from "./components/imagesList/ImagesList";
import Loading from "./components/Loading";
import MainNotification from "./components/MainNotification";
import Modal from "./components/Modal";
import Nav from "./components/Nav.jsx";
import Upload from "./components/upload/Upload.jsx";
import Verification from "./components/user/Verification";
import AuthContext from "./context/AuthContext";
function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        mt: "3rem",
      }}
    >
      <AuthContext>
      <Loading />
        <Modal />
        <Verification/>
        <MainNotification />
        <Nav />
        <Upload />
        <ImagesList />
      </AuthContext>
    </Container>
  );
}

export default App;

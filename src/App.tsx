import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import GetAlbum from "./pages/GetAlbum";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/album/:id" element={<GetAlbum />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </Router>
  )
}

export default App;
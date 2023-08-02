import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/createpost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  //const navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  return (
    <Router>
      <nav>
        

        {!isAuth ? (
          <Link to="/">Login</Link>
        ) : (
          <>
          <Link to="/home">Home</Link>
            <Link to="/createpost">Createpost</Link>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/home" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;

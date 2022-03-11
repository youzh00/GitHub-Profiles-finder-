import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Alert from "./components/layouts/Alert";
import { GithubProvider } from "./context/GithubContext";
import { AlertContextProvider } from "./context/alert/AlertContext";
import Profile from "./Pages/Profile";

function App() {
  return (
    <GithubProvider>
      <AlertContextProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/user/:login" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubProvider>
  );
}

export default App;

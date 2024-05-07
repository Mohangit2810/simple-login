import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const isInstagramBrowser = window.navigator.userAgent.includes("Instagram");

  console.log(window.navigator.userAgent);

  if (isInstagramBrowser) {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = link.getAttribute("href");
        window.open(url, "_system");
      });
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login user={user} setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

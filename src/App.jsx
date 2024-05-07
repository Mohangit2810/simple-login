import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

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

// 173648640509-tj51tppmc4i2trdn7qjhujvescnpmim1.apps.googleusercontent.com

// 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 client secret

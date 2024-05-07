import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="173648640509-tj51tppmc4i2trdn7qjhujvescnpmim1.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

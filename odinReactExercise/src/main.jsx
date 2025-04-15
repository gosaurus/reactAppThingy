import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import NavBar from "./components/NavBar.jsx";
import MainArticle from "./components/MainArticle.jsx";
import NewsletterForm from "./components/NewsletterForm.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello world</h1>
    <App />
    <NavBar />
    <MainArticle />
    <NewsletterForm />
  </StrictMode>,
)

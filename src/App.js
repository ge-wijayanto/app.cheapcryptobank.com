import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import helmet from "helmet";

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://apis.google.com"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    }, 
    referrerPolicy: { policy: "same-origin" },
  })
);

function App() {

const password="v6faF+gC7Zs@?VyCqtEYQ%?S"
  return (
    <div className="App">
      <NavBar />
      <Login />
    </div>
  );
}

export default App;

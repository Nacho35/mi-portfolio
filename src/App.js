import "./App.css";
import AppRouter from "./routes/index.js";
import Index from "./components/Index";

function App() {
  return (
    <AppRouter>
      <Index />
    </AppRouter>
  );
}

export default App;

import { LoginProvider } from "./context/LoginContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <LoginProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </LoginProvider>

  );
}

export default App;

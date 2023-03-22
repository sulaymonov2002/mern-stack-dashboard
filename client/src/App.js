import { useMemo } from "react";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;

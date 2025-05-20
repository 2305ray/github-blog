import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyled } from "./styles/global";
import { Publications } from "./pages/Publications";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <Publications />
    </ThemeProvider>
  );
}

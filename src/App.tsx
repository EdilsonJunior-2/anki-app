import "./App.css";
import "./assets/styles.scss";
import { Providers } from "@context";
import Themes from "@themes";
import Pages from "./pages";
function App() {
  return (
    <Themes.BaseThemeProvider>
      <Themes.AntThemeProvider>
        <Providers.LoadingProvider>
          <Providers.StudentProvider>
            <Providers.StudyProvider>
              <Pages />
            </Providers.StudyProvider>
          </Providers.StudentProvider>
        </Providers.LoadingProvider>
      </Themes.AntThemeProvider>
    </Themes.BaseThemeProvider>
  );
}

export default App;

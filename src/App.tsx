import "./App.css";
import { useEffect, useState } from "react";
import "./assets/styles.scss";
import { Providers } from "@context";
import Themes from "@themes";
import Pages from "./pages";
function App() {
  const [file, _] = useState<File | null>();

  const reader = new FileReader();
  reader.onload = (event) => {
    const f = (event.target?.result as string).split("\r\n");
    const data = [];
    var id = 978;
    for (let i = 0; i < f.length - 1; i++) {
      id++;
      const a = f[i].split(";");
      data.push({ id, question: a[0], requiresImage: false, answer: a[1] });
    }
  };

  useEffect(() => {
    if (file) {
      reader.readAsText(file);
    }
  }, [file]);

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

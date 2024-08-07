import LoadingContext, { LoadingProvider } from "./loading";
import StudentContext, { StudentProvider } from "./student";
import StudyContext, { StudyProvider } from "./study";
import ThemeProvider from "./theme";
const Providers = {
    LoadingProvider, StudentProvider, StudyProvider, ThemeProvider
}

export {
    LoadingContext, StudentContext, StudyContext, Providers
}
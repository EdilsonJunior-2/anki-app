import { useContext } from "react";

import { StudentContext } from "@context";
import CardViewer from "./CardViewer";
import DeckSelector from "./DeckSelector";
import Login from "./Login";
import Home from "./Admin/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router";
import StudentData from "./Admin/StudentData";

const LoginRoute = ({ element }: any) => {
  const { student } = useContext(StudentContext);
  const location = useLocation();

  if (student && location.pathname === "/") {
    return student ? (
      student.admin ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/home" />
      )
    ) : null;
  }
  return element;
};

const ProtectedStudentRoute = ({ element }: any) => {
  const { student, loading } = useContext(StudentContext);
  return loading || student === undefined ? (
    <div>Loading</div>
  ) : student ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

const ProtectedAdminRoute = ({ element }: any) => {
  const { student, loading } = useContext(StudentContext);
  return loading || student === undefined ? (
    <div>Loading</div>
  ) : student?.admin ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRoute element={<Login />} />} />
        <Route
          path="/student"
          element={<ProtectedStudentRoute element={<DeckSelector />} />}
        />
        <Route
          path="/student/study/:studentCode/:deckId"
          element={<ProtectedStudentRoute element={<CardViewer />} />}
        />
        <Route
          path="/admin"
          element={<ProtectedAdminRoute element={<Home />} />}
        />
        <Route
          path="/admin/studentDetails/:studentId"
          element={<ProtectedAdminRoute element={<StudentData />} />}
        />
      </Routes>
    </Router>
  );
};

export default Pages;

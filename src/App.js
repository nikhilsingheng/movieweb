import Home from "./component/Home/Home";
import MainLayout from "./layout/MainLayout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
function App() {

  const PublicRoute = () => {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );
  };
  return (
    <Router>
      <Routes>
      <Route exact element={<PublicRoute />}>
        <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

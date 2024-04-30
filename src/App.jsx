import { createContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import {
  Orders,
  Customers,
  Overview,
  Settings,
  Marketing,
  Login,
  PageNotFound,
  AccessForbidden,
  ServerError,
  Stock,
  Banner,
  Review,
  SinglePage,
} from "./pages";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

export const UseAllContext = createContext();

const App = () => {
  const location = useLocation();
  const [openside, setOpenside] = useState(true);
  const [activeLogin, setActiveLogin] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  localStorage.setItem("activelogin", JSON.stringify(activeLogin));

  const handleOpenside = () => {
    setOpenside(!openside);
  };

  useEffect(() => {
    const storedActiveLogin = JSON.parse(localStorage.getItem("activelogin"));
    if (
      storedActiveLogin &&
      storedActiveLogin.username &&
      storedActiveLogin.password
    ) {
      setActiveLogin(storedActiveLogin);
      setAuthenticated(true);
    } else {
      setActiveLogin({});
      setAuthenticated(false);
    }
  }, []);

  const excludePaths = [
    "/login",
    "/accessforbidden",
    "/servererror",
    "/notfound",
  ];

  return (
    <UseAllContext.Provider
      value={{ openside, handleOpenside, activeLogin, setActiveLogin }}
    >
      <div className="w-full overflow-x-hidden">
        <div className="mx-auto">
          <div className="flex items-start">
            {!excludePaths.includes(location.pathname) && <Sidebar />}
            <div className="flex-grow">
              {/* {!authenticated && location.pathname !== "/login" && (
                <Navigate to="/login" />
              )} */}
              <Routes>
                {/* {authenticated ? ( */}
                <>
                  <Route path="/" element={<Overview />} />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="marketing" element={<Marketing />}>
                    <Route path="stock" element={<Stock />} />
                    <Route path="stock/:id" element={<SinglePage />} />
                    <Route path="banner" element={<Banner />} />
                    <Route path="banner/:id" element={<SinglePage />} />
                    <Route path="review" element={<Review />} />
                    <Route path="review/:id" element={<SinglePage />} />
                  </Route>
                  <Route path="accessforbidden" element={<AccessForbidden />} />
                  <Route path="servererror" element={<ServerError />} />
                </>
                {/* ) : (
                  <Route path="/login" element={<Login />} />
                )} */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </UseAllContext.Provider>
  );
};

export default App;

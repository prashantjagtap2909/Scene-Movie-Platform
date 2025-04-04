import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { UserAuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {lazy,Suspense} from 'react';
import { Oval } from 'react-loader-spinner';
import ScrollToTop from "./components/ScrollToTop";

const Login=lazy(()=>import('./components/Login'));
const Signup=lazy(()=>import('./components/Signup'));
const Profile=lazy(()=>import('./components/Profile'));
const Home=lazy(()=>import('./pages/Home'));
const Movie=lazy(()=>import('./pages/Movie'));
const Categories=lazy(()=>import('./pages/Categories'));
const NotFound404=lazy(()=>import('./pages/NotFound404'));
const Favourite=lazy(()=>import('./components/Favourite'));
const Favourites=lazy(()=>import('./components/Favourites'));

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div className='flex justify-center items-center h-screen my-8'>
          <Oval
            height='50'
            width='50'
            color='grey'
            secondaryColor='grey'
            ariaLabel='loading'
          />
        </div>}>
      <UserAuthContextProvider>
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/favourites"
            element={
              <ProtectedRoute>
                <Favourites />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            exact
            path="/movie/:title/:movieId"
            element={
              <ProtectedRoute>
                <Movie />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/category/:content/:title/:id"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/favourite"
            element={
              <ProtectedRoute>
                <Favourite />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<NotFound404 />}
          />
        </Routes>
        <ScrollToTop/>
        <Footer />
      </UserAuthContextProvider>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;

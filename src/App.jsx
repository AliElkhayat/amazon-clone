import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Login from "./pages/Login/Login"
import { useAuth } from "./context/GlobalState"
import { auth } from "./firebase/firebase"
import { onAuthStateChanged } from "firebase/auth" 
import Home from "./pages/Home/Home"
import Checkout from "./pages/Checkout/Checkout"
import Payment from "./pages/Payment/Payment"
import NotFound from "./pages/NotFound/NotFound"


const App = () => {
  const { dispatch } = useAuth();

  useEffect(() => {
    // listenning auth state changes
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home/>
            </>
          }
        />
                <Route path="*" element={<NotFound />} />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout/>
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment/>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

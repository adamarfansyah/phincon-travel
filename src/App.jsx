import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import NewJourneyPage from "./pages/NewJourney";
import BookmarkPage from "./pages/Bookmark";
import DetailPostPage from "./pages/DetailPost";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import LogoutPage from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/new-journey",
    element: <NewJourneyPage />,
  },
  {
    path: "/bookmark",
    element: <BookmarkPage />,
  },
  {
    path: "/detail/:postId",
    element: <DetailPostPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

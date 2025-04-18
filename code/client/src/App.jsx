import React from "react";
import "./App.css"; //* импорт стилей
import Counter from "./widgets/Counter/Counter";
import TaskList from "./widgets/TaskList/TaskList";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainPage from "./pages/Main/MainPage";
import QnAPage from "./pages/QnA/QnAPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import Root from "./app/Root";
import QnADetailed from "./pages/QnADetailed/QnADetailed";

//* React-компонент
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: MainPage },
        { path: "/profile", Component: ProfilePage },
        { path: "/QnA", Component: QnAPage },
        { path: "/QnA/:task_id", Component: QnADetailed },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

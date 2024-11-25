import { lazy } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Nav from "./pages/section/Nav.jsx/Nav";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


function Root() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}  errorElement={<ErrorPage/>}
>
        <Route
          index
          lazy={async () => 
            ({Component: (await import("./pages/ui/About Me/AboutMe")).default})}
        />
        <Route path="/home" element={<div>Home</div>} />
        <Route
          path="/about-me"
          lazy={async () => 
            ({Component: (await import("./pages/ui/About Me/AboutMe")).default})}        />

        <Route path="/projects">
          <Route
            index
            lazy={async () => 
              ({Component: (await import("./pages/ui/Projects/ProjectsSection/ProjectsSection")).default})}
          />
          <Route
            path="project-page/:projectId"
            lazy={async () => 
              ({Component: (await import("./pages/ui/Projects/ProjectPage/ProjectPage")).default})}
          />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

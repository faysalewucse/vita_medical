import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Home from "../pages/home/Home";
import Schedule from "../pages/schedule/Schedule";
import { APPOINTMENT_PATH, CONFIRMED_PATH, DOCUMENTS_PATH } from "../slugs";
import Confirm from "../pages/confirm/Confirm";
import Appointment from "../pages/appointment/Appointment";
import Documents from "../pages/documents/Documents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/schedule", element: <Schedule /> },
      { path: CONFIRMED_PATH, element: <Confirm /> },
      { path: APPOINTMENT_PATH, element: <Appointment /> },
      { path: DOCUMENTS_PATH, element: <Documents /> },
    ],
  },
]);

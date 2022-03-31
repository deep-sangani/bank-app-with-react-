import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";

render(
  <BrowserRouter>
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
      <App />
    </ToastProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

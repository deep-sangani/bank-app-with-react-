import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { DashboardContainer } from "./pages/Dashboard/DashboardContainer";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewCustomer from "./pages/NewCustomer/NewCustomer";
import Deposit from "./pages/Deposit/Deposit";
import Withdraw from "./pages/Withdraw/Withdraw";
import Transaction from "./pages/Tranaction/Transaction";
import CustomerInfo from "./pages/CustomerInfo/CustomerInfo";
function App() {
  const [auth, setAuth] = useState(false);
  const authfromlc = localStorage.getItem("auth");
  useEffect(() => {
    setAuth(authfromlc);
  }, [authfromlc]);

  const setauth = async (value) => {
    await localStorage.setItem("auth", value);
    await setAuth(value);
  };
  const ProtectedRoute = () => {
    if (auth === "true") {
      return <Navigate to="/main" />;
    }
    return <Navigate to="/login" />;
  };

  const ProtectedDashboard = () => {
    if (auth === "true") {
      console.log("in the Dashboard");
      return <DashboardContainer />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  const ProtectedLogin = () => {
    if (auth === "true") {
      return <Navigate to="/main" />;
    } else {
      console.log({ auth });
      return <Login setAuth={setauth} />;
    }
  };
  return (
    <Routes>
      <Route index element={<ProtectedRoute />} />
      <Route path="/main" element={<ProtectedDashboard />}>
        <Route index element={<Dashboard />} />
        <Route path="newcustomer" element={<NewCustomer />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="customerinfo" element={<CustomerInfo />} />
      </Route>
      <Route path="/login" element={<ProtectedLogin />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;

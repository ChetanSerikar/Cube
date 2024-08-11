import { useState } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import { CustomerContext } from "./context/CustomerContext";
import { customers } from "./data";
import useFetch from "./hooks/useFetch";

interface Customer {
  id: number;
  name: string;
  title: string;
}

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    customers[0]
  );

  // const {
  //   data: user,
  //   loading,
  //   error,
  // } = useFetch("https://api.api-ninjas.com/v1/randomimage");

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  // if (!user) return <div>No user data found</div>;
  // console.log(user);

  return (
    <CustomerContext.Provider
      value={{
        selectedCustomer,
        setSelectedCustomer,
      }}
    >
      <div className="app">
        <CustomerList customers={customers} />
        <CustomerDetails />
      </div>
    </CustomerContext.Provider>
  );
}

export default App;

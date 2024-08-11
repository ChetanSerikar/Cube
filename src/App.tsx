import { useState } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import { CustomerContext } from "./context/CustomerContext";
import { customers } from "./data";

interface Customer {
  id: number;
  name: string;
  title: string;
}

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    customers[0]
  );

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

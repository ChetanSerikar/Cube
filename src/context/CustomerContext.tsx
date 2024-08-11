import React from "react";

interface Customer {
  id: number;
  name: string;
  title: string;
  // Add other properties as needed
}

interface CustomerContextType {
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer | null) => void;
}

export const CustomerContext = React.createContext<CustomerContextType>({
  selectedCustomer: null,
  setSelectedCustomer: () => {},
});

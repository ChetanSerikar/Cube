import React, { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import PhotoGrid from "./PhotoGrid";

const CustomerDetails: React.FC = () => {
  const { selectedCustomer } = useContext(CustomerContext);

  if (!selectedCustomer) {
    return (
      <div className="customer-details">Select a customer to view details</div>
    );
  }

  return (
    <div className="customer-details">
      <h2>{selectedCustomer.name}</h2>
      <p>{selectedCustomer.title}</p>

      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;

import React, { useContext, ReactNode } from "react";
import { CustomerContext } from "../context/CustomerContext";

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerListProps {
  customers: Customer[];
}

interface CustomerListContainerProps {
  children: ReactNode;
}

interface CustomerListItemProps {
  customer: Customer;
}

const CustomerList: React.FC<CustomerListProps> & {
  Container: React.FC<CustomerListContainerProps>;
  Item: React.FC<CustomerListItemProps>;
} = ({ customers }) => {
  return (
    <CustomerList.Container>
      {customers.map((customer) => (
        <CustomerList.Item key={customer.id} customer={customer} />
      ))}
    </CustomerList.Container>
  );
};

CustomerList.Container = ({ children }: CustomerListContainerProps) => {
  return <div className="customer-list">{children}</div>;
};
CustomerList.Item = React.memo(({ customer }: CustomerListItemProps) => {
  const { selectedCustomer, setSelectedCustomer } = useContext(CustomerContext);

  const handleClick = () => {
    setSelectedCustomer(customer);
  };
  const isSelected = selectedCustomer?.id === customer.id;

  return (
    <div
      className={`customer-item ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
});
export default CustomerList;

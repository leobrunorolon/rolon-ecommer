import { createContext, useState, useEffect } from "react";

const initialSelectedContext = [];

export const SelectedContext = createContext(initialSelectedContext);

export const AdProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);

  const handleSelected = (type, data) => {
    if (type === "category") {
      setCategory(data);
    } else if (type === "product") {
      setProduct(data);
    } else {
      setCategory(data);
      setProduct(data);
    }
  };

  return (
    <SelectedContext.Provider
      value={{
        category,
        product,
        handleSelected,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

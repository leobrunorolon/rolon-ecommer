import React, { useState, useEffect } from "react";

const useNavigation = () => {
  const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleNavigation = (type, data) => {
    type === "category"
      ? setCategorySelected(data)
      : type === "product"
      ? setProductSelected(data)
      : console.log("no hay Type ni data");
  };

  return {
    categorySelected,
    productSelected,
    handleNavigation,
  };
};

export default useNavigation;

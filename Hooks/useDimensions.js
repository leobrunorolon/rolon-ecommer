import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    orientation: "portrait",
  });
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setDimensions({
      height: height,
      width: width,
      orientation: width > height ? "landscape" : "portrait",
    });
  }, [height, width]);
  return { dimensions };
};

export default useDimensions;

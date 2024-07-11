import React, { useState, ReactNode } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "../context/CustomCursorContext";

interface CustomCursorManagerProps {
  children: ReactNode;
}

const CustomCursorManager = ({ children }: CustomCursorManagerProps) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;

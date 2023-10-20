"use client";

import { stages } from "@/constants/constants";
import { createContext } from "react";
import { useState } from "react";

type TodoContextType = {
  formData: {
    pomodoroTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
  setFormData: (e: any) => void;
};

export const FormDataContext = createContext<TodoContextType | null>(null);

const FormDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    pomodoroTime: stages.pomodoroTime / 60,
    shortBreakTime: stages.shortBreakTime / 60,
    longBreakTime: stages.longBreakTime / 60,
  });
  const value = {
    formData,
    setFormData,
  };
  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;

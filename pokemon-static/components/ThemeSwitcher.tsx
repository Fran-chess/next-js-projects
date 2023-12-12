import { DarkModeProps } from "@/types/types";


export const ThemeSwitcher = ({ darkMode }: DarkModeProps) => {
  return (
    <div className="flex gap-8 dark:text-white">
      <button onClick={darkMode.disable}>Light Mode</button>
      <button onClick={darkMode.enable}>Dark Mode</button>
    </div>  
  );
};


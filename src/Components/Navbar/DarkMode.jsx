import React, { useEffect, useState } from "react";
import { use } from "react";
import {BiSolidSun , BiSolidMoon} from 'react-icons/bi';


const DarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light"
  );

  const element = 
    typeof document !== "undefined" ? document.documentElement : null;

    useEffect(() => {
      localStorage.setItem("theme", theme);
      if(theme === "dark"){
        element.classList.add("dark");
      }
      else{
        element.classList.remove("dark");
        element.classList.add("light");
      }
    });
  return (
    <div>
      {
        theme === "dark" ? (
          <BiSolidSun
            onClick={() => setTheme("light")}
            className="text-2xl cursor-pointer"
          />
        ) : (
          <BiSolidMoon
            onClick={() => setTheme("dark")}
            className="text-2xl cursor-pointer"
          />
        )
      }
    </div>
  )
}

export default DarkMode;

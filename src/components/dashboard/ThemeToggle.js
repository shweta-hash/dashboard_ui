"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
    theme,
    setTheme,
}){

    const toggleTheme=()=>{
        setTheme(
            theme === "light"
            ?"dark"
            :"light"
        );
    };
    return(
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 transition duration-300 cursor-pointer">
            {
                theme==="light"
                ?
                <Moon size={18}/>
                :
                <Sun size={18}/>
            }
        </button>
    );
}
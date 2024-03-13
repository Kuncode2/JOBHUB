import { useState } from "react";

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
  
    const toggleTheme = () => {
        // Toggle the theme state
        setIsDarkTheme(!isDarkTheme);
        // Toggle the dark-theme class on the body element
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };
  
    return (
        <button
            className={`fixed top-6 right-1 p-2  cursor-pointer ${isDarkTheme ? 'bg-gray-200 text-black' : 'bg-black text-gray-200'} rounded outline-none`}
            onClick={toggleTheme}
        >
            {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
    );
};

export default ThemeToggle;

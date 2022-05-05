//ThemeToggle.js
import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <button className="w-8 h-8 p-1 ml-1 rounded sm:ml-4">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-900 dark:text-gray-100 cursor-pointer"
                />
            ) : (
                    <FaMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-900 dark:text-gray-100 cursor-pointer"
                    />
                )}
        </button>
    );
};

export default Toggle;
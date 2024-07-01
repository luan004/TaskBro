import React, { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const cookieValue = Cookies.get('darkMode')
        return cookieValue ? cookieValue === 'true' : true
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => {
            const newDarkMode = !prevDarkMode;
            Cookies.set('darkMode', newDarkMode.toString(), { expires: 365 })
            return newDarkMode
        })
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
};

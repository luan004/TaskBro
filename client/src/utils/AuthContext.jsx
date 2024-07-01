import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const cookieValue = Cookies.get('user')
        return cookieValue ? JSON.parse(cookieValue) : null
    })

    useEffect(() => {
        if (user) {
            Cookies.set('user', JSON.stringify(user), { expires: 365 })
        } else {
            Cookies.remove('user')
        }
    }, [user])

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
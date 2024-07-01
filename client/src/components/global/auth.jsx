import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useAuth = () => {
    const [auth, setAuth] = useState({
        auth: false,
        data: {}
    })

    const saveToken = (token) => {
        Cookies.set('token', token)
        setAuth({
            auth: true,
            data: {}
        })
    }

    const dropToken = () => {
        Cookies.remove('token')
        setAuth({
            auth: false,
            data: {}
        })
    }

    const authOrRedirect = async (link) => {
        if (Cookies.get('token')) {
            try {
                fetch(link, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookies.get('token') || ''
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.auth) {
                        setAuth({
                            auth: true,
                            data: data.data
                        })
                    } else {
                        setAuth({
                            auth: false,
                            data: {}
                        })
                        window.location.href = link
                    }
                })
            }
            catch (error) {
                setAuth({
                    auth: false,
                    data: {}
                })
                window.location.href = link
            }
        } else {
            setAuth({
                auth: false,
                data: {}
            })
            window.location.href = link
        }
    }

    return { auth, saveToken, dropToken, authOrRedirect }
}

export default useAuth;
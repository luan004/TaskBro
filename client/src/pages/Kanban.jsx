import React, { useEffect } from "react"
import useAuth from "../components/global/auth"

const Kanban = () => {

    const {
        auth, saveToken, dropToken, authOrRedirect
    } = useAuth()

    useEffect(() => {
        dropToken()
    }, [])


    return (
        <div>
            <h1>Kanban</h1>
        </div>
    )
}

export default Kanban
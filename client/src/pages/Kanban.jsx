import { useEffect } from 'react'
import SideBar from '../components/global/SideBar'

const Kanban = () => {

    useEffect(() => {
        document.title = 'Taskbro - Kanban'
    })

    return (
        <div className='flex'>
            <SideBar />
            <h1>
                Kanbansad
            </h1>
        </div>
    )
}

export default Kanban
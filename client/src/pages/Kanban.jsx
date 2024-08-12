import { useEffect } from 'react'
import SideBar from '../components/global/SideBar'

const Kanban = () => {

    useEffect(() => {
        document.title = 'Taskbro - Kanban'
    })

    return (
        <div className='flex bg-gray-200 dark:bg-gray-900 transition duration-300 dark:text-white min-h-screen'>
            <SideBar />
            <div className='p-4'>
                dfasdfdas
            </div>
        </div>

    )
}

export default Kanban
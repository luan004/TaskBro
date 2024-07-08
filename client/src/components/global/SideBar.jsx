// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faGear, faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../utils/ThemeContext'

const SideBar = () => {
    const { darkMode, toggleDarkMode } = useTheme()

    return (
        <nav className="transition duration-300 p-4 shadow-md ring-1 ring-gray-700 h-screen bg-gray-800 min-w-56 text-white text-gray-600">
            <ul className='space-y-2'>
                <li
                    className="mx-4 transition text-2xl font-bold w-full mb-4"
                >
                    Taskbro
                </li>
                <li>
                    <a
                        className="block cursor-pointer px-4 py-2 hover:ring-1 ring-gray-600 hover:shadow-md rounded-md text-sm w-full hover:bg-gray-700 transition duration-300 text-left"
                    >
                        <FontAwesomeIcon icon={faTableColumns} className="mr-3"/>
                        Kanban
                    </a>
                </li>
                <li>
                    <a
                        className="block cursor-pointer px-4 py-2 hover:ring-1 ring-gray-600 hover:shadow-md rounded-md text-sm w-full hover:bg-gray-700 transition duration-300 text-left"
                        onClick={toggleDarkMode}
                    >
                        {
                            darkMode ?
                                <>
                                    <FontAwesomeIcon icon={faSun} className="mr-3"/>
                                    <span>Modo Claro</span>
                                </>
                            :
                                <>
                                    <FontAwesomeIcon icon={faMoon} className="mr-2"/>
                                    <span>Modo Escuro</span>
                                </>
                        }
                    </a>
                </li>
                <li>
                    <a
                        className="block cursor-pointer px-4 py-2 hover:ring-1 ring-gray-600 hover:shadow-md rounded-md text-sm w-full hover:bg-gray-700 transition duration-300 text-left"
                    >
                        <FontAwesomeIcon icon={faGear} className="mr-2"/>
                        Configurações
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar
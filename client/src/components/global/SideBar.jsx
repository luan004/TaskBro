import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faGear, faTableColumns, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../utils/ThemeContext'
import { useAuth } from '../../utils/AuthContext'

const SideBar = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    const [ settingsDropdown, setSettingsDropdown ] = useState(false)
    const { user, closeSession } = useAuth()

    return (
        <nav className="flex flex-col transition duration-300 p-4 shadow-md ring-1 ring-blue-400 h-screen bg-gray-800 w-56 text-white text-gray-600">
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
            </ul>

            <div
                className='mt-auto flex flex-col relative pt-3'
                onMouseEnter={() => setSettingsDropdown(true)}
                onMouseLeave={() => setSettingsDropdown(false)}
            >
                <button
                    className='mt-auto px-1 py-1 flex items-center cursor-pointer ring-1 ring-gray-600 shadow-md rounded-md text-sm w-full bg-gray-700 transition duration-300 text-left'
                    onClick={() => setSettingsDropdown(!settingsDropdown)}
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/38369889?v=4"
                        className="w-9 h-auto rounded-md"
                    />
                    <div className="pl-3 overflow-hidden text-ellipsis">
                        <span className="text-sm font-bold">
                            Nome
                        </span>
                    </div>
                </button>
                <div className={`backdrop-filter backdrop-blur-md absolute p-2 w-full bottom-0 mb-14 dropdown-content bg-gray-700/30 rounded-md ring-1 ring-gray-600 
                    ${
                        settingsDropdown ? '' : 'hidden'
                    }`
                }>
                    <a
                        className="block cursor-pointer px-4 py-2 hover:ring-1 ring-gray-600 hover:shadow-md rounded-md text-sm w-full hover:bg-gray-700 transition duration-300 text-left"
                    >
                        <FontAwesomeIcon icon={faGear} className="mr-2"/>
                        Configurações
                    </a>
                    <a
                        className="block cursor-pointer px-4 py-2 hover:ring-1 ring-gray-600 hover:shadow-md rounded-md text-sm w-full hover:bg-gray-700 transition duration-300 text-left"
                        onClick={closeSession}
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} className="mr-2"/>
                        Sair
                    </a>
                </div>
            </div>
            
        </nav>
    )
}

export default SideBar
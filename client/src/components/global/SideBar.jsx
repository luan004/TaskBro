import { useTheme } from '../../utils/ThemeContext'

const SideBar = () => {
    const { darkMode, toggleDarkMode } = useTheme()

    return (
        <nav className="p-4 bg-zinc-900 shadow-lg ring-1 ring-blue-600 h-screen w-48">
            <ul className='space-y-1'>
                <li>
                    <button
                        className='bg-zinc-950 px-2 py-1.5 rounded-md text-white text-sm shadow-sm ring-1 ring-slate-900/5 w-full hover:bg-zinc-800 transition duration-300'
                    >
                        Kanban
                    </button>
                </li>
                <li>
                    <button
                        className='bg-zinc-950 px-2 py-1.5 rounded-md text-white text-sm shadow-sm ring-1 ring-slate-900/5 w-full hover:bg-zinc-800 transition duration-300'
                        onClick={toggleDarkMode}
                    >
                        {
                            darkMode ? "🌞 Modo claro" : "🌛 Modo escuro"
                        }
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar
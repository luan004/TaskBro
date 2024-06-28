import { useTheme } from '../utils/ThemeContext';

const Login = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className="min-h-screen dark:bg-gray-900 bg-gray-200 flex min-h-full flex-col justify-center px-7 py-24 ">
            
            <button type="button" className="absolute top-0 right-0 m-7 p-2 rounded-full bg-gray-100 ring-slate-900/5 ring-1 shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200" onClick={toggleDarkMode}>
                {
                    darkMode ? "🌞" : "🌙"
                }
            </button>

            <div className="dark:bg-gray-800 bg-gray-100 ring-1 ring-slate-900/5 shadow-xl p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-cyan-100">
                    Entre ou cadastre-se
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-cyan-100">
                            Nome de usuário
                        </label>
                        <div className="mt-2">
                            <input placeholder="Fulano1010..." autoComplete="username" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5  px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-cyan-100">
                            Senha
                        </label>
                        <div className="mt-2">
                            <input placeholder="********" autoComplete="current-password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5  px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ring-1 ring-slate-900/5">
                            Entrar
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                    Ainda não tem conta?
                    <a href="#" className="ml-1 font-semibold leading-6 text-cyan-600 hover:text-cyan-500">
                        Cadastre-se!
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;
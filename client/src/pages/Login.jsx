import { useState, useEffect } from 'react'
import { useTheme } from '../utils/ThemeContext'
import RegisterForm from '../components/login/registerForm'
import LoginForm from '../components/login/loginForm'

const Login = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    const [ isLogin, setIsLogin] = useState(true)
    
    const url = 'http://localhost:3000/api'

    return (
        <div className="min-h-screen dark:bg-gray-900 bg-gray-300 flex min-h-full flex-col justify-center px-7 py-24 duration-300">
            
            <button type="button" className="duration-300 absolute top-0 right-0 m-7 p-2 rounded-full bg-gray-100 shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200" onClick={toggleDarkMode}>
                {
                    darkMode ? "🌞 " : "🌛"
                }
            </button>

            <div className="duration-300 dark:bg-gray-800 bg-gray-100 shadow-xl p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
                
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900 dark:text-cyan-100 py-2">
                    {
                        isLogin ? 'Entrar' : 'Criar uma conta'
                    }
                </h2>

                <div className={(isLogin ? '' : 'hidden')}>
                    <LoginForm />
                </div>

                <div className={(isLogin ? 'hidden' : '')}>
                    <RegisterForm />
                </div>              

                <p className="mt-5 text-center text-sm text-gray-500">
                    {
                        isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'
                    }
                    <a className="ml-1 font-semibold leading-6 text-cyan-600 hover:text-cyan-500 hover:cursor-pointer" onClick={() => {setIsLogin(!isLogin)}}>
                        {
                            isLogin ? 'Cadastre-se' : 'Entrar'
                        }
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;
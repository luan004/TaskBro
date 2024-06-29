import React, { useState } from 'react'
import { useTheme } from '../utils/ThemeContext'


const Login = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    const [ isLogin, setIsLogin] = useState(false)
    
    const apiUrl = process.env.REACT_APP_API_URL;

    // register form
    function register(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        if (data.get('password-cad') !== data.get('password-cad2')) {
            console.log('As senhas não conferem')
            return
        }

        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                name: data.get('name-cad'),
                username: data.get('username-cad'),
                password: data.get('password-cad')
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className="min-h-screen dark:bg-gray-900 bg-gray-200 flex min-h-full flex-col justify-center px-7 py-24 ">
            
            <button type="button" className="absolute top-0 right-0 m-7 p-2 rounded-full bg-gray-100 ring-slate-900/5 ring-1 shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200" onClick={toggleDarkMode}>
                {
                    darkMode ? "🌞 " : "🌛"
                }
            </button>

            <div className="dark:bg-gray-800 bg-gray-100 ring-1 ring-slate-900/5 shadow-xl p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
                
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900 dark:text-cyan-100 py-2">
                    {
                        isLogin ? 'Entrar' : 'Criar uma conta'
                    }
                </h2>

                <form className={`space-y-4 ` + (isLogin ? '' : 'hidden')}>
                    <div className="relative">
                        <input type="text" id="username" className="dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer" placeholder=" " />
                        <label htmlFor="username" className="transition absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 rounded-lg peer-focus:ring-1 ring-slate-900/5">
                            Usuário
                        </label>
                        <p className="absolute top-0 right-0 text-xs text-red-500 p-1">Usuário ou senha incorretos</p>
                    </div>

                    <div className="relative">
                        <input type="password" id="password" autoComplete='password' className="dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer" placeholder=" " />
                        <label htmlFor="password" className="transition absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 rounded-lg peer-focus:ring-1 ring-slate-900/5">
                            Senha
                        </label>
                        <p className="absolute top-0 right-0 text-xs text-red-500 p-1">Usuário ou senha incorretos</p>
                    </div>

                    <div>
                        <button type="submit" className="transition flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline ring-1 ring-slate-900/5">
                            Entrar
                        </button>
                    </div>
                </form>

                <form className={`space-y-4 ` + (isLogin ? 'hidden' : '')} onSubmit={register}>
                    
                    <div>
                        <div className="relative">
                            <input type="text" name="name-cad" className="dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer" placeholder=" " />
                            <label className="transition absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 rounded-lg peer-focus:ring-1 ring-slate-900/5">
                                Nome
                            </label>
                        </div>
                        <p className=" top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 ring-1 ring-gray-950 ring-opacity-20 dark:bg-gray-950">
                            Usuário deve conter apenas letras, números, pontos, traços e underscores (_)
                        </p>
                    </div>

                    <div>
                        <div className="relative">
                            <input type="text" id="username-cad" autoComplete='username' className="dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer" placeholder=" " />
                            <label htmlFor="username-cad" className="transition absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 rounded-lg peer-focus:ring-1 ring-slate-900/5">
                                Usuário
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <input type="password" id="password-cad" autoComplete='new-password' className="dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer" placeholder=" " />
                            <label htmlFor="password-cad" className="transition absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 rounded-lg peer-focus:ring-1 ring-slate-900/5">
                                Senha
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <input type="password" id="password-cad2" autoComplete='new-password' className="dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer" placeholder=" " />
                            <label htmlFor="password-cad2" className="transition absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 rounded-lg peer-focus:ring-1 ring-slate-900/5">
                                Confirmar senha
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <button type="submit" className="transition flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline ring-1 ring-slate-900/5">
                            Cadastrar-se
                        </button>
                    </div>
                </form>
                

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
import { useState } from 'react'

const api = import.meta.env.VITE_API_URL

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${api}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <form className='space-y-4' onSubmit={handleSubmit}>         
            <div>
                <div className="relative">
                    <input
                        type="text"
                        name="username"
                        className="duration-300 dark:bg-gray-900 bg-white dark:text-cyan-100 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm"
                        placeholder=" "
                        autoComplete="username"
                        onChange={handleChange}
                        value={formData.username}
                        required
                    />
                    <label 
                        className="duration-300 bg-white absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] dark:bg-gray-900 px-2 2 start-1 rounded-lg">
                        Usuário
                    </label>
                </div>
                {
                    errors && (
                        <p className="top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 dark:bg-gray-950">
                            Usuário ou senha incorretos
                        </p>
                    )
                }
            </div>

            <div>
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        className="duration-300 dark:bg-gray-900 bg-white dark:text-cyan-100 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm "
                        placeholder=" "
                        autoComplete='password'
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                    <label 
                        className="duration-300 bg-white absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] dark:bg-gray-900 px-2 2 start-1 rounded-lg">
                        Senha
                    </label>
                </div>
                {
                    errors && (
                        <p className="top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 ring-1 ring-gray-950 ring-opacity-20 dark:bg-gray-950">
                            Usuário ou senha incorretos
                        </p>
                    )
                }
            </div>

            <div>
                <button
                    type="submit"
                    className="transition flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline ring-1 ring-slate-900/5">
                    Entrar
                </button>
            </div>
        </form>
    )
}

export default LoginForm
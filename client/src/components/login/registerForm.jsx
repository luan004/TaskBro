import { useState } from 'react'

const api = import.meta.env.VITE_API_URL

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        password2: ''
    })
    const [passwordError, setPasswordError] = useState(false)
    const [fieldErrors, setFieldErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.password === formData.password2) {
            setPasswordError(false)

            fetch(api + '/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.username,
                    password: formData.password
                })
            }).then(res => res.json())
            .then((data) => {
                if (data.status && data.status === 'success') {
                    setFormData({
                        name: '',
                        username: '',
                        password: '',
                        password2: ''
                    })
                    setFieldErrors({})
                } else if (data.errors) {
                    const errors = {}
                    data.errors.forEach(error => {
                        errors[error.field] = error.message;
                    });
                    setFieldErrors(errors)
                }
            })

        } else {
            setPasswordError(true)
        }
    }

    return (
        <form className='space-y-4' onSubmit={handleSubmit}>         
            <div>
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        className="duration-300 dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <label 
                        className="duration-300 bg-white absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] dark:bg-gray-900 px-2 2 start-1 rounded-lg">
                        Nome
                    </label>
                </div>
                {fieldErrors['name'] && (
                    <p className="duration-300 top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 ring-1 ring-gray-950 ring-opacity-20 dark:bg-gray-950">
                        {fieldErrors['name']}
                    </p>
                )}
            </div>

            <div>
                <div className="relative">
                    <input
                        type="text"
                        name="username"
                        className="duration-300 dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer"
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
                {fieldErrors['username'] && (
                    <p className="duration-300 top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 ring-1 ring-gray-950 ring-opacity-20 dark:bg-gray-950">
                        {fieldErrors['username']}
                    </p>
                )}
            </div>

            <div>
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        className="duration-300 dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer"
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
                {fieldErrors['password'] && (
                    <p className="duration-300 top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 ring-1 ring-gray-950 ring-opacity-20 dark:bg-gray-950">
                        {fieldErrors['password']}
                    </p>
                )}
            </div>

            <div>
                <div className="relative">
                    <input
                        type="password"
                        name="password2"
                        className="duration-300 dark:bg-gray-900 dark:text-cyan-100 ring-1 ring-slate-900/5 block px-3 py-2 w-full text-sm text-gray-900 rounded-md dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 shadow-sm peer"
                        placeholder=" "
                        autoComplete='new-password'
                        onChange={handleChange}
                        value={formData.password2}
                        required
                    />
                    <label 
                        className="duration-300 bg-white absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] dark:bg-gray-900 px-2 2 start-1 rounded-lg">
                        Confirmar Senha
                    </label>
                </div>
                <p
                    className={`duration-300 top-7 right-0 text-xs text-red-500 p-1 rounded-md shadow-sm bg-slate-200 ring-1 ring-gray-950 ring-opacity-20 dark:bg-gray-950 ` + (passwordError ? '' : 'hidden')}>
                    As senhas não coincidem
                </p>
            </div>
            
            <div>
                <button
                    type="submit"
                    className="transition flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline ring-1 ring-slate-900/5">
                    Cadastrar-se
                </button>
            </div>
        </form>
    )
}

export default RegisterForm

const Login = () => {

    return (
        <div className="dark flex min-h-full flex-col justify-center px-8 py-12">
            <div className="ring-1 ring-inset shadow-sm ring-gray-300 p-6 rounded-md sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                    Entre ou cadastre-se
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Nome de usuário
                        </label>
                        <div className="mt-2">
                            <input placeholder="Fulano1010..." autoComplete="username" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5  px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Senha
                        </label>
                        <div className="mt-2">
                            <input placeholder="********" autoComplete="current-password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Entrar
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                    Ainda não tem conta?
                    <a href="#" className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Cadastre-se!
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;
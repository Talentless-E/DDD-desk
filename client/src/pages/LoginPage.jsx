import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [registration, setRegistration] = useState(true);
   console.log(email)

   const handleChangeRegistrationState = (e) => {
      e.preventDefault();
      setRegistration(!registration);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-undef
      registration
         ? await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/register`, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ email, name: username, password }),
           }).then((res) => console.log(res.json()))
         : await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/$login`, {
              method: "GET",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ username, password }),
           }).then((res) => console.log(res.json()));
   };
   return (
      <>
         <div className="w-full max-w-xs m-auto mt-8">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               {registration ? (
                  <>
                     <div className="mb-4">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="username"
                        >
                           Имя пользователя
                        </label>
                        <input
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="username"
                           type="text"
                           placeholder="Имя пользователя"
                           onChange={(e) => setUsername(e.target.value)}
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="email"
                           onChange={(e) => setEmail(e.target.value)}
                        >
                           Электронная почта
                        </label>
                        <input
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="email"
                           type="text"
                           placeholder="Ваша почта"
                           onChange={(e) => setUsername(e.target.value)}
                        />
                     </div>
                  </>
               ) : (
                  <div className="mb-4">
                     <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                     >
                        Имя пользователя
                     </label>
                     <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Имя пользователя"
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
               )}
               <div className="mb-6">
                  <label
                     className="block text-gray-700 text-sm font-bold mb-2"
                     htmlFor="password"
                     onChange={(e) => setPassword(e.target.value)}
                  >
                     Пароль
                  </label>
                  <input
                     className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     id="password"
                     type="password"
                     placeholder="*********"
                  />
               </div>

               {registration ? (
                  <div className="flex items-center justify-center">
                     <Link
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        to="#"
                        onClick={(e) => handleChangeRegistrationState(e)}
                     >
                        Уже есть аккаунт?
                     </Link>
                  </div>
               ) : (
                  <div className="flex items-center justify-between">
                     <Link
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        to="#"
                        onClick={(e) => handleChangeRegistrationState(e)}
                     >
                        Создать аккаунт
                     </Link>
                     <Link
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        to="#"
                     >
                        Забыли пароль?
                     </Link>
                  </div>
               )}

               <div className="flex items-center justify-center mt-4">
                  {registration ? (
                     <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                     >
                        Зарегистрироваться
                     </button>
                  ) : (
                     <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                     >
                        Войти
                     </button>
                  )}
               </div>
            </form>
         </div>
      </>
   );
};

export default LoginPage;

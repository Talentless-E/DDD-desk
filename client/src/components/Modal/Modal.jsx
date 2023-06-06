/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLinked, setModels } from "../../state/userSlice";
import img1 from "../../assets/preview1.png";
const ModalWindow = ({ visible, onClose, action }) => {
   const handleOnClose = (e) => {
      if (e.target.id === "container") {
         onClose();
      }
   };
   const dispatch = useDispatch();
   const [modelName, setModelName] = useState(null);
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   const [text, setText] = useState("");
   const handleSubmitLink = (e) => {
      e.preventDefault();
      console.log(login, password);
      dispatch(setLinked());
      onClose();
   };
   const handleSubmitUpload = (e) => {
      e.preventDefault();
      dispatch(setModels({ name: modelName }));
      onClose();
   };
   const handleSubmitPost = async (e) => {
      e.preventDefault();
      await fetch(`https://api.vk.com/method/wall.post&ownerId=id798656757&message=${text}&access_token=vk1.a.tgco8nAQu0kC4BpR1yIivlllhZbrvIgWs7Ea3z__93Efk-C28XR3jdDLXMoKw2q7RQu1qCmQ0ZP88nuOgMtfok-ldMFNKbbuG6cuZ0BGvnQE2-iDDciE_msqqpBDeDsmJRcsBEJOxXYN7WdotD1ogbbnzvhvNWKOg-ry6eL0UAlpOn8aMR5VKnIsqTrK5E1k45g_Hw5fDcoZF-flbAzO0g&v=5.131`, {
        method: 'POST',
        headers: {'Authorization': 'Bearer vk1.a.tgco8nAQu0kC4BpR1yIivlllhZbrvIgWs7Ea3z__93Efk-C28XR3jdDLXMoKw2q7RQu1qCmQ0ZP88nuOgMtfok-ldMFNKbbuG6cuZ0BGvnQE2-iDDciE_msqqpBDeDsmJRcsBEJOxXYN7WdotD1ogbbnzvhvNWKOg-ry6eL0UAlpOn8aMR5VKnIsqTrK5E1k45g_Hw5fDcoZF-flbAzO0g'}
      }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log({err: err})) 
      dispatch(setModels({ name: modelName }));
      onClose();
   };
   if (!visible) return null;
   return (
      <div
         id="container"
         onClick={(e) => handleOnClose(e)}
         className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
         {action === "link" ? (
            <div className="bg-white p-6 rounded w-1/4">
               <p className="mb-5 text-gray-900 font-bold">
                  Привяжите ваш аккаунт VK!
               </p>
               <form className="flex items-center flex-col justify-center w-full">
                  <div className="mb-6 w-full">
                     <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Ваша почта
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        onChange={(e) => setLogin(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-2 w-full">
                     <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Ваш пароль
                     </label>
                     <input
                        type="password"
                        id="password"
                        placeholder="*******"
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                     />
                  </div>
                  <button
                     type="submit"
                     onClick={(e) => handleSubmitLink(e)}
                     className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Привязать
                  </button>
               </form>
            </div>
         ) : action === "upload" ? (
            <div className="bg-white p-2 rounded w-1/4 flex flex-col items-center">
               <p className="mb-5 text-gray-900 font-bold text-lg">
                  Загрузка модели
               </p>
               <form className="flex flex-col w-full p-4">
                  <label
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     htmlFor="model_file"
                  >
                     Загрузить файл gLTF
                  </label>
                  <input
                     className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                     aria-describedby="user_avatar_help"
                     id="model_file"
                     type="file"
                  />
                  <label
                     className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     htmlFor="model_name"
                  >
                     Укажите имя для модели
                  </label>
                  <input
                     type="text"
                     id="model_name"
                     onChange={(e) => setModelName(e.target.value)}
                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <button
                     type="submit"
                     onClick={(e) => handleSubmitUpload(e)}
                     className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none self-center focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Загрузить модель
                  </button>
               </form>
            </div>
         ) : (
            <div className="bg-white p-6 rounded w-1/4">
               <p className="mb-5 text-gray-900 font-bold text-center">
                  Заполните форму для отправки в VK
               </p>
               <form className="flex items-center flex-col justify-center w-full">
                  <div className="mb-6 w-full">
                     <img src={img1} />
                  </div>
                  <div className="mb-2 w-full">
                     <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Введите сообщение
                     </label>
                     <textarea
                        id="message"
                        rows="4"
                        onChange={(e) => setText(e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     onClick={(e) => handleSubmitPost(e)}
                     className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Отправить пост
                  </button>
               </form>
            </div>
         )}
      </div>
   );
};

export default ModalWindow;

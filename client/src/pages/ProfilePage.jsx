import React, { useState } from "react";
import { useSelector } from "react-redux";
//import { useParams } from "react-router-dom";
import ModalWindow from "../components/Modal/Modal";
import { Link } from "react-router-dom";
import ModelCard from "../components/ModelCard";

const ProfilePage = () => {
   //const info = useSelector((state) => state.user.models);
   const [visible, setVisible] = useState(false);
   const [action, setAction] = useState("");
   // const user = useSelector(state => state.auth.user)
   // const token = useSelector(state => state.auth.token)
   // const {userId} = useParams()
   const linked = useSelector((state) => state.user.linked);
   const models = useSelector((state) => state.user.models);
   if (models.length === 0) console.log("PUSTO");
   else models.map((model) => console.log(model));
   console.log({ linked: linked });
   const handleOnClose = () => setVisible(false);
   const handleClickLink = async () => {
      // const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/getVkCode`)
      // const data = await res.json()
      // console.log(data)
      setAction("link");
      setVisible(true);
   };
   const handleClickUpload = () => {
      setAction("upload");
      setVisible(true);
   };
   const handleClickPost = () => {
      setAction("post");
      setVisible(true);
   };
   return (
      <div className="container flex items-center flex-col mx-auto mt-4">
         <div className="container flex gap-6 items-center mx-auto bg-gray-100 rounded h-28 shadow-md px-8 pt-6 pb-8 ">
            {linked ? (
               <p>Привязанные социальные сети: VK</p>
            ) : (
               <button
                  type="button"
                  onClick={() => handleClickLink()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               >
                  Привязать аккаунт VK
               </button>
            )}
            <button
               type="button"
               onClick={() => handleClickUpload()}
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
               Загрузить модель
            </button>

            <ModalWindow
               visible={visible}
               action={action}
               onClose={handleOnClose}
            />
         </div>
         <div className="flex flex-1 flex-row gap-4 mt-8 w-full">
            {models.length === 0 ? (
               <div>У вас ещё нет загруженных моделей</div>
            ) : (
               models.map((model, index) => {
                  return (
                     <div key={index} className="flex flex-col gap-3 items-center" >
                        <Link to={`/model/${model.name}`} >
                           <ModelCard name={model.name} imgSrc={model.imgSrc} />
                        </Link>
                        {linked ? <button
                           type="button"
                           onClick={() => handleClickPost()}
                           className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                        >
                           Отправить в VK
                        </button> : <></>}
                     </div>
                  );
               })
            )}
         </div>
      </div>
   );
};

export default ProfilePage;

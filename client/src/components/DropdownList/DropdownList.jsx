import { Dropdown } from "flowbite";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../state/authSlice";
import { useDispatch } from "react-redux";

const DropdownList = () => {
   const name = useSelector((state) => state.auth.user.name);
   const email = useSelector((state) => state.auth.user.email);
   console.log({ name: name, email: email });
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const handleLogout = () => {
      dispatch(setLogout());
   };
   return (
      <>
         <Dropdown label="Мой профиль">
            <React.Fragment key=".0">
               <Dropdown.Header>
                  <span className="block text-sm">hehe</span>
                  <span className="block truncate text-sm font-medium">
                     hehe
                  </span>
               </Dropdown.Header>
               <Dropdown.Item onClick={() => navigate("/profile")}>
                  Профиль
               </Dropdown.Item>
               <Dropdown.Item onClick={() => handleLogout()}>
                  Выйти
               </Dropdown.Item>
            </React.Fragment>
         </Dropdown>
      </>
   );
};

export default DropdownList;

import React from "react";
import ModelCard from "../components/ModelCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
   const { models } = useSelector((state) => state.models);
//    models.map((model) =>
//       console.log({ name: model.name, imgSrc: model.imgSrc })
//    );
   return (
      <div className="container flex flex-1 flex-row gap-4 mx-auto mt-8">
         {models.map((model, key) => {
            return (
               <Link to={`/model/${model.name}`} key={key}>
                  <ModelCard name={model.name} imgSrc={model.imgSrc} />
               </Link>
            );
         })}
      </div>
   );
};

export default HomePage;

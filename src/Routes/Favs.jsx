import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const{state} = useContextGlobal();
  const Favs=()=>{
    return JSON.parse(localStorage.getItem("favs"));
  }

  return (
    <>
      <h1 className={state.theme}>Dentists Favs</h1>
      <div className={state.theme + " card-grid"}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {Favs()  != null ? Favs().map(e=><Card name={e.name} username={e.username} id={e.id}/>) : null}
      </div>
    </>
  );
};

export default Favs;

import React from "react";
import { Link } from "react-router-dom";
import imagen from "../images/doctor.jpg"


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    let objeto = {
      "name": name,
      "username": username,
      "id": id
    }

    let arreglo = localStorage.getItem("favs") !=null ? JSON.parse(localStorage.getItem("favs")) : [];
    arreglo.push(objeto);
    localStorage.setItem("favs",JSON.stringify(arreglo));


  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={imagen} alt="" />
        <Link to ={'/dentist/'+id}><h4>{name}</h4></Link>
        <h5>{username}</h5>
        <p>{id}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

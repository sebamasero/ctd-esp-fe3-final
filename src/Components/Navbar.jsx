import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,dispatch} = useContextGlobal()
  return (
    <nav className ={state.theme} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to = '/home'><h3>Home</h3> </Link>
      <Link to = '/contact'><h3>Contact</h3> </Link>
      <Link to = '/favs'><h3>Favs</h3> </Link>
      <button onClick={()=>state.theme==="" ? dispatch({type:"dark"}) : dispatch({type:"light"})}>Change theme</button>
    </nav>
  )
}

export default Navbar
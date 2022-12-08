import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state,dispatch} = useContextGlobal();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp=>resp.json())
    .then(arregloDoctores=>dispatch( {type: 'guardar-doctores', payload: arregloDoctores} ))
    .catch(err=>console.log(err))
  },[])


  return (
    <main className={state.theme } >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map(e => <Card key = {e.id} name={e.name} username = {e.username} id = {e.id}/>)}
        
      </div>
    </main>
  )
}

export default Home;
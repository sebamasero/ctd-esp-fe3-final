import { useReducer,useMemo,useContext,createContext } from "react";

export const reducer = (state,action) =>{
  switch(action.type){
    case 'dark':
      return {...state,theme:"dark"}
    case 'light':
      return {...state,theme:""}
    case 'guardar-doctores':
      return {...state,data: action.payload}
    default:
      return state
  }
}

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state,dispatch] = useReducer(reducer,initialState);
  

  const providerValue = useMemo(()=>({state,dispatch}),[state,dispatch]);
  

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
  }

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
  
}

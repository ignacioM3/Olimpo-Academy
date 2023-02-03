import { useContext } from "react";
import CursosContext from "../context/ProyectosProvider";

const useCursos = () =>{
    return useContext(CursosContext)
}

export default useCursos;
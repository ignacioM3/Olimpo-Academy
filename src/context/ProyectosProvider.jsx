import { useState, useEffect, createContext}  from "react";


const CursosContext = createContext();

const CursosProvider = ({children}) =>{
    const [cursos, setCursos] = useState([])
    const [load, setLoad] = useState(false)

    const obtenerCursos = async () =>{
        setLoad(true)
        const url = "https://my-json-server.typicode.com/ignacioM3/Olimpo-Academy/cursos";
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setCursos(resultado)
        } catch (error) {
            console.log(error)    
        } finally{
            setLoad(false)
        }
    }

    useEffect(()=>{
        obtenerCursos()
    }, [])
    return (
    <CursosContext.Provider
        value={{
            cursos,
            load
        }}
    >
        {children}
    </CursosContext.Provider>
    )
}

export{
    CursosProvider
}

export default CursosContext;
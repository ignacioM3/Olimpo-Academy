import { useState, useEffect, createContext}  from "react";


const CursosContext = createContext();

const CursosProvider = ({children}) =>{
    const initialStateFavorite = JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : []

    const [cursos, setCursos] = useState([])
    const [load, setLoad] = useState(false)
    const [favorites, setFavorites] = useState(initialStateFavorite)
    



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

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

   const addFavorite = (state) =>{
        setFavorites([...favorites, state])
   }


   const deleteFavorite = (state) =>{
        setFavorites(favorites.filter(cur => cur.name !== state.name))
   }

   useEffect(() => {
    console.log(favorites)
   }, [favorites]);

    return (
    <CursosContext.Provider
        value={{
            cursos,
            favorites,
            load,
            addFavorite,
            deleteFavorite
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
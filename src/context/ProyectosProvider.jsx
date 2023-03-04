import { useState, useEffect, createContext } from "react";


const CursosContext = createContext();

const CursosProvider = ({ children }) => {
    const initialStateFavorite = JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : []

    const [cursos, setCursos] = useState([])
    const [egresados, setEgresados] = useState([])
    const [load, setLoad] = useState(false)
    const [favorites, setFavorites] = useState(initialStateFavorite)
    const [message, setMessage] = useState('')




    const obtenerCursos = async () => {
        setLoad(true)
        const url = "https://my-json-server.typicode.com/ignacioM3/Olimpo-Academy/cursos";
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setCursos(resultado)
        } catch (error) {
            console.log(error)
        } finally {
            setLoad(false)
        }
    }
    const ObtenerEgresados = async () => {
        setLoad(true)
        const url = 'https://my-json-server.typicode.com/ignacioM3/Olimpo-Academy/egresados'

        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setEgresados(resultado)
            console.log(egresados)
        } catch (error) {
            console.log(error)
        } finally {
            setLoad(false)
        }
    }


    useEffect(() => {
        obtenerCursos()
        ObtenerEgresados()
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addFavorite = (state) => {
        setFavorites([...favorites, state])
    }


    const deleteFavorite = (state) => {
        setFavorites(favorites.filter(cur => cur.name !== state.name))
    }

    useEffect(() => {
        console.log(favorites)
    }, [favorites]);

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setMessage('web.whatsapp.com')
        } else {
            setMessage('wa.me')
        }
    }, []);

    return (
        <CursosContext.Provider
            value={{
                cursos,
                favorites,
                load,
                addFavorite,
                deleteFavorite,
                egresados,
                message
            }}
        >
            {children}
        </CursosContext.Provider>
    )
}

export {
    CursosProvider
}

export default CursosContext;
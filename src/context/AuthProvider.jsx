import { useState, useEffect, createContext } from 'react'



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({})
  const [cargando, setCargando] = useState(true)


  useEffect(() => {
    const authUserValidate = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setCargando(false)
        return
      }

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      try {
        const { data } = await fetch('/admin/login', config)
        setAuth(data);
      } catch (error) {
        setAuth({})
      }
    }
      authUserValidate();
    }, [])

    const logout = () =>{
      setAuth({})
    }
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider
}

export default AuthContext;
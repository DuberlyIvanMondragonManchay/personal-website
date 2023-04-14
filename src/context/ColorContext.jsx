import {createContext, useState} from 'react';

//------------ COLOR CONTEXT------------

// Con esto los demas componetes puedes encontrar lo que voy a definir 
export const ColorContext = createContext();
// Creamos el componente para proveer informacion

export const ColorProvider = ({ children }) => {
    // Este estado sera el color de tema del contenido 
    const [color,setColor] = useState("black");
    // Este estado sera el color de tema del button cambiar tema
    const [colorContent,setcolorContent] = useState("white");
    // Este estado sera para el tema de la web
    const [teme,setTeme] = useState("#1b69dd")
    // ffca2c warning
    
    
    return (
        <ColorContext.Provider value={{color,setColor,colorContent,setcolorContent,teme,setTeme}}>
            {children}
        </ColorContext.Provider>
    )
}

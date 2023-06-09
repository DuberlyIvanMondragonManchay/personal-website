import {createContext, useEffect, useState} from 'react';

//------------ COLOR CONTEXT------------

// Con esto los demas componetes puedes encontrar lo que voy a definir 
export const ColorContext = createContext();
// Creamos el componente para proveer informacion

export const ColorProvider = ({ children }) => {
    let colorDark = '#000000';
    let colorLight = '#ffffff';

    const leM = localStorage.getItem('colorMode');
    const leC = localStorage.getItem('colorContent')

    // Modo de color
    const [mode,setMode] = useState(leM?leM : colorDark);
    // Este estado sera el color de tema del button cambiar tema
    const [colorContent,setcolorContent] = useState(leC ? leC :colorLight);
    return (
        <ColorContext.Provider value={
            {
                colorContent,
                setcolorContent,
                colorDark,
                colorLight,
                mode,
                setMode
            }
            }>
            {children}
        </ColorContext.Provider>
    )
}

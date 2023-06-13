import React,{useContext} from 'react'
import { ColorContext } from '../context/ColorContext';
import imgVcodeNotfound from '../img/img-vcode-notfound.svg'
function NotFound() {
  const {mode} = useContext(ColorContext)
  // --------------COLOR DEL BODY:--------------------------------------
  document.getElementById('body').style.backgroundColor=mode;
  // -------------------------------------------------------------------  

  return (
    <div style={{ height:"90vh" }} className='bg-dark text-center text-success d-flex'>
        <div className='m-auto'>

        <p>Page not found</p>
        <div>
            <img src={imgVcodeNotfound} alt="image vcode notfound" />
        </div>
        <p>Aun estoy trabajando en esto</p>
        </div>
    </div>
  )
}

export default NotFound
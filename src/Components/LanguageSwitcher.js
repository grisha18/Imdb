import React, {useState} from "react";
import "./Search.css";
import Triangle from "./Triangle";




const LanguageSwitcher = ()=>{

  const [active, setActive] = useState(false);

  const clickLanguage =()=>{

    setActive(!active);
  }

    return(
        <>
              <div onClick={clickLanguage} style={{color: active? "red" : "blue"}}>LanguageSwitcher</div>

              <Triangle triangleActive={active} rotationAngle={45}/>
        
        </>
          
        )
    
    }
    
    export default LanguageSwitcher;
import React, {useState} from "react";
import "./language.css";
import Triangle from "./Triangle";




const LanguageSwitcher = ()=>{

  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState('En');
  const languagesShorts = ["En", "It", "Fr"];
  // const languages = ["English", "Italiano", "French"];
  const languages = [{short: "En", long: "English"}, 
                        {short: "It", long: "Italiano"}, 
                        {short: "Fr", long: "French"}];
  const [languagesCurrent, setLanguagesCurrent] = useState(languages[0].short);
  // const [languagesCurrent, setLanguagesCurrent] = useState('English');



  const clickLanguage =() => {

    setActive(!active);
  }
  const renderLanguages = () => {

    return languages.map((e, i)=>{
      return(
        <li onClick={()=>{
          setLanguagesCurrent(e.short)
        }} key={i}>{e.long}</li>

      )

    })
  }

    return(
        <>
              <div className="language" onClick={clickLanguage} style={{color: active? "red" : "blue"}}>            
                {languagesCurrent}
                <Triangle triangleActive={active} rotationAngle={180}/>
                <div className={`closed-language-dropdown ${active?'opened-language-dropdown':''}`}>
                    <ul className='list'>
                      {renderLanguages()}
                    </ul>
                </div>
              </div>

  
        
        </>
          
        )
    
    }
    
    export default LanguageSwitcher;
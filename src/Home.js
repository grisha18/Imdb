import React,{useState} from 'react';
import Menu from './Components/Menu';
import Search from './Components/Search';
import Premium from './Components/Premium';
import WatchList from './Components/WatchList';
import SignIn from './Components/SignIn';
import LanguageSwitcher from './Components/LanguageSwitcher';
import Logo from './Components/Logo';
import './Home.css';
import Tic from './Components/TicTacToe';

const Home = ({number, setNumber}) => {
 


    return(
        <>
            <div className='header-container'>
                <Logo/>
                <Menu/>
                <Search/>
                <Premium/>
                <WatchList/>
                <SignIn/>
                <LanguageSwitcher/>


            </div>
            <div className='crestici'>
                <Tic/>
            </div>
        </>
    )
}

export default Home;
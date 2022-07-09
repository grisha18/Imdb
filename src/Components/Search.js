import { useState } from 'react';
import './Search.css';



const DropDown = () => {

    const [active, setActive] = useState(false);
    const [currentSearchCategory, setCurrentSearchCategory] = useState(0);
    const searchCategories = ["All", "Titles", "TV episodes", "Celes", "Companies", "Keywords"];


    const renderSearchCategories = () => {
        return searchCategories.map((elem, index) => {
            return <li>
                <div style={{color:index===currentSearchCategory ? "red" : "green"}} onClick={() => { setCurrentSearchCategory(index) }}>{elem}</div>
            </li>
        })
    }

    return (
        <>
            <div>{searchCategories[currentSearchCategory]}</div>
            <div className='triangle'>
                <img src={`${process.env.PUBLIC_URL}/triangle.png`} />
            </div>
            <div className='opened-dropdown'>
                <ul className='list'>
                    {renderSearchCategories()}
                    <hr />
                    <li>Advanced search</li>
                </ul>
            </div>
        </>

    )
}


const Search = () => {





    return (
        <>

            <div>Search</div>
            <DropDown />
        </>

    )

}

export default Search;



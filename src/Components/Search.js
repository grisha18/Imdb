import React, { useState } from 'react';
import './Search.css';
import Triangle from './Triangle';



const DropDown = () => {

    const [active, setActive] = useState(false);
    const [currentSearchCategory, setCurrentSearchCategory] = useState(0);
    const searchCategories = ["All", "Titles", "TV episodes", "Celes", "Companies", "Keywords"];
    const [searchResultsShown, setSearchResultsShown] = useState(false);


    const clickMenuHandler =()=>{
        setActive(!active);
    }


    const [searchResults, setSearchResults] = useState([
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
          "userId": 1,
          "id": 10,
          "title": "optio molestias id quia eum",
          "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        }
      ]);


    const renderSearchResults = ()=>{

        return searchResults.map( (elem, index)=>{
            return <div className='search-result-item'>
                    <h3>{elem.title}</h3>
                    <i>{elem.body}</i>
                    </div> 
        } )
    }

    const handleSearchInputOnFocus = () => {
        console.log('we are here');
        setSearchResultsShown(true);
    }

    const renderSearchCategories = () => {
        return searchCategories.map((elem, index) => {
            return <li>
                <div style={{ color: index === currentSearchCategory ? "red" : "green" }} onClick={() => { setCurrentSearchCategory(index) }}>{elem}</div>
            </li>
        })
    }

   
    return (
        <>
            <div className='search-category'>
                <div onClick={clickMenuHandler} className='search-category-menu'>
                    {searchCategories[currentSearchCategory]}
                    <Triangle triangleActive={active} rotationAngle="100"/>
                </div>
                <div className='search-wrapper'>
                    <input onFocus={handleSearchInputOnFocus} className='input-search' type="search" />                
                </div>
                <div className={`closed-dropdown ${active?'opened-dropdown':''}`}>
                    <ul className='list'>
                        {renderSearchCategories()}
                        <hr />
                        <li>Advanced search</li>
                    </ul>
                </div>
                <div className='search-results'>
                    { searchResultsShown ? renderSearchResults() : <></>}
                </div>
            </div>

        </>

    )
}


const Search = () => {





    return (
        <>


            <DropDown />
        </>

    )

}

export default Search;



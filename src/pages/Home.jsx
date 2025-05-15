// import React from "react";
import Card from "../components/Card";
// import axios from "axios";
function Home( {
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorites,
    onAddToCart,
    }){
        
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex" >
                    <img src="/img/search.svg" alt="Search" />

                    {searchValue && (<img onClick={() => setSearchValue("")} //Условный рендеринг {searchValue && (...)}
                        className="clear cu-p" src="img/btn-remove.svg" alt="Clear" />)}

                    <input id="search"
                        name="search" value={searchValue} onChange={onChangeSearchInput} placeholder="Search..." />
                </div>
            </div>

            <div className="d-flex flex-wrap">

                {items
                    .filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        // если берем данные с backend то вместо arr пишем items т.к. 
                        //в const [items, setItems] = React.useState([]) у нас каждая карточка обозначена как itemnpm start
                        // items.filter((item) => item.title.includes(searchValue)).map((item,index) => filter((item) => item.name.includes(searchValue)).

                        <Card
                            key={index}
                            // title={item.name}
                            // price={item.price}
                            // imageUrl={item.imageUrl}
                            onFavorites={(obj) => onAddToFavorites(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    ))}

            </div>
        </div>
    )
}

export default Home;
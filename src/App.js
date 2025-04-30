import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

  const [items, setItems] = React.useState([]);// карточки товаров с бэкэнда
  const [cartItems, setCartItems] = React.useState([]); // хук useState добавление товара в корзину
  const [searchValue, setSearchValue] = React.useState(''); //поиск товара помещаем что вводим в input
  const [Favorites, setFavorites] = React.useState(''); //создаем массив закладок
  const [cartOpened, setCartOpened] = React.useState(false); // хук useState открытие и закрытие корзины

   React.useEffect(()=>{
    // fetch('https://67a5d781510789ef0df96fa9.mockapi.io/items').then((res)=> {
    //   return res.json();})
    //  .then((json)=>{ вместо fetch запроса сделали axios он более удобный
    //   setItems(json);}); 
     axios.get('https://67a5d781510789ef0df96fa9.mockapi.io/items').then((res)=> {
      setItems(res.data);
    });
    axios.get('https://67a5d781510789ef0df96fa9.mockapi.io/cart').then((res)=> {
      setCartItems(res.data);
    });//когда срабатывает useEffect первый рендеринг запрашиваем с бэкенда данные карточек и
   },[]); // корзины, передаем это в setItems(res.data); и корз. setCartItems(res.data);
   
  //там есть и плюс отправляет данные об этом на бэкэнд post запросом

  const onAddToCart = (obj) =>{
    axios.post('https://67a5d781510789ef0df96fa9.mockapi.io/cart', obj); 
    setCartItems(prev => [...prev,obj]); }; 

  const onRemoveItem = (id) => {//удаляет товар из корзины на сервере и сайте
    axios.delete(`https://67a5d781510789ef0df96fa9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id ));//
  };//метод filter возвращает те item.id которые !== id в onRemoveItem т.е. в корзине 
//после filter останутся все кроссы чей item.id не равны onRemoveItem = (id) 
 

const onAddToFavorite = (obj) =>{
  axios.post('https://67f584ec913986b16fa4db84.mockapi.io/favorites', obj); 
  setFavorites(prev => [...prev,obj]); }; 



  const onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };
 
  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer onClose ={() => setCartOpened(false)} /> : null} 
       это JS a && "ok" если а = true то выполняется "ok" если а = false то нет*/}
      {cartOpened && <Drawer items = {cartItems} onClose ={() => setCartOpened(false)} onRemove = {onRemoveItem} />}
      <Header onClickCart ={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>

          <div className="search-block d-flex" >
            <img  src="/img/search.svg" alt="Search" />

           {searchValue && (<img onClick={()=> setSearchValue("")} //Условный рендеринг {searchValue && (...)}
           className="clear cu-p" src="img/btn-remove.svg" alt="Clear"/>)}

            <input id="search" 
            name="search" value={searchValue} onChange={onChangeSearchInput} placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {items
          .filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item,index) =>(
// если берем данные с backend то вместо arr пишем items т.к. 
//в const [items, setItems] = React.useState([]) у нас каждая карточка обозначена как itemnpm start
// items.filter((item) => item.title.includes(searchValue)).map((item,index) => filter((item) => item.name.includes(searchValue)).

            <Card
              key={index}
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj)=> onAddToCart(obj)}  
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react"
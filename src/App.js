import React from "react";
import {Routes,Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import axios from "axios";
// import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {

  const [items, setItems] = React.useState([]);// карточки товаров с бэкэнда
  const [cartItems, setCartItems] = React.useState([]); // хук useState добавление товара в корзину
  const [searchValue, setSearchValue] = React.useState(''); //поиск товара помещаем что вводим в input
  const [favorites, setFavorites] = React.useState([]); //создаем массив закладок для Favorites
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
    });
    axios.get(`https://681880cb5a4b07b9d1cf6ac7.mockapi.io/heart`).then((res)=> {
      setFavorites(res.data);
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
 
// const onAddToFavorites = (obj) =>{
// if (favorites.find((favObj)=>favObj.id === obj.id)) {
//   axios.delete(`https://681880cb5a4b07b9d1cf6ac7.mockapi.io/heart/${obj.id}`);
//   setFavorites((prev) => prev.filter((item) => item.id !== obj.id ));
// } else{
//   axios.post(`https://681880cb5a4b07b9d1cf6ac7.mockapi.io/heart`, obj); 
//   setFavorites((prev) => [...prev,obj]); 
//   } 
// }; Вариант выше не работал заменил на тот что ИИ предложил вроде лучше

const onAddToFavorites = async (obj) => {
  try {// конструкция catch try для отлавливания не явных ошибок
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      await axios.delete(`https://681880cb5a4b07b9d1cf6ac7.mockapi.io/heart/${obj.id}`);
      // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const res = await axios.post('https://681880cb5a4b07b9d1cf6ac7.mockapi.io/heart', obj);
      setFavorites((prev) => [...prev, res.data]); // теперь берём объект с настоящим id
    }
  } catch (error) {
    console.error("Ошибка при работе с избранным:", error);
  }
};

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
 
  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items = {cartItems} onClose ={() => setCartOpened(false)} onRemove = {onRemoveItem} />}
      <Header onClickCart ={() => setCartOpened(true)} />
        
<Routes> 
        {/* <Route path="/favorites" element={<p>This is test</p>}/>  */}
        <Route path="/" exact element={<Home
         items={items}
         onChangeSearchInput={onChangeSearchInput}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         onAddToCart={onAddToCart}
         onAddToFavorites={onAddToFavorites}/>}/>
         <Route path="/favorites" exact 
         element={<Favorites items = {favorites} onAddToFavorites={onAddToFavorites}/>}/>
</Routes> 
    </div>
  );
}
export default App;
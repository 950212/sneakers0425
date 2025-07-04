import {Link} from 'react-router-dom';
function Header(props){
   // console.log(props); можно посмотреть что в props
    return(
<header className="d-flex justify-between align-center p-40"> 
<Link to="/">
<div className="d-flex align-center">  
  <img width = {40} heigth = {40} src = "/img/logo.png" />
  <div>
    <h3  className="text-uppercase">React Sneakers</h3>
    <p className="opacity-5">Магазин лучших кроссовок</p>
  </div>
</div>
</Link>

<ul className="d-flex"> 
  <li onClick={props.onClickCart} className="mr-30 cu-p" >
    <img className="mr-30" width = {18} heigth = {18} src = "/img/cart.svg" alt="Корзина" />
    <span>1205 руб.</span>
  </li>
  <li className="mr-30 cu-p">
  <Link to="/favorites">
  <img width = {18} heigth = {18} src = "/img/heartz.svg" alt="Закладки" />
  </Link>
    
  </li>
  <li>
    <img width = {18} heigth = {18} src = "/img/user.svg" alt="Пользователь" />
  </li>
</ul>
</header>);
}
export default Header;
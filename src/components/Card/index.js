import React from "react";
import styles from "./Card.module.scss";

// console.log(styles);
function Card({onFavorite,imageUrl,title,price,onPlus}) {

  const [isAded, setIsAded] = React.useState(false); //таким способом  хук useState
  const [isFavorite, setIsFavorite] = React.useState(false);//добавили хук  ЛАЙКЕД НЕ ЛАЙКЕД 
 
  const onClickPlus = () => {
    onPlus({imageUrl,title,price});
    //в onClickPlus задаем setIsAded значение true
    setIsAded(!isAded); }; //isAded по умолчанию(by default)-false, как кликнули вызвали onClickPlus сработала ф.
    // setIsAded (!isAded) и isAded получила противоположное значение т.е. true опять кликнули isAded стал -false
  // React.useEffect( () =>{console.log("Переменная мзменена");},[isAded]);
  
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);//добавили const меняет состояние ЛАЙКЕД НЕ ЛАЙКЕД 
   };

  return (//ПРИ onClick переход на onClickFavorite
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>   
        <img src= {isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
      </div>
      <img className="mr-30" width={133} heigth={112} src={imageUrl} alt="liked" />
      <h5 className="">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{price}руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="cheked"
        />
        {/* без клика isAded по умолчанию false и видим картинку с btn-plus при клике на img в onClick 
             запускается ф. setIsAded (!isAded) и isAded получила противоположное значение т.е. true
             жмем еще раз опять isAded принимает противоположное значение т.е.false и видим картинку с btn-plus */}
      </div>
    </div>
  );
}

export default Card;

// как сделать favorite

//в Card.index.js пишем хук const (isFavorite,setIsFavorite) = React.useState(false);

//в Card.index.js пишем const onClickFavorite = () => {
// setIsFavorite(!isFavorite); };

// на картинке сердечка которое в Card.index.js ставим onClick c переходом 
// в onClick={onClickFavorite}>
// <div className={styles.favorite} onClick={onClickFavorite}> 
// там же<img src= {isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />

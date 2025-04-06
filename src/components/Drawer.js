function Drawer({onClose,onRemove,items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{""}
          <img onClick={onClose} className="removeBtn cu-p"
            src="img/btn-remove.svg"  alt="Close"/>
        </h2>

        {
        items.length > 0 ?// если корз пустая выводи cartEmpty если нет items и cartTotalBlock
        <div>  
        <div className="items"> 
          {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="Sneakers"/>  
            <div className="mr-20">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div> // onRemove(obj.id) при клике удаляет карточку из корзины с id
            ))}
        </div> 
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого</span>
              <div></div>
              <b>21 497 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        </div>    
        :
        <div class="cartEmpty d-flex align-center justify-center flex-column flex">
          <img class = "mb-20" width = "120px" height = "120px"  src="/img/empty-cart.jpg" alt="CartEmpty"/>
          <h2>Корзина пустая</h2>
          <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, что бы сделать заказ</p>
          <button onClick = {onClose} class="greenButton">
            <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
          </button>
        </div>
        }
        
      </div>
    </div>
  );
}
export default Drawer;

/*        <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              heigth={70}
              src="img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              heigth={70}
              src="img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </div> */
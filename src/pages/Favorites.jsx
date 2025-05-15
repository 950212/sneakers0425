
import Card from "../components/Card";
function Favorites({items,onAddToFavorites}){
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>    
            </div>

            <div className="d-flex flex-wrap">
            {items
                    // .filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                   
                        <Card
                            key={index}
                            // id = {item.id}
                            // title={item.name}
                            // price={item.price}
                            // imageUrl={item.imageUrl}
                            favorited={true}
                            onFavorites={onAddToFavorites}
                            {...item}
                            // onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}

            </div>
        </div>
    );
}
export default Favorites;
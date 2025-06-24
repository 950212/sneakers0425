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
import Cart from "../Cart"

function FullMiniCart({currentSale, products, removeAll, singleRemove}){

  
    return (
        <>
        <div className="divMiniCard">
            <div className="divScroll">
        {currentSale.map((variable) => {
            return (
                <Cart
                products={products}
                currentSale={currentSale}
                id={variable.id}
                img={variable.img}
                name={variable.name}
                category={variable.category}
                singleRemove={singleRemove}/>
        )})}  
            </div>
        <div className='divCartBotton'>
                <div className='divSomatorio'>
                    <p className='pTotal'>Total</p>
                    <p className='pSomatorio'>{(currentSale.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)).toLocaleString('pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
                </div>
                <button className="buttonRemoverTodos" onClick={removeAll}>Remover todos</button>
        </div>
        </div>
        </>
    )
}

export default FullMiniCart
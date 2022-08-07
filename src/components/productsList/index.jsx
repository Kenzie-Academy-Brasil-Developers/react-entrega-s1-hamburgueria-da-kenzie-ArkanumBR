import Product from "../Product"
import "./style.css"

function ProductsList ({ products, handleClick }){

    return (
        
        <div className="container">
          {products.map((variable) => {
            return (
                <Product
                id={variable.id}
                name={variable.name}
                category={variable.category}
                price={variable.price}
                img={variable.img}
                handleClick={handleClick}/>
            )})}  
        </div>         
    )
}

export default ProductsList
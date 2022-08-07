import "./style.css"

function Product ({ id, name, category, price, img, handleClick }){

    return (
        
        <div className="divCards">
            <div className="divImg">
                <img src={img} alt="comerciodopg" className="imgCard"/>
            </div>
            <div className="divInformacoes">
                <p className="nomeItem">{name}</p>
                <p className="categoriaItem">{category}</p>
                <p className="precoItem">{price.toLocaleString('pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
                <button className="buttonAdicionar" onClick={() => handleClick(id)}>Adicionar</button>
            </div>
        </div>          
            
        
    )
}

export default Product
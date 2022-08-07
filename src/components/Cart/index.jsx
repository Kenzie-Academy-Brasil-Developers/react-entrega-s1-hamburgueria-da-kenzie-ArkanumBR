import './style.css'


function Cart ({ img, id, name, category, singleRemove }){
    
    return (        
        <>    
            
            <div className='montagemMiniCard'>
                <img src={img} alt="teste" className='imgMiniCard'/>
                <div>
                    <p className='pNomeProduto'>{name}</p>
                    <p className='pTipoProduto'>{category}</p>
                </div>
                <button className='buttonRemover' onClick={() => singleRemove(id)}>Remover</button>
            </div>
            
        </>
        
    )
}

export default Cart
import { useEffect, useState } from 'react';
import './App.css';
import EmptyCart from './components/emptyCart';
import FullMiniCart from './components/fullMiniCart';
import ProductsList from './components/productsList';
import BurguerKenzie from './imgs/BurguerKenzie.jpg';


function App() {

  const [products, setProducts]                 = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale]           = useState([]);
  

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response) => response.json())
    .then((response) => setProducts(response))
    .catch((error) => console.log(error))
    console.log(products)
    
  }, []);



  function removeAll(){
    setCurrentSale([]);
  }

  
  function singleRemove(id){
    const removeCartItens = currentSale.filter((variable) => variable.id !== id);
    setCurrentSale(removeCartItens)
  }

  function handleClick(id) {
    if (currentSale.find((variable) => variable.id === Number(id))){
     alert("Item já adicionado ao carrinho!")
    } else {
      const addToCart = products.find((variable) => variable.id === id);
      setCurrentSale([...currentSale, addToCart])
    }
    }

  return (
    <div className="App">
      <header>
        <img src={BurguerKenzie} alt="logo" className='logo'/>
        <div className='divBusca'>
          <input placeholder='Digitar Pesquisa' className='inputHeader'></input>
          <button className='buttonHeader'>Pesquisar</button>  
        </div>       
      </header>
      <main>
        <ProductsList
        products={products}
        handleClick={handleClick}/>
        <div className='divCarrinho'>
          <div className='divCarrinhoCabecalho'>
            <p className='tituloCarrinho'>Carrinho de Compras</p>
          </div>
          <div>
            { currentSale.length > 0 ? 
            <FullMiniCart
            products={products}
            currentSale={currentSale}
            singleRemove={singleRemove}
            removeAll={removeAll}/>
            :
            <EmptyCart/>
            }
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;

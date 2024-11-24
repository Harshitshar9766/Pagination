import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'; 


function App(){
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  
  const fetchData = async () =>{

    const response = await fetch(`http://dummyjson.com/products?limit=10&skip=${page * 10 - 10}` )
    const data = await response.json();
    console.log(data);

    if(data && data.products){
    setProducts(data.products);
    setTotalPages(Math.ceil(data.total / 20));
    
    }

  }
  

  useEffect(() => {
    fetchData( )
  },[page])

  const selectPageHandler = (selectedPage) =>{
    if(
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
{
  setPage(selectedPage);
}
  }


  return (
    <div className="App">
     {
      products.length >0  && ( <div className='products'>
{
  products.map((items) =>{
     return <span className="products__single" key={items.id}>
      <img src={items.thumbnail} alt={items.title}/>
      <span>{items.title}</span>
     </span>
  })
}
      </div>
      )} 
     {
      products.length>0 && <div className="pagination">
       <span 
        className={page > 1 ? "": "pagination__disable"}
       onClick={()=>selectPageHandler(page - 1)} >◀️</span>
       {[...Array(totalPages)].map((_,i) =>{
        return(

        <span className={page === i + 1 ? "pagination_selected": ""} onClick={()=>selectPageHandler(i + 1)}
          key={i}>{i + 1}</span>
        );
       })}
       <span onClick={()=>selectPageHandler(page + 1)}
        className={page < totalPages ? "": "pagination__disable"}
        >▶️</span>
      </div>
     }
    </div>
  );
}


export default App;

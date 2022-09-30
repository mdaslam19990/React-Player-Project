import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import "./Home.css";

const Home = () => {
    const [players, setPlayres] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayres(data.player))
    },[search])
    
    // console.log(cart)
    
    return (
        <div className='home-container'>
            <div className="left-side">
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
                <Players players={players} cart={cart} setCart={setCart}/>
            </div>
            <div className="right-side">
                <h2>Place Order</h2>
                {
                    cart.map(item => <li>{item.strPosition}</li>)
                }
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import "./Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Home = () => {
    const [players, setPlayres] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayres(data.player))
    },[search])

    const handleDelete = (id) => {
        const leftPlayer = cart.filter((pb) => pb.idPlayer !== id)
        setCart(leftPlayer)
        toast("Delete Player!")
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }
    
    // console.log(cart)
    
    return (
        <div className='home-container'>
            <div className="left-side">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Your Player Name' className='search-input' />
                <Players players={players} cart={cart} setCart={setCart}/>
            </div>
            <div className="right" data-aos="zoom-in-up">
                <div className="right-side">
                    <h2>Place Order: {cart.length}</h2>
                    {
                        cart.map(item =>
                            <div className="cart-container-info">
                                <img src={item.strCutout} alt="" />
                                <h3>{item.strPosition}</h3>
                                <button onClick={() => handleDelete(item.idPlayer)} className='deleteBtn'>Delete
                                </button>
                            </div>
                        )
                    }
                </div>
               
                <ToastContainer />
            </div>
        </div>
    );
};

export default Home;
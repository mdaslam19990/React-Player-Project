import React from 'react';
import "./Players.css";
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const Players = ({ players, cart, setCart }) => {
    return (
        <div>
            <div className="cart-container">
                {
                    players.map(player => <SinglePlayer player={player} key={player.idPlayer} cart={cart} setCart={setCart}/>)
                }
            </div>
        </div>
    );
};

export default Players;
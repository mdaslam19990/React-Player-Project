import React from 'react';
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart}) => {
    // console.log(player)
    const { idPlayer, strCutout, strPosition } = player;

    const handleCartAdd = () =>{
        const info = {
            idPlayer,
            strCutout,
            strPosition,
            price : 123,
        }
        
        if(cart){
            let newCart = [...cart, info];
            setCart(newCart)
            return;
        }else{
            setCart([info])
        }
    }

    
    return (
        <div className='cart'>
            <img src={strCutout ? strCutout : "https://www.thesportsdb.com/images/media/player/render/0uz4yb1658422773.png"} alt="" />
            <h3 className='para'>{strPosition}</h3>
            <div className='btn-group'>
                <button onClick={handleCartAdd} className='btn-cart'>Add To Cart</button>
                <button className='btn-cart'>Details</button>
                <button className='btn-cart'>BookMark</button>
            </div>
        </div>
    );
};

export default SinglePlayer;
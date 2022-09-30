import React, { useState } from 'react';
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart}) => {
    const { idPlayer, strCutout, strPosition } = player;

    const handleCartAdd = () =>{

        if(cart.length == 5){
            alert("added Five Item")
            return;
        }

        const info = {
            idPlayer,
            strCutout,
            strPosition,
            price : 123,
        }

        const newCart = cart.find(myCart => myCart.idPlayer === idPlayer);

        if(newCart){
            alert("Already Added");
        }else{
            if(cart){
                let newAdd = [...cart, info];
                setCart(newAdd)
                return;
            }else{
                setCart([info])
            }
        }


        // if(cart){
        //     let newCart = [...cart, info];
        //     setCart(newCart)
        //     return;
        // }else{
        //     setCart([info])
        // }
    }


    const handleBookMark = () => {
        const info = {
            idPlayer,
            strCutout,
            strPosition,
            quantity: 1,
            isBoodMark: true,
        }

        const getLocalStorage = JSON.parse(localStorage.getItem("bookMark"));
        
        if(getLocalStorage){
            const isExist = getLocalStorage.find(p => p.idPlayer === idPlayer);

            if(isExist){
                const prevQuantity = parseFloat(isExist.quantity);
                const newQuantity = prevQuantity + 1;
                isExist.quantity = newQuantity;
                localStorage.setItem("bookMark", JSON.stringify(getLocalStorage))
                return;
            }else{
                localStorage.setItem("bookMark", JSON.stringify([...getLocalStorage, info]))
            }
            
        }else{
            localStorage.setItem("bookMark", JSON.stringify([info]))
        }

    }
    
    return (
        <div className='cart' data-aos="zoom-in-up">
            <img src={strCutout ? strCutout : "https://www.thesportsdb.com/images/media/player/render/0uz4yb1658422773.png"} alt="" />
            <h3 className='para'>{strPosition}</h3>
            <div className='btn-group'>
                <button onClick={handleCartAdd} className='btn-cart'>Add To Cart</button>
                <button className='btn-cart'>Details</button>
                <button className='btn-cart' onClick={handleBookMark}>BookMark</button>
            </div>
        </div>
    );
};

export default SinglePlayer;
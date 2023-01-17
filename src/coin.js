import React from 'react';


const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return(
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src = {image} alt ='crypto' className='pic'/>
                    <h1>{name}</h1>
                    <p class='coin-symbol'>{symbol.toUpperCase()}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Current Price = ${price}</p>
                    <p className='coin-volume'>Volume = ${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent-red'>{priceChange.toFixed(2)}%</p>
                    ) : (<p className='coin-percent-green'>{priceChange.toFixed(2)}%</p>)
                    }
                    <p className='coin-marketcap'>
                        Market Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;
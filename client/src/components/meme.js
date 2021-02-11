import React from "react";

const Meme = () => (
    <div className = 'flex-col'>
        <div className = 'flex flex-row '>
            <div className ='font-bold'>Rahul Bansal</div>
            <div>Created at: 11:59 AM</div>
        </div>
        <div>
            Caption here
        </div>
        <div>
            <img className='h-27 w-1/3 ' src ='https://ichef.bbci.co.uk/images/ic/1056xn/p072ms67.jpg' alt='Meme here'></img>
        </div>
    </div>
)

export default Meme;
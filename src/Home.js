import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        < div className = "home" >
        <div className = "home__container" >
        <img className = "home__image"
        src = "https://www.portablly.com/wp-content/uploads/2020/04/Amazon-Prime-Day-2020-deals-August-shopping-holiday.jpg"
        alt = "banner"/>    
        <div className = "home__row" > 
        { /* Product */ } 
        <Product id="23451" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
        rating={5}/>
        <Product id="23452" title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)" price={349} image="https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UY218_.jpg" rating={4}/>
          </div> 
        <div className = "home__row" > 
        { /*Product  */ } 
        { /* Product */ } 
         <Product id="23453" title="Garmin Approach S10 - Lightweight GPS Golf Watch, Black, 010-02028-00" price={147} image="https://m.media-amazon.com/images/I/61v5OxrSe8L._AC_UY218_.jpg" rating={3}/>
        
         <Product id="23454" title="Hanes Men's Long Sleeve Beefy Henley Shirt" price={23} image="https://images-na.ssl-images-amazon.com/images/I/91%2Bbe%2BGK0EL._AC_UX342_.jpg" rating={4}/>
           <Product id="23455" title="Art 101 142-Piece Wood Art Set Amazon Exclusive" price={26} image="https://m.media-amazon.com/images/I/917fzLG4kWL._AC_UL320_.jpg" rating={4}/>
        
        
        </div> 
        <div className = "home__row" > 
        { /* Product */ } 
         <Product id="23456" title="Merrell Men's Moab 2 Mid Gtx Hiking Boot" price={92} image="https://m.media-amazon.com/images/I/81FdzSSf5RL._AC_UL320_.jpg" rating={5}/>
        </div> 
        </div > 
        </div>
    )
}

export default Home
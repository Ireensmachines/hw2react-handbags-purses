import React from 'react';
import Buttons from './Components/Buttons.js'

import Tile from './Components/Tile.js'
import './App.css';
import Product from "./Components/Product";
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'

import our_story from './assets/our_story.png'


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Buttons text="To the collection"/>
                <Buttons text="Shop all bags" />
                <Buttons isDisabled={true} text="Pre-order" />
            </nav>

    <main>
        <Product
            image={bag_1}
            saletitle="Best seller"
            description=" Handy "
            price="400"
        />
        <Product
            image={bag_2}
            saletitle="best seller"
            description=" Stylish "
            price="250"
            />
        <Product
            image={bag_3}
            saletitle="New Collection"
            description=" Simple "
            price="300"
        />
        <Product
            image={bag_4}
            saletitle="New Collection"
            description=" Trendy "
            price="150"
        />
    </main>


            <footer>
                <section>
                    <Tile text="the brand"/>
                    <Tile paragraaf={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam blanditiis fuga fugiat illum itaque maxime sequi ut voluptates voluptatum."} />
                    <Tile paragraaf={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti fuga illo inventore ipsum minus provident qui suscipit voluptatum! Ipsam!"}/>
                </section>
                <section>
                   <Tile image={brand}/>
                </section>
                <section>
                    <Tile image={our_story}/>
                </section>
                <section>
                    <Tile text={"Our Story"}/>
                    <Tile paragraaf={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consectetur in ipsa iste nemo provident sequi voluptatum. Blanditiis facere, in?"}/>
                </section>

            </footer>



        </>

    );
}






export default App;





import React from "react";
import {createRoot} from 'react-dom/client'
import '../assets/tailwind.css'


const test = (
    <div>
        <h1 className="text-4xl text-black-500">Hello World</h1>
        <p>You got this babes!!</p>
        

        <button id="button_custom" className="bg-white px-8 py-2 rounded-3xl font-semibold text-lg text-black">Similar Products</button>
        <button id="button_custom" className="bg-white px-8 py-2 rounded-3xl font-semibold text-lg text-black">Top RW E-Commerce Websites</button>
    </div>
)



const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)
import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp(){
   return(
    <div>
        <h1>Custom App ! Create by Saif</h1>
    </div>
   )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement= (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "my project"

const reactElement = React.createElement( // it is injected by Babel the transpilar
    'a', 
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser
)
//React Own Library

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <MyApp/>
//  MyApp()
// anotherElement
// reactElement
<App/>
)

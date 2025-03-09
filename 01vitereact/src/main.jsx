import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

//element have to pass not a obj
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

//passing element
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react" //make sure ur are passing evaluated statement not a piece of code , since it will add as it is

//ceating an element 
const reactElement = React.createElement(
    'a', //type
    {href: 'https://google.com',target: '_blank' }, //attribute
    'click me to visit google', //innner content
    anotherElement //evaluated statement directly add's 
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)



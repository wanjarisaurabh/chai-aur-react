
import { useCallback, useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  const [text , setText] = useState("")
  let result =0;
  const [count, setCount] = useState(0)
  
  const expensivecaluculation = useCallback(() =>{

    console.log("expensive-calculation doing.. wait !")
    for(let i = 0 ; i< 100000 ; i++){
      node -v

    }

    return result;
  } , [])
//   return (
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           onClick={() => setColor("red")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button>
//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >Green</button>
//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >Blue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

return (
  <div>
    <input type="text"
            name = {text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write something.." />

            <p>Expensive calculation happening.. { expensivecaluculation()}</p>
            <button onChange={() => setCount(count + 1)}>Increment count</button>

  </div>
)


}

export default App

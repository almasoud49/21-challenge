import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"


function App() {
  
  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="flex gap-6">
        <button className="border-2 border-green-500 rounded-md px-2 py-3" onClick={()=>dispatch(increment())}>Increment</button>

        <button className="border-2 border-green-500 rounded-md px-2 py-3" onClick={()=>dispatch(incrementByAmount(5))}>IncrementByAmount</button>
        <div>{count}</div>
        <button className="border-2 border-green-500 rounded-md px-2 py-3" onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App

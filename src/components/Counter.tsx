import { useAppSelector } from "../app/hooks"

const Counter = () => {
    const { count } = useAppSelector(store => store.counter)
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
        </div>
    )
}

export default Counter

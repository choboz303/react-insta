import { IconMinus, IconPlus } from '@tabler/icons-react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decrease, increase } from '../../features/counter/CounterSlice'

const Counter = () => {
    const { count } = useAppSelector(store => store.counter)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2 className="text-4xl text-amber-500">Counter</h2>
            <p>Count: {count}</p>
            <button
                className="p-3 text-amber-500"
                onClick={() => dispatch(increase())}
            >
                <IconPlus />
            </button>
            <button
                className="p-3 text-amber-500"
                onClick={() => dispatch(decrease())}
            >
                <IconMinus />
            </button>
        </div>
    )
}

export default Counter

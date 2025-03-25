import { useState } from "react"

export default

    function Counter() {
    const [count, setCount] = useState(0);

    const handAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const CounterStyle = {
        border: "2px  white solid",
        borderRadius: '20px',
        paddingBottom: '15px'

    }

    return (
        <div style={CounterStyle}>
            <h3>Count:{count}</h3>
            <button onClick={handAdd}>Add</button>
        </div>
    )
}
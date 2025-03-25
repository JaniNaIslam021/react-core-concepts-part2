import { useState } from "react"

export default
    function Batsman() {
    const [Run, setRun] = useState(0);

    const handleSingles = () => {
        const newSingles = Run + 1;
        setRun(newSingles);
    }
    const handleFour = () => {
        const Update4 = Run + 4;
        setRun(Update4);
    }
    const Six = () => {
        const UpdateSix = Run + 6;
        setRun(UpdateSix);
    }
    return (
        <div>
            <h3>Player: Bangu</h3>
            {
                Run > 50 && <p>Half Century</p>
                
            }
            {
                Run > 100 && <p>Century</p>
            }
            <h2>Score: {Run}</h2>
            <button onClick={handleSingles}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={Six}>Six</button>
        </div>
    )
}
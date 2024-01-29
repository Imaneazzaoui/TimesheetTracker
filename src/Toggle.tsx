import { useState } from "react";
const Toggle = () => {
    const [on, setOn] = useState(false);
    return (
    <div className="Toggle">
    <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
    </div>
    )
};
export default Toggle;
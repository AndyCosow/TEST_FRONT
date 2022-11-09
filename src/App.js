import './App.css';
import {get} from "./plugins/http";

function App() {

    const getData = async () => {
        const res = await get("info")
        console.log(res)
    }

    return (
        <div className="p50">
            <button onClick={getData}>GET INFO</button>
        </div>
    );
}

export default App;


import './App.css';
import {useEffect, useRef, useState} from "react";
import UserForm from "./components/UserForm";
import UserGallery from "./components/UserGallery";

function App() {
    const [users, setUsers] = useState([])

    async function send(user) {
        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        }

        const res = await fetch("http://localhost:4000/createUser", options)
        const data = await res.json()
        console.log(data)

        setUsers(data.users)
    }

    return (
            <div className="">
                <UserForm send={send}/>
                <UserGallery users={users} setUsers={setUsers}/>
            </div>
    );
}

export default App;

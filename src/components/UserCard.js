import React from 'react';

const UserCard = ({user, index, setUsers}) => {
    const userColor = user.gender === "male" ? "#8cadc2" : "#b08cc2"

    async function removeUser() {
        const res = await fetch("http://localhost:4000/remove/"+index)
        const data = await res.json()

        setUsers(data.users)
        console.log(data)
    }

    return (
        <div className="card" style={{backgroundColor: userColor}}>
            <img src={user.photo} alt=""/>
            <h4>{user.name}</h4>
            <button onClick={removeUser}>Delete</button>
        </div>
    );
};

export default UserCard;
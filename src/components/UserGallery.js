import React from 'react';
import UserCard from "./UserCard";

const UserGallery = ({users, setUsers}) => {
    return (
        <div className="p50 d-flex flex-wrap">
            {users.map((x, i) => <UserCard key={i} index={i} user={x} setUsers={setUsers}/>)}
        </div>
    );
};

export default UserGallery;
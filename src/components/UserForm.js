import {useRef, useState} from 'react';

const UserForm = ({send}) => {
    const nameRef = useRef()
    const photoRef = useRef()
    const genderRef = useRef()

    function addUser() {
        const user = {
            name: nameRef.current.value,
            photo: photoRef.current.value,
            gender: genderRef.current.value
        }
        send(user)

        nameRef.current.value = ""
        photoRef.current.value = ""
    }

    return (
        <div className="p50">
            <input ref={nameRef} type="text" placeholder="name"/>
            <input ref={photoRef} type="text" placeholder="photo"/>
            <select ref={genderRef} name="" id="">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>

            <button onClick={addUser}>ADD</button>
        </div>
    );
};

export default UserForm;
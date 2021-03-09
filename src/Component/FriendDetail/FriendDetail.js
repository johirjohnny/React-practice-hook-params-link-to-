import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h3>This is friend detail of : {friendId} </h3>
            <p>Name : {friend.name}</p>
            <p>Email : {friend.email}</p>
        </div>
    );
};

export default FriendDetail;
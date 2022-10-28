import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Manu() {


    const [user, setUser] = useState([]);

    useEffect(() => {
        getUserData();
    }, [])

    function getUserData() {
        axios.get(`https://reqres.in/api/users?page=2`)
            .then(res => {
                console.log(res.data)
                setUser(res.data.data)
            })
    }




    return (
        <div>
            <p>Manu page</p>
            {user.map((data) => {
                return <div>
                    <p>{data.first_name}</p>
                    <p>{data.email}</p>
                    <img src={data.avatar} alt="" />
                </div>


            })}
        </div>
    )
}

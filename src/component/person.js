import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function Person() {

    const [personData, setPersonData] = useState([]);

    useEffect(() => {
        personDataList();
    }, [])


    function personDataList() {
        axios.get(`https://reqres.in/api/users?page=1`)
            .then(res => {
                console.log(res.data)
                setPersonData(res.data.data)

            })
    }

    return (
        <div>
            <p>person</p>
            {personData.map((data) => {
                return <p>{data.last_name}</p>
            })}
        </div>
    )
}

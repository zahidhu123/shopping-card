import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function Person() {

    const [personData, setPersonData] = useState([]);
    const [age, setAge] = useState("")

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



    const sendData = () => {
        if(age > 18){
            alert("Yea allow");
        }
        else{
            alert("Not allow");
        }
       
       console.log(age)
    }


    return (
        <div>
            <p>person</p>
            {personData.map((data) => {
                return <p>{data.last_name}</p>
            })}


            {/* Input field */}
            <div>
                <input type="number" placeholder='Enter Age' name='age' value={age} onChange={(e) => setAge(e.target.value)} />
                <button onClick={sendData}>Send</button>
            </div>
        </div>
    )
}

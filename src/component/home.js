import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {


    // https://jsonplaceholder.typicode.com/todos

    const [list, setList] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                console.log(res.data)
                setList(res.data)
            })
    }



    return (
        <div>
            {list.map((data) => {
                return <p>{data.title}</p>
            })}
        </div>
    )
}

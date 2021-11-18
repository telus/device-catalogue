import React, { useState, useEffect } from 'react'
import Heading from '@tds/core-heading';

export default function Iphones() {
    const [iphones, setIphones] = useState();

    useEffect(()=> {
        fetch("http://localhost:8081/iphones", {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log("+++ Iphones: ", data)
            setIphones(data.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <Heading level="h1">Iphones</Heading>;
            {iphones ? 
                iphones.map((item, index) => (
                    <div key={`iphones-${index}`}>
                        <p>Name: {item.name}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))
                : "No Items"
            }
        </React.Fragment>
    )
}

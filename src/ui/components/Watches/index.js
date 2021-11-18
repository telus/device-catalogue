import React, { useState, useEffect } from 'react'
import Heading from '@tds/core-heading';

export default function Watches() {
    const [watches, setWatches] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:8081/watches", {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log("+++ watches: ", data)
            setWatches(data.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <React.Fragment>
            <Heading level="h1">Watches</Heading>
            {watches ? 
                watches.map((item, index) => (
                    <div key={`watches-${index}`}>
                        {/* <img src={} name={item.name} /> */}
                        <p>Name: {item.name}-{index}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))
                : "No Items"
            }
        </React.Fragment>
    )
}

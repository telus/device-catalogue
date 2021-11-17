import React, { useState, useEffect } from 'react'
import Heading from '@tds/core-heading';

export default function Iphones() {
    const [iphones, setIphones] = useState();

    useEffect(()=> {
        console.log("+++ Iphones")
        fetch("/iphones", {method: "GET"})
        .then(res => res.json())
        .then(data => setIphones(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <Heading level="h1">Iphones</Heading>;
            
        </React.Fragment>
    )
}

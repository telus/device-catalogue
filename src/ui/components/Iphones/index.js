import React, { useState, useEffect } from 'react'

import FlexGrid from '@tds/core-flex-grid'
import PageHeading from "../PageHeading";
import PageProduct from "../PageProduct";

export default function Iphones() {
    const [iphones, setIphones] = useState();

    useEffect(() => {
        fetch("http://localhost:8081/iphones")
            .then(res => res.json())
            .then(data => {
                console.log("+++ Iphones: ", data)
                setIphones(data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <PageHeading title="iPhones" />
            <FlexGrid>
                <FlexGrid.Row>
                    {iphones ?
                        iphones.map((item, index) => (
                            <PageProduct key={`iphones-${index}`} product={item} index={index}/>
                        ))
                        : "No iPhones available at this moment. Come back soon!"
                    }
                </FlexGrid.Row>
            </FlexGrid>
        </>
    )
}

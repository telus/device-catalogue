import React, { useState, useContext, useEffect } from 'react';
import FlexGrid from '@tds/core-flex-grid';
import PageHeading from "../PageHeading";
import PageProduct from "../PageProduct";
import { IphonesContext } from "../../context/IphonesContext";


export default function Iphones() {
    const [iphoneState] = useContext(IphonesContext);
    console.log(`Iphones Component retrieving data from context: ${iphoneState}`);
    
    return (
        <>
            <PageHeading title="iPhones" />
            <FlexGrid>
                <FlexGrid.Row>
                    {iphoneState ?
                        iphoneState.map((item, index) => (
                            <PageProduct key={`iphones-${index}`} product={item} index={index} type="iphones"/>
                        ))
                        : "No iPhones available at this moment. Come back soon!"
                    }
                </FlexGrid.Row>
            </FlexGrid>
        </>
    )
}

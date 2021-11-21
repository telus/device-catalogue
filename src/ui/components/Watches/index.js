import React, { useState, useContext, useEffect } from 'react';
import FlexGrid from '@tds/core-flex-grid';
import PageHeading from "../PageHeading";
import PageProduct from "../PageProduct";
import { WatchesContext } from "../../context/WatchesContext";

export default function Watches() {
    const [watchState] = useContext(WatchesContext);
    console.log(`Watches Component retrieving data from context: ${watchState}`)

    return (
        <>
            <PageHeading title="Watches" />
            <FlexGrid>
                <FlexGrid.Row>
                    {watchState ?
                        watchState.map((item, index) => (
                            <PageProduct key={`watches-${index}`} product={item} index={index}  type="watches"/>
                        ))
                        : "No Watches available at this moment. Come back soon!"
                    }
                </FlexGrid.Row>
            </FlexGrid>
        </>
    )
}

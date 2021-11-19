import React, { useState, useEffect } from 'react'

import FlexGrid from '@tds/core-flex-grid'
import PageHeading from "../PageHeading";
import PageProduct from "../PageProduct";

export default function Watches() {
    const [watches, setWatches] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8081/watches")
            .then(res => res.json())
            .then(data => {
                console.log("+++ watches: ", data)
                setWatches(data.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <PageHeading title="Watches" />
            <FlexGrid>
                <FlexGrid.Row>
                    {watches ?
                        watches.map((item, index) => (
                            <PageProduct key={`watches-${index}`} product={item} index={index} />


                            // <PriceLockup
                            //     size="small"
                            //     topText=""
                            //     price={_.round(item.price / 12, 2)}
                            //     signDirection="left"
                            //     rateText=""
                            //     bottomText="/month"
                            //     a11yText="25 dollars per month"
                            //     footnoteLinks={<FootnoteLink number={[7, 8]} onClick={(number, ref) => { }} copy="en" />}
                            // />

                        ))
                        : "No Watches available at this moment. Come back soon!"
                    }
                </FlexGrid.Row>
            </FlexGrid>
        </>
    )
}

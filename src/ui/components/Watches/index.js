import React, { useState, useEffect } from 'react'
import Heading from '@tds/core-heading';
import DisplayHeading from '@tds/core-display-heading'
import Image from '@tds/core-image'
import PriceLockup from '@tds/core-price-lockup'
import Card from '@tds/core-card'
import _ from 'lodash';
import { FootnoteLink } from '@tds/core-terms-and-conditions'
import Paragraph from '@tds/core-paragraph'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider';

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
        <React.Fragment>
            <Heading level="h1">Watches</Heading>
            
            {watches ?
                watches.map((item, index) => (
                    <Card key={`watches-${index}`}>
                        <Image
                            src={`../../../../public/images/watch.jpeg`}
                            rounded="corners"
                            width={300}
                            height={300}
                            alt={item.name}
                        />
                        <Heading level="h2">{item.brand}</Heading>
                        <Heading level="h3">{item.name}</Heading>
                        <PriceLockup
                            size="small"
                            topText=""
                            price={_.round(item.price / 12, 2)}
                            signDirection="left"
                            rateText=""
                            bottomText="/month"
                            a11yText="25 dollars per month"
                            footnoteLinks={<FootnoteLink number={[7, 8]} onClick={(number, ref) => { }} copy="en" />}
                        />
                        <HairlineDivider />
                       <Paragraph>
                            <Text>
                                TELUS Easy Payment applied.
                                <FootnoteLink number={[3]} onClick={(number, ref) => {}} copy="en" />
                            </Text>
                        </Paragraph>
                    </Card>
                ))
                : "No Watches available at this moment. Come back soon!"
            }
        </React.Fragment>
    )
}

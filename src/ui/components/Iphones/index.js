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
import Strong from '@tds/core-strong'
import HairlineDivider from '@tds/core-hairline-divider';

export default function Iphones() {
    const [iphones, setIphones] = useState();

    useEffect(()=> {
        fetch("http://localhost:8081/iphones")
        .then(res => res.json())
        .then(data => {
            console.log("+++ Iphones: ", data)
            setIphones(data.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <DisplayHeading level="h1">Iphones</DisplayHeading>
            {iphones ? 
                iphones.map((item, index) => (
                    <Card key={`iphones-${index}`}>
                        <Image
                            src={`../../../../public/images/watch.jpeg`}
                            rounded="corners"
                            width={300}
                            height={300}
                            alt={item.name}
                        />
                        <Heading level="h3">{item.brand}</Heading>
                        <Heading level="h2">{item.name}</Heading>
                        <Strong>
                            <PriceLockup
                                size="small"
                                topText=""
                                price={item.price}
                                signDirection="left"
                                rateText="" 
                                />
                        </Strong>
                       <HairlineDivider />

                       <Paragraph>
                            <Text>
                                TELUS Easy  Paymeny applied.
                                <FootnoteLink number={[3]} onClick={(number, ref) => {}} copy="en" />
                            </Text>
                        </Paragraph>
                        <Paragraph><Text>Taxes due upfront.</Text></Paragraph>
                        <Paragraph>
                            <Text>Retail price: $470</Text>
                        </Paragraph>
                    </Card>
                ))
                : "No iPhones available at this moment. Come back soon!"
            }
        </React.Fragment>
    )
}

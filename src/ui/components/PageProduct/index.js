import React from 'react';
import Heading from '@tds/core-heading';
import FlexGrid from '@tds/core-flex-grid'
import Image from '@tds/core-image'
import PriceLockup from '@tds/core-price-lockup'
import Card from '@tds/core-card'
import _ from 'lodash';
import { FootnoteLink } from '@tds/core-terms-and-conditions'
import Paragraph from '@tds/core-paragraph'
import Text from '@tds/core-text'
import Strong from '@tds/core-strong'
import HairlineDivider from '@tds/core-hairline-divider';
import Box from '@tds/core-box'
import Small from '@tds/core-small'


export default function PageProduct(props) {
    console.log("++++ PageProduct 1: ", props)

    const {product, index } = props;

    console.log("++++ PageProduct 2: ", product)
    return (
        <FlexGrid.Col>
            <Box vertical={0}>
                <Card key={`iphones-${index}`}>
                    <Image
                        src={`../../../../public/images/watch.jpeg`}
                        rounded="corners"
                        width={300}
                        height={300}
                        alt={product.name}
                    />
                    <Paragraph><Strong><Text>{product.brand}</Text></Strong></Paragraph>
                    <Heading level="h2">{product.name}</Heading>
                    <Box vertical={2}>
                        <Strong>
                            <PriceLockup
                                size="small"
                                topText=""
                                price={product.price}
                                signDirection="left"
                                rateText=""
                            />
                        </Strong>
                    </Box>
                    <Box vertical={2}>
                        <HairlineDivider />
                    </Box>
                    <Box vertical={2}>
                        <Paragraph>
                            <Text size="small">
                                TELUS Easy  Paymeny applied.
                                <FootnoteLink number={[3]} onClick={(number, ref) => { }} copy="en" />
                            </Text>
                        </Paragraph>
                        <Paragraph><Text size="small">Taxes due upfront.</Text></Paragraph>
                        <Paragraph>
                            <Text size="small">Retail price: $470</Text>
                        </Paragraph>
                    </Box>
                </Card>
            </Box>
        </FlexGrid.Col>
    )
}

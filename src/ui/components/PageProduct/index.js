import React from 'react';
import Heading from '@tds/core-heading';
import FlexGrid from '@tds/core-flex-grid';
import Image from '@tds/core-image';
import PriceLockup from '@tds/core-price-lockup';
import Card from '@tds/core-card';
import _ from 'lodash';
import { FootnoteLink } from '@tds/core-terms-and-conditions';
import Paragraph from '@tds/core-paragraph';
import Text from '@tds/core-text';
import Strong from '@tds/core-strong';
import HairlineDivider from '@tds/core-hairline-divider';
import Box from '@tds/core-box';
import iphoneImg from '../../../../public/images/iphone.jpg';
import watchesImg from '../../../../public/images/watch.jpg';
import Notification from '@tds/core-notification';

export default function PageProduct(props) {
    const { product, index, type } = props;
    console.log(`PageProduct component props: ${JSON.stringify(props)}`);

    return (
        <FlexGrid.Col>
            <Box vertical={0}>
                <Card key={`${product.brand}-${index}`}  className="PageProduct">

                    <Image
                        src={type == "iphones" ? iphoneImg : watchesImg}
                        rounded="corners"
                        width={150}
                        height={300}
                        alt={product.name}
                    />
                    <Paragraph><Strong><Text>{product.brand}</Text></Strong></Paragraph>
                    <Heading level="h2">{product.name}</Heading>
                    {type == "iphones" &&
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
                    }
                    {type == "watches" &&
                        <FlexGrid gutter={false}>
                            <FlexGrid.Row>
                                <FlexGrid.Col>
                                    <Box vertical={2}>
                                        <Strong>
                                            <PriceLockup
                                                className="PriceLockup"
                                                size="small"
                                                topText=""
                                                price={_.round(product.price / 12, 2)}
                                                signDirection="left"
                                                rateText=""
                                                bottomText="/month"
                                                a11yText="25 dollars per month"
                                                footnoteLinks={<FootnoteLink number={[4]} onClick={(number, ref) => { }} copy="en" />}
                                            />
                                        </Strong>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col>
                                    <Box vertical={2}>
                                        <Strong>
                                            <PriceLockup
                                                className="PriceLockup"
                                                size="small"
                                                topText=""
                                                price="0.00"
                                                signDirection="left"
                                                rateText=""
                                                bottomText="Upfront"
                                                a11yText=""
                                                
                                            />
                                        </Strong>
                                    </Box>
                                </FlexGrid.Col>
                            </FlexGrid.Row>
                        </FlexGrid>
                    }
                    {type == "watches" &&
                        <Notification variant="branded">
                            <Text bold>
                                Get 3 months of Apple Fitness+
                                <FootnoteLink number={[5]} onClick={(number, ref) => { }} copy="en" />
                                free when you buy Apple Watch.</Text>
                        </Notification>
                    }

                    {type == "iphones" &&
                        <Box vertical={2}>
                            <HairlineDivider />
                        </Box>
                    }
                    <Box vertical={2}>
                        {type == "iphones" &&
                            <>
                                <Paragraph>
                                    <Text size="small">
                                        TELUS Easy  Paymeny applied.
                                        <FootnoteLink number={[3]} onClick={(number, ref) => { }} copy="en" />
                                    </Text>
                                </Paragraph>
                                <Paragraph><Text size="small">Taxes due upfront.</Text></Paragraph>
                            </>
                        }
                        <Paragraph>
                            <Text size="small">Retail price: $470</Text>
                        </Paragraph>
                    </Box>
                </Card>
            </Box>
        </FlexGrid.Col>
    )
}

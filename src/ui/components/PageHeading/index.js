import React from 'react'
import DisplayHeading from '@tds/core-display-heading'
import Box from '@tds/core-box'
import FlexGrid from '@tds/core-flex-grid'

export default function PageHeading(props) {
    const title = props.title || "Heading";
    return (
        <FlexGrid>
            <FlexGrid.Row>
                <Box inset={5}>
                    <DisplayHeading level="h1">{title}</DisplayHeading>
                </Box>
            </FlexGrid.Row>
        </FlexGrid>
    )
}

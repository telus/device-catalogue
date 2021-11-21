import React from 'react'
import DisplayHeading from '@tds/core-display-heading'
import Box from '@tds/core-box'
import FlexGrid from '@tds/core-flex-grid'

export default function PageHeading(props) {
    return (
        <FlexGrid>
            <FlexGrid.Row>
                <Box inset={5}>
                    <DisplayHeading level="h1">{props.title}</DisplayHeading>
                </Box>
            </FlexGrid.Row>
        </FlexGrid>
    )
}

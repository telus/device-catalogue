import React from 'react'
import DisplayHeading from '@tds/core-display-heading'
import Box from '@tds/core-box'

export default function PageHeading(props) {
    return (
         <Box inset={5}>
            <DisplayHeading level="h1">{props.title}</DisplayHeading>
        </Box>
    )
}

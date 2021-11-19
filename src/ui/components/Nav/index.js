import React from 'react';
import {Link } from 'react-router-dom';
import { Watch, Phone, Home } from '@tds/core-decorative-icon';
import Box from '@tds/core-box'

export default function Nav() {
    return (
        <Box inline between={5} inset={3}>
            <Link to="/"><Home variant="default" size={16} />Home</Link>
            <span>|</span>
            <Link to="/watches"><Watch variant="default" size={16} />Watches</Link>
            <span>|</span>
            <Link to="/iphones"><Phone variant="default" size={16} />iphones</Link>
            <span>|</span>
             {/* <Link to="/asdadasdasd">404</Link> */}
        </Box>
     
    )
}

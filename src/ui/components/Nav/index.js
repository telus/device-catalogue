import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Watch, Phone, Home } from '@tds/core-decorative-icon';
import Box from '@tds/core-box';
import "./Nav.scss";

export default function Nav() {
    const [activePage, setActivePage] = useState('Home')

    // useEffect(() => {
    //     console.log("+++++++++++++ activePage", activePage)
    // }, [activePage])

    return (
        <div className="NavComponent">
            <Box inline between={0} inset={0}>
                <Box inline between={0} inset={3}>
                    <Link className={activePage == 'Home' && 'active'} onClick={() => { setActivePage('Home') }} to="/"><Home variant="default" size={20} />Home</Link>
                </Box>
                <Box inline between={0} inset={3}>
                    <Link className={activePage == 'Watches' && 'active'} onClick={() => { setActivePage('Watches') }} to="/watches"><Watch variant="default" size={20} />Watches</Link>
                </Box>
                <Box inline between={0} inset={3}>
                    <Link className={activePage == 'iPhones' && 'active'} onClick={() => { setActivePage('iPhones') }} to="/iphones"><Phone variant="default" size={20} />iPhones</Link>
                </Box>
            </Box>
            {/* <Link to="/asdadasdasd">404</Link> */}
        </div>

    )
}

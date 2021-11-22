import React, {useEffect, useState, createContext} from 'react';
const axios = require('axios').default;

export const IphonesContext = createContext();

export default function IphonesContextProvider(props) {
    const [iphones, setIphones] = useState();

    useEffect(() => {
        axios.get("http://localhost:8081/iphones")
        
        .then(data => {
            console.log(`Successfully imported data from iphones api: ${data}`)
            setIphones(data.data);
        })
        .catch(err => console.log(`Error in importing data from iphones api: ${err}`))
      
    }, [])
    return (
        <IphonesContext.Provider value={[iphones, setIphones]}>
            {props.children}
        </IphonesContext.Provider>
    )
}

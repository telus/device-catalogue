import React, {useEffect, useState, createContext} from 'react';

export const IphonesContext = createContext();

export default function IphonesContextProvider(props) {
    const [iphones, setIphones] = useState();

    useEffect(() => {
        fetch("http://localhost:8081/iphones")
        .then(res => res.json())
        .then(data => {
            console.log(`Successfully imported data from iphones api: ${data}`)
            setIphones(data.data)
        })
        .catch(err => console.log(`Error in importing data from iphones api: ${err}`))
    }, [])
    return (
        <IphonesContext.Provider value={[iphones, setIphones]}>
            {props.children}
        </IphonesContext.Provider>
    )
}

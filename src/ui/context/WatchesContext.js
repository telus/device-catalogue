import React, {useEffect, useState, createContext} from 'react';

export const WatchesContext = createContext();

export default function WatchesContextProvider(props) {
    const [watches, setWatches] = useState();

    useEffect(() => {
        fetch("http://localhost:8081/watches")
        .then(res => res.json())
        .then(data => {
            console.log(`Successfully imported data from watches api: ${data}`)
            setWatches(data.data)
        })
        .catch(err => console.log(`Error in importing data from watches api: ${err}`))
    }, [])
    return (
        <WatchesContext.Provider value={[watches, setWatches]}>
            {props.children}
        </WatchesContext.Provider>
    )
}

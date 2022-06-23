import React, { useEffect } from "react";

// components

import CardTablePerdin from "../../components/Cards/CardTablePerdin.js";

export default function Perdin() {
    const [listdataPerdin, setListDataPerdin] = React.useState([]);
    const [listdataLokasi, setListDataLokasi] = React.useState([]);


    function getDataLokasi() {
        fetch(`http://libra.akhdani.net:54125/api/master/lokasi/list?limit=25&offset=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(res => {
                console.log('list data Lokasi:', res);
                setListDataLokasi(res.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getDataLokasi()
    }, [1])

    

function getDataPerdin() {
    fetch(`http://libra.akhdani.net:54125/api/trx/perdin/list?limit=25&offset=0`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(res => {
            console.log('list data perdin:', res);
            setListDataPerdin(res.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

useEffect(() => {
    getDataPerdin()
}, [1])

return (
    <>
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
                <CardTablePerdin dataTable={listdataPerdin} />
            </div>
        </div>
    </>
);
}

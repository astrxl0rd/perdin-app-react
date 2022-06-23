import React, { useEffect } from "react";

// components

import CardTable from "../../components/Cards/CardTable.js";

export default function Tables() {

  const [listDataPegawai, setListDataPegawai] = React.useState([])

  function getDataPegawai() {
    fetch(`http://libra.akhdani.net:54125/api/master/pegawai/list?limit=25&offset=0`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
        console.log('list data Pegawai:', res);
        setListDataPegawai(res.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    getDataPegawai()
  }, [1])
  
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable dataTable={listDataPegawai}/>
        </div>
      </div>
    </>
  );
}

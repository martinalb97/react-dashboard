import React, { useEffect, useState } from 'react';


function LastProductInDB(){
    const [ultimoProducto, setUltimoProducto] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/api/lastProduct').then(rsp => {
      rsp.json().then(rsp => {
        console.log(rsp)
        setUltimoProducto(rsp)
      })
    }).catch(error => {
      console.log(error)
    })
  },[])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{ultimoProducto.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={ultimoProducto.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{ultimoProducto.long_description}</p>
                     {/*<!-- Content Wrapper -->*/}
                    {/*<!-- <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> -->*/}
                </div>
            </div>
        </div>
    )
}

export default LastProductInDB;

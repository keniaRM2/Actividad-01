import React from 'react';

export default () => {

    return (

        <div>
            
            <header>
                <h1>Plan de Estudios</h1>
            </header>
            <div className="row text-justify" >
                <div className="col-12 col-md-4">

                    <button id="tsu" className="btn btn-outline-success">
                        <i className="fa-solid fa-school"></i> TSU
                    </button>
                    <div id="tsuContainer" className="card border-success mb-3 col-12 col-md-4 mt-3" style={{ minWidth: "-webkit-fill-available" }} />

                </div>

                <div className="col-12 col-md-4">
                    <button id="ing" className="btn btn-outline-info"><i className="fa-solid fa-school"></i>  Ingenieria</button>
                    <div id="ingContainer" className="card border-info mb-3 col-12 col-md-4 mt-3"
                        style={{ minWidth: "-webkit-fill-available" }}>

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <button id="lic" className="btn btn-outline-danger"><i className="fa-solid fa-school"></i>  Licenciatura</button>
                    <div id="licContainer" className="card border-danger mb-3 col-12 col-md-4 mt-3"
                        style={{ minWidth: "-webkit-fill-available" }}

                    >

                    </div>

                </div>
            </div>
        </div>
    )
}
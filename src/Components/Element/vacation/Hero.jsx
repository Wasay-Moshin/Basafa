import React from "react";

function Hero() {
  return (
    <div className="vacationhero">
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 style={{color:"#487dc8"}}>Ausstehende Urlaubsanträge</h5>
              </div>
              <div className="card-content">
                <p>Keine Blätter gefunden</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 style={{color:"#81c948"}}>Genehmigte Urlaubsanträge</h5>
              </div>
              <div className="card-content">
                <p>Keine Blätter gefunden</p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-8 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 style={{color:"#f48c20"}}>Abgelehnte Urlaubsanträge</h5>
              </div>
              <div className="card-content">
                <p>Keine Blätter gefunden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

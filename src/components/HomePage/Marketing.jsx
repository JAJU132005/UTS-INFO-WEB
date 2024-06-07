import React from 'react';

const Marketing = () => (
  <div className="content-container">
    <h2>Programas</h2>
    <div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <image href="../images/Merdadeo.png" width="140" height="140" preserveAspectRatio="xMidYMid slice" />
        </svg>
        <h2 className="fw-normal fixed-size">Facultad de Ciencias Socioeconomicas y Empresariales</h2>
        <p>Informacion asociada a las Tecnologias y Niveles universitarios de esta facultad</p>
        <p><a className="btn btn-secondary" href="https://www.uts.edu.co/sitio/oferta-academica-2/" target="_blank" >Mas Informacion</a></p>
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <image href="../images/sistemas.png" width="140" height="140" preserveAspectRatio="xMidYMid slice" />
        </svg>
        <h2 className="fw-normal fixed-size">Facultad de Ciencias Naturales e Ingenierias</h2>
        <p>Informacion asociada a las Tecnologias y Niveles universitarios de esta facultad</p>
        <p><a className="btn btn-secondary" href="https://www.uts.edu.co/sitio/oferta-academica-2/" target="_blank" >Mas Informacion</a></p>
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
          <image href="../images/virtual.png" width="140" height="140" preserveAspectRatio="xMidYMid slice" />
        </svg>
        <h2 className="fw-normal fixed-size">Programas academicos en la modalidad virtual</h2>
        <p>Informacion academica de los programas disponibles en la modalidad virtual</p>
        <p><a className="btn btn-secondary" href="https://www.utsvirtual.edu.co/sitio/programas/" target="_blank" >Mas informacion</a></p>
      </div>
    </div>
  </div>
);

export default Marketing;
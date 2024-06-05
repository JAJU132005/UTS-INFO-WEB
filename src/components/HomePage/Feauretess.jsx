import React from 'react';

const Featurettes = () => (
  <div className="content-container">
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Cultura y promoción artística</h2>
        <p className="lead">En el área de Arte y Cultura, Bienestar Institucional te ofrece durante cada semestre académico una gran variedad de actividades como música, danza, artes plásticas y teatro, las cuales juegan un papel importante en tu formación integral, en la medida en que unen y reúnen a una colectividad en torno a espacios creativos, contribuyendo a la compresión de las distintas facetas del hombre como ser social, permitiéndole expresar lo que le gusta hacer. Por esto, queremos que visualices las ofertas y selecciones la que más te guste. ¡Anímate y participa desarrollando tus talentos!</p>
      </div>
      <div className="col-md-5">
          <img src={"../src/assets/bienestar-7.jpg"} class="card-img-tap" alt="Card image 1"/>    
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">Actividad física y deporte</h2>
        <p className="lead">Bienestar Institucional te ofrece una serie de actividades deportivas y recreativas durante cada semestre académico. Visualiza la oferta y selecciona el deporte que más te guste, nosotros atenderemos tus necesidades e intereses deportivos y recreativos, contribuyendo a tu formación integral. ¡Anímate y participa disfrutando de un sano esparcimiento!</p>
      </div>
      <div className="col-md-5 order-md-1">
        <img src={"../src/assets/deporte.jpg"} class="card-img-tap" alt="Card image 1"/>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Diversidad e inclusión</h2>
        <p className="lead">Las Unidades Tecnológicas de Santander se han caracterizado por ser una institución educativa de calidad, la cual día a día busca la manera de garantizar los derechos de toda la comunidad que hace parte de esta familia UTEÍSTA, es por ello que en pro de seguir construyendo un tejido social equitativo, igualitario e incluyente se hace necesario implementar un Programa de Educación que permita abrir canales de atención a estudiantes, docentes y personal administrativo, dando lugar a la expansión de conocimientos, enseñanzas y la interacción con la población vulnerable desde una intervención activa permitiendo satisfacer las diversas necesidades identificadas en los procesos de atención.</p>
      </div>
      <div className="col-md-5">
          <img src={"../src/assets/diversidad.jpg"} class="card-img-tap" alt="Card image 1"/>
      </div>
    </div>
    <hr className="featurette-divider" />
  </div>
);

export default Featurettes;
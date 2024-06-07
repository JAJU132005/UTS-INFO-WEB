
function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../images/imagenHeater1.png" class="d-block w-100" alt="Descripción de la imagen 1" />
          <div className="container">
            <div className="carousel-caption custom-background">
              <h1>Admisiones para la Modalidad Presencial.</h1>
              <p className="opacity-75">Publicacion de la lista de admitidos 2024-2 : Julio 10 de 2024</p>
              <p><a className="btn btn-lg btn-primary" href="https://www.uts.edu.co/sitio/proceso-modalidad-presencial/" target="_blank">Mas informacion</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../images/30-FACHADA-POSTERIOR.jpg" class="d-block w-100" alt="Descripción de la imagen 2" />
          <div className="container">
            <div className="carousel-caption custom-background">
              <h1>Fecha limite cancelacion de Cursos</h1>
              <p>La fecha limite de cancelacion de cursos para el periodo 2024-1 es el 25 de Mayo de 2024</p>
              <p><a className="btn btn-lg btn-primary" href="https://www.uts.edu.co/sitio/wp-content/uploads/normatividad/acuerdos/acu-120.pdf?_t=1696535145#page=4"target="_blank">Mas informacion</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../images/imagen3.jpg" class="d-block w-100" alt="Descripción de la imagen 3" />
          <div className="container">
            <div className="carousel-caption custom-background">
              <h1>Fecha limite cancelacion de Semestre</h1>
              <p>La fecha limite de cancelacion del semestre 2024-1 es el 24 de Mayo de 2024</p>
              <p><a className="btn btn-lg btn-primary" href="https://www.uts.edu.co/sitio/wp-content/uploads/normatividad/acuerdos/acu-120.pdf?_t=1696535145#page=4"target="_blank">Mas informacion</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
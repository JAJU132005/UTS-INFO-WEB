import React from 'react';
import Card from './Card';

const Album = () => {
  const cardData = [
    { text: "Expobásicas 2024, un evento que destacó el ingenio y conocimiento de estudiantes y egresados del Departamento de Ciencias Básicas de las UTS, fue un rotundo éxito. Durante tres horas, se desarrollaron actividades como el Concurso de Integrales, donde los participantes pusieron a prueba sus habilidades matemáticas.", img: "../src/assets/1_1.jpg", link: "https://www.uts.edu.co/sitio/el-ingenio-se-hizo-presente-en-expobasicas-2024/" },
    { text: "Del 21 al 24 de mayo, se llevó a cabo la Semana de la Ingeniería Industrial, donde se presentaron iniciativas y logros en docencia, investigación, extensión e internacionalización.<br/>El evento reunió a más de 500 personas, incluyendo estudiantes, egresados, docentes, empresarios y comunidad académica.", img: "../src/assets/1_2.jpg", link: "https://www.uts.edu.co/sitio/con-gran-exito-culmino-la-semana-de-la-ingenieria-industrial-en-las-uts/" },
    { text: "Estudiantes del curso de Planeación Estratégica de la carrera de Administración de Empresas aplicaron sus conocimientos en 30 empresas del área metropolitana de Bucaramanga. Desarrollaron planes estratégicos diferenciados para cada empresa, integrando la academia con el sector productivo para fortalecer la competitividad y productividad organizacional.", img: "../src/assets/1_3.jpg", link: "https://www.uts.edu.co/sitio/consultorias-empresariales-empiezan-a-dar-sus-frutos-en-santander/" },
    { text: "Hola muchachos, si hay postres de Arequipe, queso y mora también se llevan a cualquier parte de la U<br / >🍯<br / >📲 3163899077<br/> Se aceptan pagos por transferencia 😋", img: "../src/assets/2_1.jpg", link: "https://www.facebook.com/share/p/v93HBbLLUNQcMnZX/?mibextid=oFDknk"  },
    { text: "Buenos días compañeritoss🥰🥰<br /> GOMITAS ENCHILADAS <br /> 13 UNIDADES<br > 5 aritos, 5 gusanitos y 3 banderitas<br/> $4.500🌶", img: "../src/assets/2_2.jpg", link: "https://www.facebook.com/share/p/cUvrxQaYWkihcB3G/?mibextid=oFDknk"  },
    { text: "Buenas tardes compañeros!! Ya llegaron las galletitas!!<br/> 10 galletitas x $2000<br/> En caso de que quieras apartar, escribeme al interno!!<br/> Las llevamos hasta cualquier parte de la universidad!!<br/> RECIBIMOS NEQUI", img: "../src/assets/2_3.jpg", link: ""  },
  ];

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="content-container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardData.map((card, index) => (
            <Card key={index} text={card.text} img={card.img} link={card.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
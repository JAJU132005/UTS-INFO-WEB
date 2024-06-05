// src/components/Login.jsx
import React, { useState } from 'react';
import logo from '../assets/logoUTS.png';
import profile from '../assets/user.jpg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import credenciales from './credenciales';
import Header from './HomePage/Header';


const auth = getAuth(credenciales.appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const funcionAutentificacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const Contraseña = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, Contraseña);
        navigate(from, { replace: true });
      } catch (error) {
        alert("Asegúrese de que la contraseña tenga más de 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, Contraseña);
        navigate(from, { replace: true });
      } catch (error) {
        alert("El correo o contraseña son incorrectos");
      }
    }
  }

  return (
    <div className='container-fluid'>
      <Header />
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={profile} alt="" className='estilo-profile' />
              <form onSubmit={funcionAutentificacion}>
                <input type="text" placeholder='Ingresar Email' className='cajaTexto' id="email" />
                <input type="password" placeholder='Ingresar Contraseña' className='cajaTexto' id="password" />
                <button className='btnform'>{registrando ? "Registrate " : "Inicia sesión "}</button>
              </form>
              <h4 className='texto'>{registrando ? "Si ya tienes cuenta " : "No tienes cuenta " }
                <button className='btnswicth' onClick={() => setRegistrando(!registrando)}>
                  {registrando ? "Inicia sesión" : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={logo} alt="" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  );
}

export default Login;



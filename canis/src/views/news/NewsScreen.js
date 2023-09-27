import React from 'react'
import Navbar from '../../components/shared/Navbar';

export default function News() {
    return(
        <>
        <Navbar/>
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Noticias</h1>
           
          </div>
          <hr className="my-4" />
          <div className="row g-3">
          <div className="col-md-6">
              <div >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h3>Encuentra tu carrera</h3>
                    
                  </div>
                  <p style={{ textAlign : 'justify'}}>Bienvenidos a la sección de noticias de la página universitaria, donde les informamos sobre los últimos acontecimientos y actividades de nuestra comunidad académica. En esta edición, les contamos sobre el exitoso lanzamiento del satélite U-TEC, diseñado y construido por un equipo de estudiantes y profesores de la Facultad de Ingeniería. También les presentamos el nuevo programa de intercambio estudiantil con la Universidad de Oxford, que ofrece la oportunidad de cursar un semestre en una de las instituciones más prestigiosas del mundo. Además, les invitamos a participar en el concurso de fotografía "Mi universidad, mi hogar", que premiará las mejores imágenes que reflejen el orgullo y el sentido de pertenencia de los universitarios. Y por último, les recordamos que ya están abiertas las inscripciones para los cursos libres del segundo semestre, que incluyen temas como yoga, ajedrez, teatro y fotografía digital. No se pierdan esta oportunidad de aprender y divertirse en la universidad.</p>
                  <button className='btn btn-success' >Solicita tu vacante </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <div className="card-body">
                <span class="d-block rounded-lg p-3">
                    <svg class="" fill="none" stroke="green" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                        </path>
                    </svg>
                   <h4 style={{ color : '#1f8200'}}>Ingeniería</h4>
                    </span>
                  <p style={{ color : '#1f8200'}}>Lorem Ipsum dolor sit amet </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <div className="card-body">
                <span class="d-block rounded-lg p-3">
                    <svg class="" fill="none" stroke="green" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                        </path>
                    </svg>
                   <h4 style={{ color : '#1f8200'}}>Licenciatura</h4>
                    </span>
                  <p style={{ color : '#1f8200'}}>Lorem Ipsum dolor sit amet </p>
                </div>
              </div>
            </div>
            <div className="container">
            <div id="demo" className="carousel slide " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"} alt="" class="d-block w-100 h-50"/>
                    </div>
                    <div class="carousel-item">
                        <img src={"https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} alt="" class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src={"https://plus.unsplash.com/premium_photo-1682284353470-53c3a913bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} alt="" class="d-block w-100"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
          </div>
        </div>
        
        </>
      );
}



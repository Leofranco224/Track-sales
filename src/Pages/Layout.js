import React from "react"
import { Outlet } from "react-router-dom";
import 'bootstrap/js/dist/dropdown'

const Layout = () => {
    return (
<div className="d-flex">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px', height: '100vh'}}>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span class="fs-4">Track&Sale</span>
        </a>
     <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="/Booking" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Booking
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
             <a class="dropdown-item" href="/RastrearCarga">Rastrear</a>
             <a class="dropdown-item" href="/Remanejamento">Analisar</a>
            </div>
        </div>
      </li>
      <li>
      <div class="dropdown show mt-1">
            <a class="btn btn-secondary dropdown-toggle" href="/Booking" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cliente
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
             <a class="dropdown-item" href="/VisaoGeralClientes">Classificação</a>
             <a class="dropdown-item" href="/OperacoesEmCurso">Operações em curso</a>
            </div>
        </div>
      </li>
      <li>
        <a href="/Relatorios" class="nav-link link-dark">
          Histórico
        </a>
      </li>
    </ul>
    <hr/>
  </div>
  <Outlet/>
</div>
    
    );
  };
  
  export default Layout
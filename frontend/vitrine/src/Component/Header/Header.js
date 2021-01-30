import react from "react";

import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header id="header">
      <div class="container">
        <div class="logo float-left">
          <img
            width="200px"
            src="https://darna.tn/wp-content/uploads/logo-darna1.png"
            alt=""
          />

          <a href="index.html"></a>
        </div>

        <nav class="nav-menu float-right d-none d-lg-block">
          <ul>
            <li class="active">
              <a href="index.html">Accueil</a>
            </li>
            <li>
              <a href="#about">A propos Darna</a>
            </li>
            <li>
              <a href="#aider">Nous Aider</a>
            </li>
            <li>
              <a href="#project">Nos Projets</a>
            </li>
            <li>
              <a href="#product">Nos Produits derivés </a>
            </li>
            <li>
              <a href="#sponsor">Sponsor</a>
            </li>
            <li>
              <a href="http://www.donbyuib.com.tn/darna.html">Donation</a>
            </li>
            <Link to="/doc"> <li>
              Lien/doc utile 
            </li>
          </Link>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import React from "react";
import './style.css';

export default function SecaoCardSabores() {
  return (
    <section className="limitar-secao card-section">

      <div className="card-titulo">
        <h2>sabores de sorvete</h2>
      </div>
      <div className="allcards">
        <div className="cards">
          <div>
            <img src="assets/sabor-oreo.png" alt="" />
          </div>
          <div>
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo.<br />Uma explosão de sabor.</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src="assets/sabor-pistache.png" alt="" />
          </div>
          <div>
            <h3>Sorvete de Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src="assets/sabor-cookies-avela.png" alt="" />
          </div>
          <div>
            <h3>Sorvete de Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src="assets/sorbet-kiwi.png" alt="" />
          </div>
          <div>
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src="assets/sorbet-morango.png" alt="" />
          </div>
          <div>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet.<br />Tradicional e saboroso.</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src="assets/sorbet-limao.png" alt="" />
          </div>
          <div>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div>
      </div>

    </section >
  );
}
import React from 'react';
import Rodape from '../../componentes/Rodape';
import Topo from '../../componentes/Topo';
import SecaoBannerSabores from './SecaoBannerSabores';
import SecaoCardSabores from './SecaoCardSabores';


export default function Sabores() {
  return (
    <main>
      <Topo />
      <SecaoBannerSabores />
      <SecaoCardSabores />
      <Rodape />
    </main>
  );

}

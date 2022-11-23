import React from 'react';
import Rodape from '../../componentes/Rodape';

import Topo from '../../componentes/Topo';
import SecaoBannerSobre from './SecaoBannerSobre';
import SecaoFotosSobre from './SecaoFotosSobre';
import SecaoTextoSobre from './SecaoTextoSobre';


export default function Sobre() {
  return (
    <main>
      <Topo />
      <SecaoBannerSobre />
      <SecaoTextoSobre />
      <SecaoFotosSobre />
      <Rodape />
    </main>
  );

}
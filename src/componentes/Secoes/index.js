import React from 'react';

import SecaoBanner from './SecaoBanner';
import SecaoSabores from './SecaoSabores';
import SecaoEventos from './SecaoEventos';
import SecaoSobre from './SecaoSobre';

export default function Secoes() {
  return (
    <main>
      <SecaoBanner />
      <SecaoSabores />
      <SecaoEventos />
      <SecaoSobre />
    </main>
  );
}

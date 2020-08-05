export const BUSCAR_NOME = 'BUSCAR_NOME';
export const APLICA_FILTRO = 'APLICA_FILTRO';
export const TROCA_DATA = 'TROCA_DATA';

export const inputPesquisa = (digitado) => ({
  type: BUSCAR_NOME,
  digitado,
});

export const aplicarFiltro = (novaData) => ({
  type: APLICA_FILTRO,
  newData: novaData,
});

export const trocaDados = () => ({
  type: TROCA_DATA,
});

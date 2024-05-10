import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  laboratorio: number;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}

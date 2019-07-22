
export interface RespuestaTopHeadlines {
  resultados: Resultado[];
}

export interface Resultado {
  id: number;
  name: string;
  img: string;
  content: string;
  precio: string;
  comercio: string;
  created_at?: any;
  updated_at?: any;
}
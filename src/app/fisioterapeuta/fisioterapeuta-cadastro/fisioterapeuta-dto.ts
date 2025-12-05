import {Usuario} from "../../login/usuario";

export interface FisioterapeutaDto {
  id: string;
  nome: string;
  inscricao: string;
  usuarioDTO: Usuario;
}

export interface Projeto{
    id: number;
    titulo: string;
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagens: string[];
    codigoUrl?: string;
    siteUrl?: string;
}
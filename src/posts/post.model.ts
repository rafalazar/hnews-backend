import { Hits } from "./hits.model";

export class PostResponse {
    hits: Hits[];
    hbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
    processingTimeMS: number;
}
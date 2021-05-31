import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { PostResponse } from "./post.model";

@Injectable()
export class PostService {

    constructor(
        private httpService: HttpService
    ) {};

    getPosts(): string {
        return 'Hello posts';
    }

    findAll() {

        try {
            return this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs').subscribe(
            res => {
                console.log(res);
            }
        );
        } catch(err) {
            console.log(err);
            
        }
        
    }
}
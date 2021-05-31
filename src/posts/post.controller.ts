import { Controller, Get, HttpService } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { PostResponse } from "./post.model";
import { PostService } from "./post.service";

@Controller('posts')
export class PostController {

    constructor(
        private postService: PostService
    ) {};

    @Get()
    findAll(){
        return this.postService.findAll();
    }
}
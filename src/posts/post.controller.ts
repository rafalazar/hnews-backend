import { Controller, Get, HttpService } from "@nestjs/common";
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
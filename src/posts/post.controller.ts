import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostService } from "./post.service";

@Controller('posts')
export class PostController {

    constructor(
        private postService: PostService
    ) {};

    @Get()
    getAllPosts() {
        return this.postService.getAllPosts();
    }

    @Get('/api')
    getDataFromApi() {
        return this.postService.getDataFromApi();
    }

    @Post('/create')
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Delete('/:id')
    deletePost(@Param('id') id: string){
        return this.postService.deletePost(id);
    }
}
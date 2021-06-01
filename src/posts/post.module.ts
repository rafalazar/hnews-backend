import { HttpModule, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { PostSchema } from "./schemas/post.schema";

@Module({
    imports: [HttpModule, MongooseModule.forFeature([{name: 'posts', schema: PostSchema}])],
    controllers: [PostController],
    providers: [PostService],
})

export class PostModule {}
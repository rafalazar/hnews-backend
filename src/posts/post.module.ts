import { HttpModule, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { Post, PostSchema } from "./schemas/post.schema";

@Module({
    imports: [HttpModule, MongooseModule.forFeature([{name: Post.name, schema: PostSchema}]), ScheduleModule.forRoot()],
    controllers: [PostController],
    providers: [PostService],
})

export class PostModule {}
import { HttpService, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePostDto } from "./dtos/create-post.dto";
import { HitsResponse } from "./hits.model";
import { Post, PostDocument } from "./schemas/post.schema";

@Injectable()
export class PostService {

    constructor(
        private httpService: HttpService,
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
    ) {};

    async create(createPostDto: CreatePostDto): Promise<Post> {
        
        const createdPost = new this.postModel(createPostDto);

        return createdPost.save();
    }

    async findAll() {

        const hitsRes = await this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
            .toPromise();
        
        const hits: HitsResponse[] = hitsRes.data.hits;
        
        let hitList: HitsResponse[] = [];

        hits.map(dataHit => {
            const hit: HitsResponse = new HitsResponse();
            hit.author = dataHit.author;
            hit.created_at = dataHit.created_at;
            hit.story_title = dataHit.story_title;
            hit.title = dataHit.title;

            hitList.push(hit);
        });

        return hitList;
    }
}
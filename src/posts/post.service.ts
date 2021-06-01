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

    async getAllPosts(): Promise<Post[]> {

        console.log((await this.postModel.find({})).length);
        

        return await this.postModel.find({});
    }

    async create(createPostDto: CreatePostDto): Promise<Post> {

        const createdPost = new this.postModel(createPostDto);

        return createdPost.save();
    }

    async getDataFromApi() {

        const hitsRes = await this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
            .toPromise();
        
        const hits: HitsResponse[] = hitsRes.data.hits;
        
        let hitList: HitsResponse[] = [];

        await this.checkIfExitsData();

        hits.map(async dataHit => {
            const hit: CreatePostDto = new CreatePostDto();
            hit.author = dataHit.author;
            hit.created_at = dataHit.created_at;
            hit.story_title = dataHit.story_title;
            hit.title = dataHit.title;

            await this.create(hit);
        });

        return hitList;
    }

    async checkIfExitsData() {
        const dataLenght = await this.getAllPosts();

        if((await dataLenght).length !== 0) {
            console.log('Data will be deleted');
            await this.postModel.db.dropCollection('posts');
        }
    }
}
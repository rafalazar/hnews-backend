import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop()
    created_at: string;

    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    story_title: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
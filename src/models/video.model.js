import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: String, // cloudinary url
        required: true,
        trim: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    videofile: { // cloudinary url
        type: String,
        required: true,
        // trim: true,
    },
    thumbnail: { // cloudinary url
        type: String,
        required: true,
        // trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });



export const Video = mongoose.model("Video", videoSchema);
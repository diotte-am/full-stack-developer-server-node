import mongoose from 'mongoose';
const schema = mongoose.Schema({
    logoImage: String,
    tuit: String,
    handle: String,
    liked: Boolean,
    disliked: Boolean,
    likes: Number,
    dislikes: Number,
    comments: Number,
    postedBy: {
        username: String
    },
    stats: {
        comments: Number
    }
}, {collection: 'tuits'});
export default schema;
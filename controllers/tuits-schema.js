import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    liked: Boolean,
    disliked: Boolean,
    likes: Number,
    dislikes: Number,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});
export default schema;
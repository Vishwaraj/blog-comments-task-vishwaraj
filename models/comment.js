import mongoose from 'mongoose';


//schema for comments
const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
    replies: {
        type: Array
    },
    commentedOn: {
        type: String,
        required: true
    }
}, {collection: 'comments'})


const Comment =  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
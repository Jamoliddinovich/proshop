import mongoose from 'mongoose';
const commentScheme = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String
    }
})
const productScheme = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "/images/airpods.jpg"
    },
    description: {
        type: String,
        required: true
    },
    price:{
type:Number,
required:true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    comments: [
        commentScheme
    ]


}, {
    timestamps: true
})

const productModel = mongoose.model("Product", productScheme);

export default productModel;
import mongoose from 'mongoose';

const orderScheme = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    }],
    shippingAdress: {
        country: {
            type: String
        },
        city: {
            type: String
        },
        address: {
            type: String
        },
        postalCode: {
            type: String
        }
    },
    paymentMethod: {
        type: String,
        required: true
    },
    PaymentResult: {
        id: {
            type: String
        },
        status: {
            type: String
        },
        updated_time: {
            type: String
        },
        email: {
            type: String
        }
    },
    taxPrice: {
        type: Number,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        dafault: 0.0
    },
    totalPrice: {
        type: Number,
        dafault: 0.0
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    paidAt: {
        type: Date
    },
    deliveredAt: {
        type: Date
    }

}, {
    timestamps: true
})

const orderModel = mongoose.model("Order", orderScheme);

export default orderModel;
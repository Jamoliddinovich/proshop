import mongoose from 'mongoose';

const userScheme = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return /(^(\S+)@(\S+)\.(\S+))/.test(v)
            },
            message: (v) => {
                return `${v} is not valid email`
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        dafault: false
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("User", userScheme);

export default userModel;
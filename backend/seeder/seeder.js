import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import ConnectDB from "../config/db.js";
import products from "../data/products.js";
import users from "../data/users.js";
ConnectDB()
const DestroyDate = async () => {
    try {
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();
        console.log("all data is deleted")
        process.exit()
    } catch (err) {
        throw new Error(err)
        process.exit(1)
    }
}
const UpdateDate = async () => {
    try {
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        let createdUsers = await User.insertMany(users);
        let adminUser = createdUsers[0]._id;
        let createdProducts = products.map((p) => {
            return {
                ...p,
                user: adminUser
            }
        })
        await Product.insertMany(createdProducts);

        console.log("Data succesfully updated to default quantities")
        process.exit()
    } catch (err) {
        throw new Error(err)
        process.exit(1)
    }
}
if (process.argv[2] === '-d') {
    DestroyDate();
} else {
    UpdateDate();
}
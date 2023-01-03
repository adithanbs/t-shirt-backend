const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const ProductCartSchema = new mongoosw.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);


const OrderSchema = new mongoosw.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
        type: Number
    },
    address: String,
    update: Date,
    user: {
        type: ObjectId,
        ref: "user"
    }

}, { timestamps: true })

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };
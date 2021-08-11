import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: { type: String, required:true},
            qty: { type: Number, required: true},
            image: { type: String, Required: true },
            price: { type: Number, required: true },
            product: {
                // mongoose.Schema.Types.ObjectId allows to define url
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
        },
    ],
    shippingAdress: {
        fullname: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    PaymentMethod: { type: String, required: true },
    allItemsPrice: { type: String, required: true},
    shippingCost: { type: String, required: true},
    taxCost: { type: String, required: true},
    totalPriceToPay: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date},
    isDelivered: { type: Boolean, default: false },
    deliveryDate: { type: Date },
},{
    timestamps: true,
});
const Order = mongoose.model('Order', orderSchema);
export default Order;
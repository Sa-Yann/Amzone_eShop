import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        // expressAsyncHandler is middleware for handling exceptions/errors inside of
        // async express routes and passing them to the express error handlers.
        if(req.body.orderItems.length === 0) {
            res.status(400).send({ message: 'Cart is empty' });
        } else {
            const order = new Order({
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress,
                paymentMethod: req.body.paymentMethod,
                allItemsCost: req.body.allItemsCost,
                shippingCost: req.body.shippingCost,
                taxCost: req.body.taxCost,
                totalPriceToPay: req.body.totalPriceToPay,
                // by importing and using is Auth we can define user id
                user: req.user._id
            });
            // we need to save the order 
            const createdOrder =  await order.save();
            res.status(201).send({ message: 'New Order Created', order: createdOrder})
            // order: createdOrder: alllows to pass the info of the prder to the frontend
        }
    })
);

    // API to get order Infos depending on the user id displayed in the url
orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
);

export default orderRouter
      
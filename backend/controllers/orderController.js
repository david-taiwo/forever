import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// Placing orders using COD Method

const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: "Order Placed Successfully"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}


// Placing orders using Stripe Method

const placeOrderStripe = async (req, res) => {}


// Placing orders using Razorpay Method

const placeOrderRazorpy = async (req, res) => {}



// All Orders  data for Admin Panel

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// User Order Data for Frontend

const userOrders = async (req, res) => {
    
    try {
        
        const {userId} = req.body;

        const orders = await orderModel.find({userId})
        res.json({success: true, orders});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }


}


// Update Order Status from Admin Panel

const updateStatus = async (req, res) => {}



export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpy,
  allOrders,
  userOrders,
  updateStatus,
};





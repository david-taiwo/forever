import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {}; // Remove 'await' here - cartData is not a promise
    
    // Create a proper copy of cartData
    cartData = { ...cartData };
    
    if (cartData[itemId]) {
      cartData[itemId] = { ...cartData[itemId] }; // Copy nested object
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {}; // Remove 'await' here
    
    // Create a proper copy of cartData
    cartData = { ...cartData };
    
    if (cartData[itemId]) {
      cartData[itemId] = { ...cartData[itemId] }; // Copy nested object
      cartData[itemId][size] = quantity;
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {}; // Remove 'await' and provide default

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };

import { Request, Response } from "express";
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cart/cartModel");
const CartItem = require("../../models/cart/cartItemModel");
const User = require("../../models/auth/userModel");

interface IUserReq extends Request {
  user?: any;
}

//@desc    create cart
//@router  POST /api/cart
//@access  User
const createCart = asyncHandler(async (req: Request, res: Response) => {
  const { user } = req.body;

  const newCart = new Cart({ user });
  try {
    const sendCart = await newCart.save();
    res.status(200).json(sendCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
const updateCart = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getCart = asyncHandler(async (req: Request, res: Response) => {
  try {
    const get = await Cart.find();
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET CART ID BY USER ID
const getCartByUserId = asyncHandler(async (req: Request, res: Response) => {
  try {
    const get = await Cart.findOne({ user: req.params.id });
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    get all cart item
//@router  GET /api/cart/:id
//@access  User
const getCartItemByCartId = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const getCart = await CartItem.find({ cart: req.params.id });
      res.status(200).json(getCart);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);
//GET CART ITEM BY ID
const getCartItemById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const get = await CartItem.findById(req.params.id);
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});
//@desc    add cartItems to cart
//@router  POST /api/cart/add/:id
//@access  User
const addToCart = asyncHandler(async (req: Request, res: Response) => {
  const { product, brand, name, image, price, discount, quantity } = req.body;

  const newItemCart = new CartItem({
    cart: req.params.id,
    product,
    brand,
    name,
    image,
    price,
    discount,
    quantity,
  });

  const cartExits = await CartItem.findOne({ product });
  try {
    let data;
    if (cartExits) {
      cartExits.quantity = quantity + cartExits.quantity;
      data = await cartExits.save();
    } else {
      data = await newItemCart.save();
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Th??m v??o gi??? h??ng th???t b???i" + error);
  }
});

//@desc    Remove cart item
//@router  DELETE /api/cart/delete/:id
//@access  User
const removeCartItem = asyncHandler(async (req: Request, res: Response) => {
  const cartItem = await CartItem.findByIdAndDelete(req.params.id);

  if (cartItem) {
    await cartItem.remove();
    res.json({ message: "X??a 1 s???n ph???m trong gi??? h??ng th??nh c??ng" });
  } else {
    res.status(500);
    throw new Error("Kh??ng t??m th???y s???n ph???m trong gi??? c???n x??a");
  }
});

//@desc    update cart item
//@router  PUT /api/cart/update/:id
//@access  User
const updateCartItem = asyncHandler(async (req: Request, res: Response) => {
  const cartItemId = { _id: req.params.id };
  const { quantity } = req.body;

  try {
    const data = await CartItem.findByIdAndUpdate(
      cartItemId,
      { quantity },
      {
        new: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    throw new Error("C???p nh???t gi??? h??ng th???t b???i!" + error);
  }
});

export {
  createCart,
  getCart,
  updateCart,
  getCartByUserId,
  getCartItemByCartId,
  getCartItemById,
  addToCart,
  removeCartItem,
  updateCartItem,
};

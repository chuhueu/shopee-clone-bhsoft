import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Review = require("../../models/product/reviewModel");

//POST COMMENT
const postComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const post = await Review.save(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE COMMENT
const updateComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL COMMENT OF PRODUCT
const getComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const get = await Review.find({ product: req.params.id });
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});
//DELETE COMMENT
const deleteComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("The comment has been deleted...!");
  } catch (error) {
    res.status(500).json(error);
  }
});
export { postComment, updateComment, getComment, deleteComment };

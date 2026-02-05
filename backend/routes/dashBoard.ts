// all post
// my post
// create post
//delete post
//like count increase
// comment count increase


import { Router } from "express";
import { allPost, commentPost, createPost, likePost, myPost } from "../controller/dashBoardController";
const router=Router();

router.get("/all-post",allPost)
router.get("/my-post",myPost)
router.get("/create-post",createPost)
router.get("/like-post",likePost)
router.get("/comment-post",commentPost)

export default router;
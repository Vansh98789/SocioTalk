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
router.post("/create-post",createPost)
router.post("/like-post/:postId", likePost);
router.post("/comment-post/:postId", commentPost);

export default router;
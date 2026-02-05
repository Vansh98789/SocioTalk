import type { Request, Response } from "express";
import pool from "../db/db";
import type { AuthRequest } from "../types/express";

//view all post logic 
export const allPost = async (req: Request, res: Response) => {
  try {
    const response = await pool.query('SELECT * FROM posts');

    if (response.rows.length === 0) {
      return res.status(404).json({ msg: "No posts yet" });
    }

    res.json({
      posts: response.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// view my post logic
export const myPost = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ msg: "Unauthorized" });

    const user_id = req.user.id; 
    const response = await pool.query(
      'SELECT * FROM posts WHERE user_id = $1',
      [user_id]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ msg: "No posts yet" });
    }

    res.json({ posts: response.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};
//create post logic
export const createPost = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ msg: "Unauthorized" });

    const { title, description, img_url } = req.body;

    if (!title) {
      return res.status(400).json({ msg: "Title is required" });
    }

    const response = await pool.query(
      `INSERT INTO posts 
      (user_id, title, description, img_url) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *`,
      [req.user.id, title, description || "", img_url || ""]
    );

    res.status(201).json({
      message: "Post created successfully",
      post: response.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

//like count logic
export const likePost = async (req: AuthRequest, res: Response) => {
  try {
    const { postId } = req.params;

    const result = await pool.query(
      `UPDATE posts 
       SET like_count = like_count + 1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $1
       RETURNING *`,
      [Number(postId)]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json({
      message: "Post liked",
      post: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

//comment count logic
export const commentPost = async (req: AuthRequest, res: Response) => {
  try {
    const { postId } = req.params;

    const result = await pool.query(
      `UPDATE posts 
       SET comment_count = comment_count + 1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $1
       RETURNING *`,
      [Number(postId)]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json({
      message: "Comment added",
      post: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

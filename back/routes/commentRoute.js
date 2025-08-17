import { Router } from 'express';
import { createComment, getComments, deleteComment } from '../controller/commentController.js';
import { validateComment } from '../utils/validator/commentValidator.js';

const router = Router();

// Route to create a new comment
router.post('/', validateComment, createComment);

// Route to get all comments
router.get('/', getComments);

// Route to delete a comment by ID
router.delete('/:id', deleteComment);

export default router;
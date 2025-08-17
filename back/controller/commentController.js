import Comment from '../models/commentModel.js';

// Create a new comment   
export async function createComment(req, res) {
    try {
        const { user, comment } = req.body;
        const newComment = await Comment.create({
            user,
            comment,
            createdAt: Date.now(),
        });
        res.status(201).json({
            status: 'success',
            data: {
                comment: newComment,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

// Get all comments
export async function getComments(req, res) {
    try {
        const comments = await Comment.find().populate('user', 'name profileImage');
        res.status(200).json({
            status: 'success',
            results: comments.length,
            data: {
                comments,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}

// Delete a comment
export async function deleteComment(req, res) {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({
                status: 'fail',
                message: 'Comment not found',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
}



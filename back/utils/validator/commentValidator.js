import { body, validationResult } from 'express-validator';

export const validateComment = [
  body('comment')
    .notEmpty()
    .withMessage('Comment is required')
    .isString()
    .withMessage('Comment must be a string')
    .isLength({ max: 500 })
    .withMessage('Comment must not exceed 500 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
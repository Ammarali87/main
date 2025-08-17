import { Router } from 'express';
import { protect, allowedTo } from '../controller/authController.js';
import { createCommentValidator } from '../utils/validator/CommentValidator.js';
import {
  createComment,
  getProductComments,
  updateComment,
  deleteComment,
  setProductIdAndUserIdToBody
} from '../controller/commentController.js';

// ✅ لازم يكون قبل استخدام router
const router = Router({ mergeParams: true }); 
// ⬅️ ده بيمكّننا نقرأ params من راوتر تاني (زي productId)


router.route('/')   //make one route to hold all stuff 
  .get(getProductComments)
  .post(
    protect,
    allowedTo('user'),
    setProductIdAndUserIdToBody,
    createCommentValidator,
    createComment,
  );


  // this nessary even i have made mergeParams 
  
router
.route('/:id')
.patch(protect, allowedTo('user', 'admin'), updateComment)
.delete(protect, allowedTo('user', 'admin'), deleteComment);

export default router;

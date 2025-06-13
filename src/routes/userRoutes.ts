import { Router } from 'express';
import userController from '../controllers/userController';
import asyncHandler from '../utils/asyncHandler';

const router = Router();

router.post('/', asyncHandler(userController.createUser));
router.get('/:id', asyncHandler(userController.getUser));
router.put('/:id', asyncHandler(userController.updateUser));
router.delete('/:id', asyncHandler(userController.deleteUser));

export default router;

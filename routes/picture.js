import { Router } from 'express'
import { upload } from '../config/multer.js'
import { create, findAll, remove } from '../controllers/pictureController.js'

const router = Router()

router.post('/', upload.single('file'), create)
router.get('/', findAll)
router.delete('/:id', remove)

export default router

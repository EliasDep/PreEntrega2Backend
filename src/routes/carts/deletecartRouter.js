import { Router } from 'express'
import { deleteCart } from '../../controllers/carts/deletecartController.js'


const router = Router()


router.get ('/:cid', deleteCart)

export default router

import { Router } from 'express'
import { updateCart } from '../../controllers/carts/updatecartController.js'


const router = Router()


router.put ('/carts/:cid', updateCart)

export default router

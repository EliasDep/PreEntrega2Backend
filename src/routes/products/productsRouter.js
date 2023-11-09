import { Router } from 'express'
import { getProducts, getProductById } from '../../controllers/products/productsController.js'


const router = Router()


router.get ('/products', getProducts)

router.get ('/products/:pid', getProductById)

export default router

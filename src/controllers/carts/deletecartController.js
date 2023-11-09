import CartManager from '../../classes/CartManager.js'

const cartManager = new CartManager()


export const deleteCart = async (req, res) => {

    try {
        
        const { cid, pid } = req.params
        const { productId, quantity } = req.body

        const cartproductDelete = await cartManager.getCartById (cid)

        if (!cartproductDelete) {
            return res.status(404).json ({ error: 'Producto del carrito no encontrado' })
        }

        await cartManager.deleteCart (pid)

        res.json ({ message: 'Carrito eliminado correctamente', deletedCart: cartproductDelete})

    } catch (error) {

        console.error ('Error al eliminar el producto:', error)
        res.status(500).json ({ message: 'Error interno del servidor'})
        
    }
}

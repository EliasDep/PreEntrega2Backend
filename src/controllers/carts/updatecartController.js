import CartManager from '../../classes/CartManager.js'

const cartManager = new CartManager()


export const updateCart = async (req, res) => {
    
    const { cid } = req.params
    const { products } = req.body
    
    try {
        
        const cartToUpdate = await cartManager.getCartById (cid)

        if (!cartToUpdate) {
            return res.status(404).json ({ error: 'Carrito no encontrado' })
        }

        const updatedCart = {
            products: products || cartToUpdate.products,
        }

        await cartManager.updateCart (cid, updatedCart)

        return res.status(200).json ({ message: 'Carrito actualizado correctamente' })
        
    } catch (error) {

        console.error ('Error al actualizar el carrito:', error)
        res.status(500).send('Error al actualizar el carrito')
    }
}

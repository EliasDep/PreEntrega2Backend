import ProductManager from '../../classes/ProductManager.js'
import productsModel from '../../models/products.model.js'

const productManager = new ProductManager()


const buildResponse = (data) => {

    return {
        status: 'success',
        payload: data.docs.map (product => product.toJSON()),
        totalPages: data.totalPages,
        prevPage: data.prevPage,
        nextPage: data.nextPage,
        page: data.page,
        hasPrevPage: data.hasPrevPage,
        hasNextPage: data.hasNextPage,
        prevLink: data.hasPrevPage ? `http://localholst:8080/api/products?limit=${data.limit}&page=${data.prevPage}&query=${data.query}&sort=${data.sort}` : '',
        nextLink: data.hasNextPage ? `http://localholst:8080/api/products?limit=${data.limit}&page=${data.nextPage}&query=${data.query}&sort=${data.sort}` : ''
    }
}


export const getProducts = async (req, res) => {

    const { page = 1, limit = 10 } = req.query
    const queryOptions = {}

    const opts = { page, limit }
    const criteria = { queryOptions }


    if (query) {

        queryOptions.name = { $regex: query, $options: 'i' }
    }

    if (sort) {

        options.sort = sort === 'asc' ? 'price' : '-price'
    }


    try {
        
        const result = await productsModel.paginate (criteria, opts)

        res.status(200).json (buildResponse (result))
    } catch (error) {

        return res.status(500).json ({ error: 'Error al obtener productos' })
    }
}

export const getProductById = async (req, res) => {
    
    const { pid } = req.params

    try {

        const product = await productsModel.findById (pid)

        if (product) {

            return res.json (product)
        } else {

            return res.status( 404).json ({ error: 'Producto no encontrado' })
        }
    } catch (error) {

        return res.status(500).json ({ error: 'Error' })
    }
}

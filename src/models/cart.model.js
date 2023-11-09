import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'


const cartItemSchema = new Schema ({

    product: { type: Object, ref: 'Product', required: true },
    quantity: { Type: Number, required: true }

}, { timestamps: true })

const cartSchema = new Schema ({

    id: { type: String, require: true, unique: true },
    products: [cartItemSchema]

}, { timestamps: true })


cartSchema.plugin (mongoosePaginate)

export default mongoose.model ('cart', cartSchema)

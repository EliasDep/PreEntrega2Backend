import mongoose from 'mongoose'

const URI = 'mongodb+srv://eliasdeppner:EXDdwPB4KJ0x3j0V@cluster0.4rqhmtx.mongodb.net/ecommerce'

export const init = async () => {

    try {

        await mongoose.connect (URI)
        console.log ('Database Connected ')
        
    } catch (error) {
        console.log ('Error to connect to database')
    }
}

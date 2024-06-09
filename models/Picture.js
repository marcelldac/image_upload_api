import mongoose from 'mongoose'

const PictureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
})

export default mongoose.model('Picture', PictureSchema)

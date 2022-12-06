import mongoose from 'mongoose'

const locationSchema = mongoose.Schema(
  {
    " Latitude": {
        type: String,
        default: "",
    },
    " Longitude": {
        type: String,
        default: "true",
    },
  }
)

const locationModel = mongoose.model('banks', locationSchema)
export default locationModel

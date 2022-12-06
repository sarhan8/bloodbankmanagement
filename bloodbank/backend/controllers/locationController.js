import asyncHandler from 'express-async-handler'
import locationModel from '../models/locationModel.js'

export const getLocation = asyncHandler(async (req, res) => {
  const location = await locationModel.find({}).limit(100)
  res.json(location)
})
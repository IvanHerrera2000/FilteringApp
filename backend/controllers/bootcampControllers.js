const Bootcamp = require("../models/Bootcamp");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    success: true,
    data: bootcamps,
  });
});

exports.createNewBootcamp = asyncHandler(async (req, res, next) => {
  res.send("Create new bootcamp route");
});

exports.updateBootcampById = asyncHandler(async (req, res, next) => {
  res.send("Update a bootcamp by id route");
});

exports.deleteBootcampById = asyncHandler(async (req, res, next) => {
  res.send("Delete a bootcamp by id route");
});

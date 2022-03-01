const Bootcamp = require("../models/Bootcamp");

exports.getAllBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    success: true,
    data: bootcamps,
  });
};

exports.createNewBootcamp = async (req, res, next) => {
  res.send("Create new bootcamp route");
};

exports.updateBootcampById = async (req, res, next) => {
  res.send("Update a bootcamp by id route");
};

exports.deleteBootcampById = async (req, res, next) => {
  res.send("Delete a bootcamp by id route");
};

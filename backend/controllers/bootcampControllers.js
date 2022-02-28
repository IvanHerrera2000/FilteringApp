exports.getAllBootcamps = asyncHandler(async (req, res, next) => {
  res.send("Get all bootcamps route");
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

//Aggregation Pipeline Stages
// The pipeline processes documents through multiple stages 
// to transform them into aggregated results:
// $match: Filters documents (like WHERE).
// $group: Groups documents by a specific key to perform
//  calculations like sum or average.
// $project: Reshapes the document by including, excluding,
//  or renaming fields.
// $sort: Orders the documents.
// $limit: Restricts the number of documents passed to the
//  next stage.
// $lookup: Performs a left outer join to another collection


db.orders.aggregate([
  {
    $match: {
      status: "completed"
    }
  },
  {
    $group: {
      _id: "$userId",
      total: { $sum: "$amount" }
    }
  }
]);
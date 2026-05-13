//Embedded Documents vs. References
// Embedded Documents: You nest related data directly
//  inside a single document (e.g., an address inside 
//     a user document). This allows for fast reads 
//     because all data is retrieved in one operation.
// References: You store the _id of another document
//  (normalization). This is similar to a foreign key 
//  and requires a second query or a $lookup to retrieve 
//  the related data.

//embedded 
{
  title; "Post",
  comments; [
    { text: "Nice" }
  ]
}

//reference
{
  title; "Post",
  userId; ObjectId("123")
}
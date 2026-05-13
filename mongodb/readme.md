1. What is MongoDB?
MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like BSON (Binary JSON) documents. Unlike relational databases that use fixed tables and rows, MongoDB allows each document to have a different structure (schema-flexible) and does not natively require joins, as related data is often stored together.

2. Collections, Documents, and _id
Collections: collections are groups of related documents.
Documents: Equivalent to rows, these are the basic units of data stored as key-value pairs.
_id: A unique identifier automatically generated for every document to serve as its primary key. It is usually a 12-byte Object Id.

3. Embedded Documents vs. References
Embedded Documents: You nest related data directly inside a single document (e.g., an address inside a user document). This allows for fast reads because all data is retrieved in one operation.
References: You store the _id of another document (normalization). This is similar to a foreign key and requires a second query or a $lookup to retrieve the related data.

4. When to Embed vs. Reference 
Embed when: Data is frequently read together, has a "one-to-few" relationship, or when data is mostly static.
Reference when: Data is shared across many documents, the nested data grows indefinitely (exceeding the 16MB document limit), or data is updated frequently in multiple places.

5. Basic Query Operators 
Comparison: $eq (equal), $gt (greater than), $lt (less than), $gte (>=), $lte (<=), $in (matches any value in array), $nin (none in array).
Logical: $and (all conditions match), $or (any condition matches).
Update: $set (replaces field value), 
$push (adds to array),
 $pull (removes from array).

6. Aggregation Pipeline Stages
The pipeline processes documents through multiple stages to transform them into aggregated results:
$match: Filters documents (like WHERE).
$group: Groups documents by a specific key to perform calculations like sum or average.
$project: Reshapes the document by including, excluding, or renaming fields.
$sort: Orders the documents.
$limit: Restricts the number of documents passed to the next stage.
$lookup: Performs a left outer join to another collection.

7. MongoDB Index Types
Indexes improve search speed by preventing full collection scans.
Single Field: Created on one specific field. It supports efficient lookups and sorting for that field in either ascending or descending order.
Compound Index: Holds references to multiple fields. The order of fields is critical; an index on {a: 1, b: 1} can support queries on a or a and b, but not b alone.
Text Index: Supports full-text search on string content. It tokenizes and stems words (e.g., searching "running" matches "run"). Limit: Only one text index is allowed per collection.
TTL (Time To Live): A special single-field index that automatically deletes documents after a certain amount of time. It is ideal for sessions, logs, or temporary cache.
2dsphere (Geospatial): Used for queries on an earth-like sphere. It supports GeoJSON objects (Points, Polygons) and allows for "nearness" or "intersection" queries
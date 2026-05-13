1. SQL vs. NoSQL Databases
SQL (Relational): Uses a structured, table-based format with a fixed schema. It is designed for vertical scaling (adding more power to a single server) and follows ACID properties for transaction reliability.
NoSQL (Non-Relational): Uses flexible data models like documents, key-value pairs, or graphs. It is built for horizontal scaling (adding more servers) and typically follows the BASE model (Basically Available, Soft state, Eventual consistency).

2. When to Choose Which?
Choose SQL when:
Data is highly structured and relationships are complex.
Strict data integrity and consistency are required (e.g., financial systems).
You need to perform complex queries and joins across many tables.
Choose NoSQL when:
Data is unstructured, semi-structured, or frequently changing.
You need massive horizontal scalability to handle high traffic.
Rapid development is a priority and a rigid schema would slow you down.

3. ACID Properties
ACID is a set of guarantees for reliable database transactions:
Atomicity: "All or nothing." If any part of a transaction fails, the entire transaction is rolled back.
Consistency: A transaction must move the database from one valid state to another, maintaining all rules and constraints.
Isolation: Concurrent transactions do not interfere with each other.
Durability: Once a transaction is committed, its changes are permanent, even in the event of a system crash.

4. Database Normalization
Normalization organizes data to minimize redundancy:
1NF (First Normal Form): Ensures atomic values; each column contains only one piece of data, and there are no repeating groups.
2NF (Second Normal Form): Meets 1NF and removes partial dependencies; every non-key column must depend on the entire primary key.
3NF (Third Normal Form): Meets 2NF and removes transitive dependencies; non-key columns should not depend on other non-key columns.

5. Database Indexes 
Indexes are data structures that speed up data retrieval but come with trade-offs:
Pros: Significantly faster read queries.
Cons: Slower write operations (since the index must update whenever data changes) and additional storage space.

6. Connection Pooling
A connection pool is a cache of reusable database connections. It is important because creating new connections for every request is resource-intensive and can lead to reaching database connection limits. 

7. N+1 QueriesDefinition:  
The N+1 query problem occurs when your code executes one query to fetch a list of items and then performs N additional queries to fetch related data for each item in that list.
How to Fix:
SQL: Use JOINs to fetch all data in a single request or use eager loading (e.g., include or select_related in ORMs) to batch the related data
.NoSQL (MongoDB): Use populate (in Mongoose) or the $lookup aggregation stage to join documents from different collections.
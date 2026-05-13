//bad
const query = `
SELECT * FROM users
WHERE email='${email}'
`;

//good
db.query(
  "SELECT * FROM users WHERE email=?",
  [email]
);
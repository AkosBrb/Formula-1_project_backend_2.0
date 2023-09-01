export const createUserQuery = `
INSERT INTO users (id, email, password, name, birth)
VALUES ($1, $2, $3, $4, $5)
RETURNING id, email, name, birth
`;

export const readUsersQuery = `
SELECT * FROM users
WHERE ($1::varchar IS NULL OR $1 = email)
`;

export const updateUser = `
    UPDATE users SET email = $1, name = $2, birth = $3 WHERE id = $4
`;
export const deleteUser = `
    DELETE FROM users WHERE id = $1
`;
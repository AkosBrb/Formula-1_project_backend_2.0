export const createUserQuery = `
    INSERT INTO users (id, email, password, name, birth) VALUES (
        $1, $2, $3, $4, $5
    )
`;
export const readUsersQuery = `
    SELECT * FROM users
`;
export const readUserQuery = `
    SELECT * FROM users WHERE email = $1
`;
export const updateUser = `
    UPDATE users SET email = $1, name = $2, birth = $3 WHERE id = $4
`;
export const deleteUser = `
    DELETE FROM users WHERE id = $1
`;
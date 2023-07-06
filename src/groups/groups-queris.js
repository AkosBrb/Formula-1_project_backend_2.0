export const readAllGroupQuery = `SELECT * FROM groups`;
export const readGroupQuery = `SELECT * FROM groups WHERE id = $1`;
export const searchGroupQuery = `SELECT name FROM groups WHERE name LIKE '%' || $1 || '%'`;
export const updateGroupNameQuery = `UPDATE groups SET name = $1`;
export const deleteGroupQuery = `DELETE FROM groups WHERE id = $1`;
export const addGroupQuery = `INSERT INTO groups (id, name, created_by) VALUES ($1, $2, $3)`;
export const readAllGroupQuery = `
SELECT g.* FROM groups AS g
WHERE ($1::varchar IS NULL OR id = $1)
AND ($2::varchar IS NULL OR name ILIKE $2)
`;

export const updateGroupNameQuery = `
UPDATE groups
SET name = $1
WHERE id = $2
`;

export const deleteGroupQuery = `
DELETE FROM groups
WHERE id = $1
`;

export const addGroupQuery = `
INSERT INTO groups 
(id, name, created_by) 
VALUES ($1, $2, $3)
`;

export const addMemeberQuery = `
INSERT INTO users_groups
(user_id, group_id)
VALUES ($1, $2)
`;

export const listAllMember = `
SELECT u.name FROM users AS u
INNER JOIN users_groups AS ug
ON u.id = ug.user_id
WHERE ug.group_id = $1
`;

export const deleteMember = `
DELETE FROM users_groups AS ug
WHERE group_id = $1 AND user_id = $2
`;
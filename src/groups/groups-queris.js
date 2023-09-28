export const readAllGroupQuery = `
SELECT g.* FROM groups AS g
WHERE ($1::varchar IS NULL OR name ILIKE $1)
`;

export const getGroupByIdQuery = `
SELECT * FROM groups
WHERE id = $1
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
(id, name, description, is_public, created_by) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *
`;

export const addMemberQuery = `
INSERT INTO users_groups
(user_id, group_id, user_points_in_group)
VALUES ($1, $2, 0)
RETURNING *
`;

export const listAllMember = `
SELECT u.name, ug.user_points_in_group FROM users AS u
JOIN users_groups AS ug ON u.id = ug.user_id
WHERE ug.group_id = $1
`;

export const deleteMember = `
DELETE FROM users_groups AS ug
WHERE group_id = $1 AND user_id = $2
`;
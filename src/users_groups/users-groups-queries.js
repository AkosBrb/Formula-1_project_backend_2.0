const addMemberQuery = 'INSERT INTO users_groups (user_id, group_id) VALUES ($1, $2)';
const countMembersQuery = 'SELECT COUNT (*) FROM users_groups WHERE group_id = $1';
const listGroupMembers = 'SELECT * FROM users AS u INNER JOIN users_groups AS ug ON u.id = ug.user_id AND ug.group_id = $1';
const leaveGroup = 'DELETE FROM users_groups WHERE user_id = $1';
const deleteGroup = 'DELETE groups, users_groups FROM groups AS g INNER JOIN users_groups AS ug WHERE g.id = ug.group_id AND g.id = $1';
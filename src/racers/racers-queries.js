export const readRacerQuery = `
SELECT num, name, team, points FROM racers
WHERE ($1::varchar IS NULL OR $1 = name)
ORDER BY points DESC
`;

export const addRacerQuery = `
INSERT INTO racers (num, name, team, points)
VALUES ($1, $2, $3, $4)
`;

export const updateRacerQuery = `
UPDATE racers 
SET num = $1, name = $2, team = $3, points = $4 WHERE id = $5
`;

export const deleteRacerQuery = `
DELETE FROM racers WHERE id = $1
`;
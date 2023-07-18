export const readAllResultQuery = `
SELECT * FROM results
WHERE ($1::varchar IS NULL OR $1 = race_weekend)
`;

export const addResultQuery = `
INSERT INTO results (race_weekend, first_place, second_place, third_place, fourth_place, fifth_place)
VALUES ($1, $2, $3, $4, $5, $6)
`;
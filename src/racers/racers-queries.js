export const readRacerQuery = "SELECT * FROM racers WHERE id = $1";
export const readAllRacerQuery = "SELECT * FROM racers";
export const addRacerQuery = `INSERT INTO racers (id, num, name, team, points)
                              VALUES ($1, $2, $3, $4, $5)`;
export const updateRacerQuery = `UPDATE racers 
                                 SET num = $1, name = $2, team = $3, points = $4 WHERE id = $5`;
export const deleteRacerQuery = 'DELETE FROM racers WHERE id = $1';
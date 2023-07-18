export const readAllTippQuery = `
  SELECT t.* FROM tipps AS t
  WHERE ($1::varchar IS NULL OR t.group_id = $1 OR t.user_id = $1)
`;

export const addTippsQuery = `
  INSERT INTO tipps
  (race_weekend, group_id, user_id, first_place,
    second_place, third_place, fourth_place, fifth_place)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
`

export const deleteTippsQuery = `
  DELETE FROM tipps
  WHERE $1 = race_weekend
`;
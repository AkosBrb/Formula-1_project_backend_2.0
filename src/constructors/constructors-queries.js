export const readAllConstructorQuery = `
    SELECT * FROM constructors    
`;
export const readConstructorQuery = `
    SELECT * FROM constructors WHERE id = $1
`;
export const addConstructorQuery = `
    INSERT INTO constructors (id, name, points) VALUES (
        $1, $2, $3
    )
`;
export const updateConstructorQuery = `
    UPDATE constructors SET name = $1, points = $2 WHERE id = $3
`;
export const deleteConstructorQuery = `
    DELETE FROM constructors WHERE id = $1
`;

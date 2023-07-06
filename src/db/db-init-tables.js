export const createRacersTable = `
    CREATE TABLE IF NOT EXISTS "racers" (
        "id" VARCHAR(30) PRIMARY KEY,
        "num" INTEGER,
        "name" VARCHAR (30),
        "team" VARCHAR (40),
        "points" INTEGER
    )
`;

export const createConstructorsTable = `
    CREATE TABLE IF NOT EXISTS "constructors" (
        "id" VARCHAR (30) PRIMARY KEY,
        "name" VARCHAR (40),
        "points" INTEGER
    )
`;

export const createUsersTable = `
    CREATE TABLE IF NOT EXISTS "users" (
        "id" VARCHAR (24) PRIMARY KEY,
        "password" VARCHAR (100),
        "email" VARCHAR (50),
        "name" VARCHAR (35),
        "birth" DATE
    )
`;

export const createGroupsTable = `
    CREATE TABLE IF NOT EXISTS "groups" (
        "id" VARCHAR (24) PRIMARY KEY,
        "name" TEXT,
        "created_by" VARCHAR (24) REFERENCES users(id)
    )
`;

export const createUsersGroupsTable = `
    CREATE TABLE IF NOT EXISTS "users_groups" (
        "user_id" VARCHAR (24) REFERENCES users(id),
        "group_id" VARCHAR (24) REFERENCES groups(id)
    )
`;
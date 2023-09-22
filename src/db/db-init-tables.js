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
        "password" VARCHAR (100) NOT NULL,
        "email" VARCHAR (50) UNIQUE NOT NULL,
        "name" VARCHAR (35) UNIQUE NOT NULL,
        "birth" DATE NOT NULL,
        "is_admin" BOOLEAN DEFAULT FALSE
    )
`;

export const createGroupsTable = `
    CREATE TABLE IF NOT EXISTS "groups" (
        "id" VARCHAR (24) PRIMARY KEY,
        "name" VARCHAR (100) NOT NULL,
        "description" TEXT,
        "is_public" BOOLEAN,
        "created_by" VARCHAR (24) REFERENCES users(id)
    )
`;

export const createUsersGroupsTable = `
    CREATE TABLE IF NOT EXISTS "users_groups" (
        "user_id" VARCHAR (24) REFERENCES users(id) ON DELETE CASCADE,
        "user_name" VARCHAR (35),
        "group_id" VARCHAR (24) REFERENCES groups(id) ON DELETE CASCADE,
        "user_points_in_group" INTEGER
    )
`;

export const createTippsTable = `
    CREATE TABLE IF NOT EXISTS "tipps" (
        "id" SERIAL PRIMARY KEY,
        "race_weekend" VARCHAR (100),
        "group_id" VARCHAR (24) REFERENCES groups(id),
        "user_id" VARCHAR (24) REFERENCES users(id),
        "first_place" VARCHAR (100),
        "second_place" VARCHAR (100),
        "third_place" VARCHAR (100),
        "fourth_place" VARCHAR (100),
        "fifth_place" VARCHAR (100)
    )
`

export const createResultsTable = `
    CREATE TABLE IF NOT EXISTS "results" (
        "id" SERIAL PRIMARY KEY,
        "race_weekend" VARCHAR (100),
        "first_place" VARCHAR (100),
        "second_place" VARCHAR (100),
        "third_place" VARCHAR (100),
        "fourth_place" VARCHAR (100),
        "fifth_place" VARCHAR (100)
    )
`
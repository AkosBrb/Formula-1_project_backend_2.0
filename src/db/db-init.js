import client from "./db";
import { createConstructorsTable, createGroupsTable, createRacersTable, createResultsTable, createTippsTable, createUsersGroupsTable, createUsersTable } from "./db-init-tables";

export default async function initDatabase() {
    await client.query(createRacersTable);
    await client.query(createConstructorsTable);
    await client.query(createUsersTable);
    await client.query(createGroupsTable);
    await client.query(createUsersGroupsTable);
    await client.query(createTippsTable);
    await client.query(createResultsTable);
}
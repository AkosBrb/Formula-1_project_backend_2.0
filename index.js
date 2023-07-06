import app from "./app";
import { PORT } from "./src/constats/constants";
import client from "./src/db/db";
import initDatabase from "./src/db/db-init";

app.listen(PORT, () => {
    console.log(`App is runing on ${PORT} PORT!`)
});

client.connect().catch((err) => {
    console.log(err)
    process.exit(1)
})

initDatabase().catch((err) => {
    console.log(err);
    process.exit(1)
})
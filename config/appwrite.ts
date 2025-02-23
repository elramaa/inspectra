import { Account, Client } from "appwrite";

const client = new Client().setProject("inspectra");

const account = new Account(client);

export { client, account };

import { Timestamp } from "firebase/firestore";

interface ITransaction {
    uid?: string,
    createdAt?: Timestamp,
    id: string,
    name?: string,
    amount: string,
}

interface IDoc {
    uid: string,
    name: string,
    amount: string,
    id?: string,
}
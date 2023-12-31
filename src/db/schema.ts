import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
 
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar("email", {length: 255}).unique().notNull(),
});

export type Insert = InferInsertModel<typeof users>;
export type Select = InferSelectModel<typeof users>;
import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["ADMIN", "USER"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phoneNumber: varchar("phone_number").notNull().unique(),
  password: text("password").notNull(),
  role: ROLE_ENUM("role").default("USER"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  // bikerId: integer("biker_id").notNull().unique(),
  // bloodGroup: text("blood_group").notNull(),
  // dateOfBirth: date("date_of_birth").notNull(),
  // address: text("address").notNull(),
});

// export const tags = pgTable("tags", {
//   id: uuid("id").primaryKey().defaultRandom().unique(),
//   tagId: integer("tag_id").notNull().unique(),
//   tagPin: integer("tag_pin").notNull(),
// });

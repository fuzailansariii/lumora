import { index, pgTable, text, timestamp, pgEnum, integer } from "drizzle-orm/pg-core";

// Enums
export const userTypeEnum = pgEnum("user_type", ["traveler", "couple", "photographer"]);
export const planEnum = pgEnum("plan", ["free", "plus", "wedding", "pro"]);

export const users = pgTable(
  "users",
  {
    clerkId: text("clerk_id").primaryKey(),
    email: text("email").notNull().unique(),
    name: text("name").notNull(),
    profilePhoto: text("profile_photo"),
    userType: userTypeEnum("user_type").notNull(),
    plan: planEnum("plan").notNull().default("free"),
    storageUsed: integer("storage_used").notNull().default(0),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", {
      withTimezone: true,
    })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (table) => [index("email_idx").on(table.email)]
);

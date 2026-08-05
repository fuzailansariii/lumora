import { boolean, date, index, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const trips = pgTable(
  "trips",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.clerkId, {
        onDelete: "cascade",
      }),
    title: text("title").notNull(),
    description: text("description"),
    coverPhoto: text("cover_photo"),
    destination: text("destination").notNull(),
    startDate: date("start_date").notNull(),
    endDate: date("end_date"),
    isCollaborative: boolean("is_collaborative").default(false).notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("trip_user_idx").on(table.userId),
    index("trip_title_idx").on(table.title),
    index("trip_destination_idx").on(table.destination),
  ]
);

import { pgTable, serial, varchar, integer, text } from 'drizzle-orm/pg-core';

export const carListing = pgTable('carListing', {
   id: serial('id').primaryKey(),
   title: varchar('title', { length: 255 }).notNull(),
   make: varchar('make', { length: 255 }).notNull(),
   model: varchar('model', { length: 255 }).notNull(),
   price: integer('price').notNull(),
   year: integer('year').notNull(),
   mileage: integer('mileage').notNull(),
   fuelType: varchar('fuelType', { length: 50 }).notNull(),
   transmission: varchar('transmission', { length: 50 }).notNull(),
   description: text('description') // optional field, so no .notNull()
});

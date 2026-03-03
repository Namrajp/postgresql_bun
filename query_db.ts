import { sql } from "bun";

try {
  const categories = await sql`
    SELECT * FROM categories;
  `;

  console.log(categories);
} catch (error: any) {
  console.log("Error: " + error.message);
}

import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  const user = await createUser("wobble", "thud");
  for (let i = 1; i <= 5; i++) {
    await createTask(`Task ${i}`, false, user.id);
  }
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    // Delete all records from the `Post` collection
    await prisma.post.deleteMany();
    console.log("All data wiped from the database!");
  } catch (error) {
    console.error("Error wiping database:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();

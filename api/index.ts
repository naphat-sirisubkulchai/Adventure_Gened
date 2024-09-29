import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();

const corsOptions = {
  origin: ['https://lit-envi.vercel.app/'],
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
// Route to increment choice1
app.post("/post/number1/choice1", async (req, res) => {
    try {
    const number1 = await prisma.number1.findFirst();
    
    if (!number1) {
      return res.status(404).json({ message: "Number1 document not found" });
    }

    const updatedNumber1 = await prisma.number1.update({
      where: { id: number1.id },
      data: { choice1: number1.choice1 + 1 },
    });

    return res.status(200).json(updatedNumber1);
  } catch (error) {
    console.error("Error updating choice1:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});

async function main() {
  console.log("Server ready at: http://localhost:5050");
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });

// Gracefully disconnect Prisma when the process exits
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Prisma disconnected');
  process.exit(0);
});

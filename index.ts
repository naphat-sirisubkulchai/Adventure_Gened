import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
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
app.get('/number/:number', async (req, res) => {
    try {
      const { number } = req.params;
  
      // Use Prisma to query the database
      const allpro = await prisma.number1.findUnique({
        where: {  Number: number },
      }); 
  
      if (!allpro) {
        return res.status(404).json({ error: 'number not found' });
      }
  
      res.json(allpro);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post("/post/create", async (req: Request, res: Response) => {
    const { Number } = req.body;
  
    try {
      // Create a new Number1 document with default choice values set to 0
      const newNumber1 = await prisma.number1.create({
        data: {
          Number,  // Use the number from the request body
        },
      });
  
      return res.status(201).json(newNumber1);  // Return the newly created document
    } catch (error) {
      console.error("Error creating Number1 document:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
app.post("/post/number", async (req: Request, res: Response) => {
    const { Number, choice } = req.body;
  
    try {
      // Fetch the Number1 document
      const number1 = await prisma.number1.findFirst();
  
      if (!number1) {
        return res.status(404).json({ message: "Number1 document not found" });
      }
  
      // Validate the choice and update the corresponding choice field
      if (choice === 1) {
        number1.choice1 += 1;
      } else if (choice === 2) {
        number1.choice2 += 1;
      } else if (choice === 3) {
        number1.choice3 += 1;
      } else {
        return res.status(400).json({ message: "Invalid choice" });
      }
  
      // Update the document with the new values
      const updatedNumber1 = await prisma.number1.update({
        where: { id: number1.id },
        data: {
          Number: Number,  // Update the Number field
          choice1: number1.choice1,
          choice2: number1.choice2,
          choice3: number1.choice3,
        },
      });
  
      return res.status(200).json(updatedNumber1);
    } catch (error) {
      console.error("Error updating choice:", error);
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

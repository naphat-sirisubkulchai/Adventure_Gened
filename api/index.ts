import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors';

const prisma = new PrismaClient()

const corsOptions = {
  origin: ['https://lit-envi.vercel.app/'],
  credentials: true
};

const app = express()
app.use(cors(corsOptions));
app.use(express.json())

app.post(`/fav/add/:user`, async ( res) => {
  try {
    // Fetch the Number1 document (assuming there's only one document to update)
    const number1 = await prisma.number1.findFirst();
    
    if (!number1) {
      return res.status(404).json({ message: 'Number1 document not found' });
    }

    // Increment choice1 by 1
    const updatedNumber1 = await prisma.number1.update({
      where: { id: number1.id },  // Update the specific document by its id
      data: {
        choice1: number1.choice1 + 1,
      },
    });

    res.status(200).json(updatedNumber1);
  } catch (error) {
    console.error('Error updating choice1:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
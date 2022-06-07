import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);


const PORT = process.env.PORT || 5000


async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL), {
      useNewUrlParser: true,
        //useUnifiedTopology: true,
           }
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

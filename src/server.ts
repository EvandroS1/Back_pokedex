import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routers from './app/routes/routes';

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(routers);

  AppDataSource.initialize().then(() => {
  
    console.log("Database is ok📈");
    app.listen(5000, () => {
      console.log("🔥🔥Server is running🔥🔥");
    })
  })
// LIBRARIES
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

// SETUP EXPRESS
const app = express();

// EXPRESS CONFIGS
app.use(express.json({
  limit: '1mb',
}));
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

// REGISTER ROUTES
import { Badge } from './Routes';

app.use('/badge', Badge);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
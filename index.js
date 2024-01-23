import express from 'express';
import logger from './logger.js';

const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  logger.info(`req received ${process.pid} now:${now.toLocaleTimeString()}`);
  setTimeout(() => {
    const after = new Date();
    logger.info(`res send ${process.pid} after:${after.toLocaleTimeString()} diff:${after.getTime() - now.getTime()}`);
    res.send('Hello, World!' + process.pid);
  }, 1000 * 60);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
  console.log('Worker PID:', process.pid);
});

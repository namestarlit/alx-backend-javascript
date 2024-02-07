// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

export default app;

// For testing purposes, retrieve the database filename at execution
const databaseFilename = process.argv[2];

if (!databaseFilename) {
  console.error('Error: Database filename not provided.');
  process.exit(1);
}

// Listen on port 1245
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

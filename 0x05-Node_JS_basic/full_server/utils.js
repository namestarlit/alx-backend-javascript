// full_server/utils.js
import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    // Parse and process the database file data
    // Return the processed data as needed
    return processData(data);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

function processData(data) {
  const lines = data.split('\n');
  const result = {};

  // Skip the header line
  for (let i = 1; i < lines.length; i++) {
    const [firstName, lastName, age, field] = lines[i].split(',');

    if (!result[field]) {
      result[field] = [];
    }

    result[field].push(firstName.trim());
  }

  return result;
}

export { readDatabase };

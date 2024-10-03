const fs = require('fs');
const path = require('path');

async function listFiles() {
  try {
    const files = await fs.promises.readdir(__dirname);
    console.log('Files in current directory:');
    files.forEach(file => {
      console.log(file);
    });
  } catch (err) {
    console.error('Error reading directory:', err);
  }

  try {
    console.log('\nEnvironment Variables:');
    for (const [key, value] of Object.entries(process.env)) {
      console.log(`${key}: ${value}`);
    }
  } catch (err) {
    console.error('Error reading environment variables:', err);
  }

  try {
    const files = await fs.promises.readdir("/github/workspace");
    console.log('\nFiles in /github/workspace:');
    files.forEach(file => {
      console.log(file);
    });
  } catch (err) {
    console.error('Error reading github/workspace:', err);
  }
}

listFiles();
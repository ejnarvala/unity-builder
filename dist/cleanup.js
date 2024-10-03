const fs = require('fs');
const path = require('path');

async function listFilesRecursively(dir) {
  try {
    const files = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        console.log(`Directory: ${fullPath}`);
        await listFilesRecursively(fullPath); // Recursively list files in the directory
      } else {
        console.log(`File: ${fullPath}`);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }
}

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
    const files = await fs.promises.readdir("/runner/_work/odyssey/odyssey");
    console.log('Files in /runner/_work/odyssey/odyssey:');
    files.forEach(file => {
      console.log(file);
    });
  } catch (err) {
    console.error('Error reading workspace files:', err);
  }


  try {
    console.log('\nList files in GITHUB_WORKSPACE:');
    const workspace = process.env.GITHUB_WORKSPACE;
    await listFilesRecursively(workspace);
  } catch (err) {
    console.error('Error reading GITHUB_WORKSPACE recursively:', err);
  }

}



listFiles();
const { Input } = require('./model');

async function runCleanup() {
  console.log("Hello from cleanup.js");
  let floatingLicenseId = Input.getInput('FLOATING_LICENSE');
  console.log(`Floating License ID: ${floatingLicenseId}`);
}

runCleanup();
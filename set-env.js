const { writeFile } = require("fs");

const targetPath = "./src/environments/extern-environment.ts";

const envConfigFile = `export const externEnvironment = {    
    mode: '${process.env.MODE || "local"}',
 };
 `;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Extern environment file generated correctly at ${targetPath}\n`,
      envConfigFile
    );
  }
});

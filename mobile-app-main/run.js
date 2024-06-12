const { spawn } = require("child_process");

function runCommand(command, args) {
  const spawnedProcess = spawn(command, args, { stdio: "inherit" });

  spawnedProcess.on("close", (code) => {
    console.log(`Proces failed with code: ${code}`);
  });

  return spawnedProcess;
}

// Start Expo
runCommand("npx", ["expo", "start"]);

// Start Gulp Watch
runCommand("gulp", ["watch"]);

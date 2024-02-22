// deno-lint-ignore-file
import { startFramework } from "../commands/start.ts"
import { stopFramework } from "../commands/stop.ts"
import { displayHelp } from "../commands/help.ts"
import { displayStatus } from "../commands/status.ts"

// Function to handle different commands
export function handleCommand(args: any) {
    if (args._.includes("start")) {
        startFramework()
    } else if (args._.includes("stop")) {
        stopFramework()
    } else if (args["help"] || args["_"].includes("--help")) {
        displayHelp()
    } else if (args._.includes("status")) {
        displayStatus()
    } else {
        console.log("Invalid command or missing arguments. Use --help for usage information.")
    }
}
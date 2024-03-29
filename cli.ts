// deno-lint-ignore-file
import { parseArgs } from "https://deno.land/std@0.216.0/cli/parse_args.ts"
import { handleCommand } from "./src/handler/commandHandler.ts"

// Main function
async function main() {
    console.log("Welcome to Hi Level Framework!")
    // Parse command line arguments
    const args = parseArgs(Deno.args)

    // Handle the command
    handleCommand(args)

    // Read from stdin for user input
    for await (const line of Deno.iter(Deno.stdin)) {
        // Convert Uint8Array to string and trim whitespace
        const input = new TextDecoder().decode(line).trim()
        // Pass the user input as arguments
        handleCommand({ _: [input] })
    }
}

main()
class Command {
    static ARITHMETIC = new Command('ARITHMETIC')
    static PUSH = new Command('PUSH')
    static POP = new Command('POP')
    static LABEL = new Command('V')
    static GOTO = new Command('GOTO')
    static IF = new Command('IF')
    static FUNCTION = new Command('FUNCTION')
    static RETURN = new Command('RETURN')
    static CALL = new Command('CALL')

    constructor(name) {
        this.name = name
    }

    toString() {
        return `Command.${this.name}`
    }
}


/**
 *  🌟 handles the parsing of a single .vm file
 *  🌟 reads a vm command, parses the command into its lexical components, and
 *  provides convenient access to these components
 *  🌟 ignores all whitespace and comments
 */
class Parser {
    /** opens the file and parses it, storing a copy of the information */
    constructor() {
        this.currentCommand = null

    }

    /** returns true if there are more commands in the input */
    hasMoreCommands() {

    }

    /** fetches the next command from the stored list of commands and makes
     *  it the current command. initially there is no current command.
     *  should only be called if hasMoreCommands() is true
     */
    advance() {

    }

    /** returns the first argument of the current command.
     *  in the case of ARITHMETIC, the command itself is returned
     */
    arg1() {

    }

    /** returns the second argument of the current command.
     *  only valid if the current command is PUSH, POP, FUNCTION, or CALL
     */
    arg2() {

    }
}
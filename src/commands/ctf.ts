import { Message } from 'discord.js';
import Command from 'src/libs/command';

class CtfCMD extends Command {
    constructor() {
        super({
            name: 'ctf',
            aliases: [''],
            description: 'Command to submit a ctf flag.'
        });
    }

    public execute(message: Message, args: string[]) {
        // console.debug({ message, args });
        // TODO: Check if user is registered for the CTF.
        // TODO: Check if user has already submitted flag 3 times.
        // TODO: Send the flag to organizer channel.
        // TODO: Send the information.
    }
}

export default CtfCMD;

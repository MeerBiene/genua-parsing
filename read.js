const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const eol = require('eol');

const out =new stream();
const instream = fs.createReadStream('./github/glh/log.1');
const rl = readline.createInterface(instream, out);

let output = [];
let lines = 0;

rl.on('line', (line) => {
    lines++;
    output.push(line);
    if (lines >= 100) return rl.close();
});

rl.on('close', () => {
    let sani = [];
    //console.log(output);
    output.forEach(string => {
        sani.push(
        string
            // maschine commands
            //.replace(new RegExp('\\x00', 'g'), '')
            .replace(new RegExp('\\x01', 'g'), '[SOH]') // start of header
            .replace(new RegExp('\\x02', 'g'), '[SOT]') // start of text
            .replace(new RegExp('\\x03', 'g'), '[EOT]') // end of text
            .replace(new RegExp('\\x04', 'g'), '[EOTR]') // end oftransaction
            .replace(new RegExp('\\x05', 'g'), '[ENQ]')
            .replace(new RegExp('\\x06', 'g'), '[ACK]')
            .replace(new RegExp('\\x07', 'g'), '[BEL]')
            .replace(new RegExp('\\x08', 'g'), '[BACKSPACE]')
            .replace(new RegExp('\\x09', 'g'), '[HORIZONTAL TAB]')
            .replace(new RegExp('\\x0A', 'g'), '[NEWLINE]')
            .replace(new RegExp('\\x0B', 'g'), '[VERTICAL TAB]')
            .replace(new RegExp('\\x0C', 'g'), '[NEW PAGE]')
            .replace(new RegExp('\\x0D', 'g'), '[CARRIAGE RETURN]')
            .replace(new RegExp('\\x0E', 'g'), '[SHIFT OUT]')
            .replace(new RegExp('\\x0F', 'g'), '[SHIFT IN]')
            .replace(new RegExp('\\x10', 'g'), '[DATA LINK ESCAPE]')
            .replace(new RegExp('\\x11', 'g'), '[DC1]') // device control
            .replace(new RegExp('\\x12', 'g'), '[DC2]') // device control
            .replace(new RegExp('\\x13', 'g'), '[DC3]') // device control
            .replace(new RegExp('\\x14', 'g'), '[DC4]') // device control
            .replace(new RegExp('\\x15', 'g'), '[NAK]') // (negative acknowledge) 
            .replace(new RegExp('\\x16', 'g'), '[SYN]') // (synchronous idle)
            .replace(new RegExp('\\x17', 'g'), '[ETB]') // end oftransmission block
            .replace(new RegExp('\\x18', 'g'), '[CAN]') // cancel
            .replace(new RegExp('\\x19', 'g'), '[EOM]') // end of medium
            .replace(new RegExp('\\x1A', 'g'), '[SUBSTITUTE]')
            .replace(new RegExp('\\x1B', 'g'), '[ESC]')
            .replace(new RegExp('\\x1C', 'g'), '[FS]') // file seperator
            .replace(new RegExp('\\x1D', 'g'), '[GS]') // group seperator
            .replace(new RegExp('\\x1E', 'g'), '|') // [RS](record seperator)
            .replace(new RegExp('\\x1F', 'g'), '|') // [US](unit seperator)

            //basic symbols
            // .replace(new RegExp('\\x32', 'g'), '[SPACE]')
            // .replace(new RegExp('\\x33', 'g'), '!')
            // .replace(new RegExp('\\x34', 'g'), '"')
            // .replace(new RegExp('\\x35', 'g'), '#')
            // .replace(new RegExp('\\x36', 'g'), '§')
            // .replace(new RegExp('\\x37', 'g'), '%')
            // .replace(new RegExp('\\x38', 'g'), '&')
            // .replace(new RegExp('\\x39', 'g'), '\'')
            // .replace(new RegExp('\\x40', 'g'), '(')
            // .replace(new RegExp('\\x41', 'g'), ')')
            // .replace(new RegExp('\\x42', 'g'), '*')
            // .replace(new RegExp('\\x43', 'g'), '+')
            // .replace(new RegExp('\\x44', 'g'), ',')
            // .replace(new RegExp('\\x45', 'g'), '-')
            // .replace(new RegExp('\\x46', 'g'), '.')
            // .replace(new RegExp('\\x47', 'g'), '/')
            
            // // numbers
            // .replace(new RegExp('\\x48', 'g'), '0')
            // .replace(new RegExp('\\x49', 'g'), '1')
            // .replace(new RegExp('\\x50', 'g'), '2')
            // .replace(new RegExp('\\x51', 'g'), '3')
            // .replace(new RegExp('\\x52', 'g'), '4')
            // .replace(new RegExp('\\x53', 'g'), '5')
            // .replace(new RegExp('\\x54', 'g'), '6')
            // .replace(new RegExp('\\x55', 'g'), '7')
            // .replace(new RegExp('\\x56', 'g'), '8')
            // .replace(new RegExp('\\x57', 'g'), '9')

            // // more symbols
            // .replace(new RegExp('\\x58', 'g'), ':')
            // .replace(new RegExp('\\x59', 'g'), ';')
            // .replace(new RegExp('\\x60', 'g'), '<')
            // .replace(new RegExp('\\x61', 'g'), '=')
            // .replace(new RegExp('\\x62', 'g'), '>')
            // .replace(new RegExp('\\x63', 'g'), '?')
            // .replace(new RegExp('\\x64', 'g'), '@')

            // // Alphabet uppercase
            // .replace(new RegExp('\\x65', 'g'), 'A')
            // .replace(new RegExp('\\x66', 'g'), 'B')
            // .replace(new RegExp('\\x67', 'g'), 'C')
            // .replace(new RegExp('\\x68', 'g'), 'D')
            // .replace(new RegExp('\\x69', 'g'), 'E')
            // .replace(new RegExp('\\x70', 'g'), 'F')
            // .replace(new RegExp('\\x71', 'g'), 'G')
            // .replace(new RegExp('\\x72', 'g'), 'H')
            // .replace(new RegExp('\\x73', 'g'), 'I')
            // .replace(new RegExp('\\x74', 'g'), 'J')
            // .replace(new RegExp('\\x75', 'g'), 'K')
            // .replace(new RegExp('\\x76', 'g'), 'L')
            // .replace(new RegExp('\\x77', 'g'), 'M')
            // .replace(new RegExp('\\x78', 'g'), 'N')
            // .replace(new RegExp('\\x79', 'g'), 'O')
            // .replace(new RegExp('\\x80', 'g'), 'P')
            // .replace(new RegExp('\\x81', 'g'), 'Q')
            // .replace(new RegExp('\\x82', 'g'), 'R')
            // .replace(new RegExp('\\x83', 'g'), 'S')
            // .replace(new RegExp('\\x84', 'g'), 'T')
            // .replace(new RegExp('\\x85', 'g'), 'U')
            // .replace(new RegExp('\\x86', 'g'), 'V')
            // .replace(new RegExp('\\x87', 'g'), 'W')
            // .replace(new RegExp('\\x88', 'g'), 'X')
            // .replace(new RegExp('\\x89', 'g'), 'Y')
            // .replace(new RegExp('\\x90', 'g'), 'Z')

            // // more symbols
            // .replace(new RegExp('\\x91', 'g'), '[')
            // .replace(new RegExp('\\x93', 'g'), ']')
            // .replace(new RegExp('\\x94', 'g'), '^')
            // .replace(new RegExp('\\x95', 'g'), '_')
            // .replace(new RegExp('\\x96', 'g'), '`')
            
            // // alphabet lowercase
            // .replace(new RegExp('\\x97', 'g'), 'a')
            // .replace(new RegExp('\\x98', 'g'), 'b')
            // .replace(new RegExp('\\x99', 'g'), 'c')
            // .replace(new RegExp('\\x100', 'g'), 'd')
            // .replace(new RegExp('\\x101', 'g'), 'e')
            // .replace(new RegExp('\\x102', 'g'), 'f')
            // .replace(new RegExp('\\x103', 'g'), 'g')
            // .replace(new RegExp('\\x104', 'g'), 'h')
            // .replace(new RegExp('\\x105', 'g'), 'i')
            // .replace(new RegExp('\\x106', 'g'), 'j')
            // .replace(new RegExp('\\x107', 'g'), 'k')
            // .replace(new RegExp('\\x108', 'g'), 'l')
            // .replace(new RegExp('\\x109', 'g'), 'm')
            // .replace(new RegExp('\\x110', 'g'), 'n')
            // .replace(new RegExp('\\x111', 'g'), 'o')
            // .replace(new RegExp('\\x112', 'g'), 'p')
            // .replace(new RegExp('\\x113', 'g'), 'q')
            // .replace(new RegExp('\\x114', 'g'), 'r')
            // .replace(new RegExp('\\x115', 'g'), 's')
            // .replace(new RegExp('\\x116', 'g'), 't')
            // .replace(new RegExp('\\x117', 'g'), 'u')
            // .replace(new RegExp('\\x118', 'g'), 'v')
            // .replace(new RegExp('\\x119', 'g'), 'w')
            // .replace(new RegExp('\\x120', 'g'), 'x')
            // .replace(new RegExp('\\x121', 'g'), 'y')
            // .replace(new RegExp('\\x122', 'g'), 'z')
            
            // // symbols again
            // .replace(new RegExp('\\x123', 'g'), '{')
            // .replace(new RegExp('\\x124', 'g'), '|')
            // .replace(new RegExp('\\x125', 'g'), '}')
            // .replace(new RegExp('\\x126', 'g'), '~')
            
            // // DELETE (bad)
            // .replace(new RegExp('\\x127', 'g'), '[DEL]')
            
            // .replace(new RegExp('\\x92', 'g'), '\\')
            )
        });
        

        const Sani =sani.join('-');

        const sani_new = Sani.split('[NEW PAGE]');

        for (let i = 0; i < 11; i++) {
            console.log("======PAGE START=========")
            console.log(sani_new[i])
            console.log("======PAGE END =======")
        }

        console.log(output.join(''))

        




        //console.log(output)
    });
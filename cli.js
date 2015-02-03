var als2xml = require('./');
var meow = require('meow');

var cli = meow({
  help: [
    'Usage',
    '  als2xml <file>',
    '',
    'Example',
    '  als2xml my_song.als > my_song.xml'
  ].join('\n')
});

if (!cli.input[0]) {
  console.error('Please supply a file');
  process.exit(1);
}

als2xml(cli.input[0]);

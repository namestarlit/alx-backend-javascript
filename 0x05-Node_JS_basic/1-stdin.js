process.stdout.write('Welcome to Holberton, what is your name?\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

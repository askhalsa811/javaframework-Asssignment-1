const fs = require('fs');

fs.readFile('paragraph.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
});

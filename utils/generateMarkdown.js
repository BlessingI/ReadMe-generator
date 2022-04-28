const fs = require('fs');

// writing files
const writeReadMe = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/Readme.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

function generateMarkdown(data) {
  return `
  <h1 align="center">${data.projectTitle} 👋</h1>

## Description
  🔍 ${data.description}

## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributors)
- [Tests](#test)
- [Questions](#questions)

## Installation
  💾 ${data.installation}

## Usage
  💻 ${data.usage}

## License
  ${data.license}

## Contributors
  👪 ${data.contributors}

## Tests
  ${data.test}

## Questions
  ✋ Find me on github using ${data.username}. My email address is ${data.email}

`;
}


module.exports = {
  writeReadMe,
  generateMarkdown
}
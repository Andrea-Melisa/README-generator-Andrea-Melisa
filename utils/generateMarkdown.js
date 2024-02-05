// Object with badges URLs from shields.io
const licenseBadges = {
  "MIT License": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  "Apache License 2.0": "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  "GNU General Public License v3.0": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
  "ISC License": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  "None": "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ${licenseBadges[data.license]}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, run the following command:
  ${data.test}

  ## Questions
  If you have any questions about this repo you can contact me directly at [${data.email}](mailto:${data.email}). Here you can find more of my work at [${data.username}](https://www.github.com/${data.username}).
`;
}

module.exports = generateMarkdown; // makes it possible to export the function generateMarkdown to another file

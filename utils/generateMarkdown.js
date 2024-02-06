// Object with badges URLs from shields.io
const licenseBadges = {
  "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  "Apache": "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  "GPLv3": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
  "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  "None": "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
}

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.name}

  ${licenseBadges[answers.license]}

  ## Description
  ${answers.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License 
  This project is licensed under the ${answers.license} license.

  ## Contributing
  ${answers.contribute}

  ## Tests
  ${answers.test}

  ## Questions
  If you have any questions about this repo you can contact me directly at [${answers.email}](mailto:${answers.email}). Here you can find more of my work at [${answers.username}](https://www.github.com/${answers.username}).
`;
}

module.exports = generateMarkdown; // makes it possible to export the function generateMarkdown to another file

//Logic to render the license badge/shield and link to license page
function renderLicenseBadge(license) {

  if (license == 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}`;
  }

  if (license == 'GPL 3.0') {
      return `[![License: GPL 3.0](https://img.shields.io/badge/license-GPL-blue.svg)]${renderLicenseLink(license)}`;
  }

  if (license == 'Apache 2.0') {
      return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202-blue)]${renderLicenseLink(license)}`;
  }
  if (license == 'BSD') {
      return `[![License: BSD](https://img.shields.io/badge/license-BSD-green)]${renderLicenseLink(license)}`;
  } else {
      return "";
  }

}

//Method used in above function to return license page based on user input
function renderLicenseLink(license) {

  if (license == 'MIT') {
      return '(https://opensource.org/licenses/MIT)';
  }
  if (license == 'GPL 3.0') {
      return '(https://opensource.org/licenses/GPL-3.0)';
  }
  if (license == 'Apache 2.0') {
      return '(http://www.apache.org/licenses/)';
  }
  if (license == 'BSD') {
      return '(https://pypi.org/project/license/)';
  } else {
      return "";
  }


}

//Function that takes in user input/answers to generate README
function generateMarkdown(data) {
  return `## ${data.projectName}
---------------------------------------------------------------------
${renderLicenseBadge(data.license)}

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
Please run the following command to install the neccessary dependencies: ${data.dependencies}

## Usage
You should know...${data.repo}

## License
The project is licensed under ${data.license}


## Contributing
${data.contribute}

## Tests
Please run the following command to run tests: ${data.tests}

## Questions
If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can also find more of my awesome work at ${data.gitHubUserName}`;

}

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license == 'MIT')
 {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}`;
  
  //return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
 }

 if (license == 'GPL 3.0')
 {
  return `[![License: GPL 3.0](https://img.shields.io/badge/license-GPL-blue.svg)]${renderLicenseLink(license)}`;
  // return `![License: GPL 3.0](https://opensource.org/licenses/GPL-3.0)(https://img.shields.io/badge/license-GPL-blue.svg)`;
 
 }

if(license == 'Apache 2.0')
 {
  return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202-blue)]${renderLicenseLink(license)}`;
  // return `![License: Apache 2.0](http://www.apache.org/licenses/)(https://img.shields.io/badge/license-Apache%202-blue)`;
 
 }
 if(license == 'BSD')
 {
  return `[![License: BSD](https://img.shields.io/badge/license-BSD-green)]${renderLicenseLink(license)}`;
//   return `![License: BSD](https://pypi.org/project/license/)(https://img.shields.io/badge/license-BSD-green)`;
 
 }

 else
 {
    return "";
 }

}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if(license == 'MIT')
  {
   return '(https://opensource.org/licenses/MIT)';
  }
  if (license == 'GPL 3.0')
  {
    return '(https://opensource.org/licenses/GPL-3.0)';
  }
  if(license == 'Apache 2.0')
  {
    return '(http://www.apache.org/licenses/)';
  }
  if (license == 'BSD')
  {
    return '(https://pypi.org/project/license/)';
  }
  else
  {
     return "";
  }


}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
//This needs to match the name string value of the object
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
  The following are the contributers to this project: ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can also find more of my awesome work at ${data.gitHubUserName}`;

}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![license](https://img.shields.io/badge/license-${license}-green.svg)`;
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `* [License](#license)`;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    
    This project is licensed under the ${license} license.`;
  };  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  
  To install dependencies run
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  This project is accepting contributions: ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  For any additional information \n
  View my Github profile at [${data.username}](https:github.com/${data.username}/) \n
  Email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    let badge = '![license](https://img.shields.io/badge/license-' + license +'-green.svg)';
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseLink = '(https://opensource.org/licenses/' + license + ')';
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `This project is covered under the ${license} license`
  };
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  For any additional information 
  View my Github profile at [@${data.username}](https:github.com/${data.username}/)
  Email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;

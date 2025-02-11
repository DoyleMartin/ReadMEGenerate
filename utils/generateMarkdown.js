// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`;
  }
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None')
    return '';
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL 3.0') {
    return '(https://opensource.org/licenses/GPL-3.0)';
  }
  if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None')
    return '';
  if (license === 'MIT') {
    return 'This project is licensed under the MIT license.';
  }
  if (license === 'Apache 2.0') {
    return 'This project is licensed under the Apache 2.0 license.';
  }
  if (license === 'GPL 3.0') {
    return 'This project is licensed under the GPL 3.0 license.';
  }
  if (license === 'BSD 3') {
    return 'This project is licensed under the BSD 3 license.';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

## Table of Contents

## Installation

## Usage

## License

## Contributing

## Tests

## Questions
`;
}

export default generateMarkdown;

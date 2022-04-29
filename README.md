# README.md Generator Using Node.js

## Description
  A node.js application that uses user input from inquirer to populate a README.md file for user repository. The README.md file is created in the dist directory and can be found [here](./dist/Readme.md)

[Click on link to see a video of how the application works](https://drive.google.com/file/d/1m8m8yPuwQrkHRSKHcB_swKrkicSa-Iln/view)


## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```


## Table of Content
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Image](#image)
- [Contributing](#contributors)
- [Repo](#repo)

## Installation
    npm init
    npm install inquirer

## Usage
  Run the following command at the root of your project and answer the prompted questions:
  
    node index.js

## Image
![ReameGenImage](./assets/images/ReadmeGen.png)


## Contributors
  Blessing Igbadumhe

## Repo
https://github.com/BlessingI/ReadMe-generator.git


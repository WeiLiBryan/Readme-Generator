# Readme Generator

----------------------

## Table of Contents

[Description](#Description)    |   [Prerequisites](#Prerequisites)   |   [Technologies](#Technologies)

[Video Walkthrough](#Video-Walktrough)  |   [Code Snippet](#Code-Snippet)   |   [Authors](#Authors)

[License](#License) |   [Acknowledgements](#Acknowledgements)

## Description

Application will generate a markdown file based on prompts given to user

## Prerequisites

None

## Technologies Used

- Node
- Javascript

## Video Walktrough

[Youtube Link](https://youtu.be/FE3puOtUL-s)

## Code Snippet

```Javascript
const ask = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'project',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'license',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'info',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[8],
        },

    ]);
};
};
```

## Authors

1. **William W. Bryan**

- [Github](https://github.com/WeiLiBryan)
- [LinkedIn](https://www.linkedin.com/in/william-bryan-72730019a/)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Acknowledgements

- [Stack Overflow](https://stackoverflow.com)

### [Back to Table of Contents](#table-of-contents)
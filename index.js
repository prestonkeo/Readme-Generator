const inquirer = require("inquirer");

const questions = [ {
    type: "input",
    name: "username",
    message: "Enter your Github username..."
}, {
    type: "input",
    name: "email",
    message: "Enter your email...",
}, {
    type: "input",
    name: "url",
    message: "Enter the URL of the project...",
}, {
    type: "input",
    name: "project",
    message: "Enter the title of the project...",
}, {
    type: "input",
    name: "description", 
    message: "Enter a description for the project...",
}, {
    type: "input",
    name: "usage",
    message: "Enter what is the use for this project...",
}, {
    type: "input",
    name: "contributing",
    message: "Enter the process to contribute in this project..."
}, {
    type: "input",
    name: "install",
    message: "Enter the phrase to install dependencies..." 
}, {
    type: "list",
    name: "license",
    message: "Enter the choice of license being used for the project...",
    choices: ["MIT/X11", "Apache ", "BSD",]
},
];

inquirer.prompt(questions).then(function (data) {
    const content = JSON.stringify(data, null, 4);
  
    fs.writeFile("README.md", generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  });


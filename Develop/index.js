// DONE - GIVEN a command-line application that accepts user input
// DONE - WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// DONE - WHEN I click on an email address in the HTML
// DONE - THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// DONE - WHEN I start the application
// DONE - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// DONE - WHEN I enter the team manager’s name, employee ID, email address, and office number
// DONE - THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
//should add data validation if i have time

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
//var employeeArray = [];


//FUNCTION TO PROMPT USER FOR INFORMATION
const promptUserForInformation = () => {
    return inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'Please enter your Managers first name',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your managers first and last name!");
                    return false;
                }
            }
        },
        {
            name: "managerEmpID",
            type: 'input',
            message: 'Please enter your managers Employee ID',
            validate: managerEmpIDInput => {
                if (managerEmpIDInput) {
                return true;
            } else {
                console.log("Please enter your managers EmpID!");
                return false;
            }
            }
        },
        {
            name: "managerEmail",
            type: 'input',            
            message: 'Please enter your managers email address',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter your managers email address!");
                return false;
            }
            }
        },
        {
            name: "managerOfficeNumber",
            type: 'input',            
            message: 'Please enter your managers Office Number',
            validate: managerOfficeNumberInput => {
                if (managerOfficeNumberInput) {
                return true;
            } else {
                console.log("Please enter your managers Office Number!");
                return false;
                }
            }
        }
    ])
    .then((answers) => {
        cycleThroughChoices(answers);
    })
}

function cycleThroughChoices () {
    return inquirer.prompt([
        {
            name:"whatToDoNext",
            type:"list",
            message:"Would you like to add an Employee, an Intern, or Finish your team?",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ]).then((answers) => {
        if (answers === 'Intern') {
            internPrompt()
        } else if (answers === 'Engineer') {
            engineerPrompt()
        } else {
            //employeeArray.push(data);
        }
    })
}

function engineerPrompt() {
    //.then((data) => {
        //ENGINEER QUESTIONS
            return inquirer.prompt([
                {
                    name:"engineerName",
                    type: 'input',
                    message: "What is your Engineer's first name?",
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's name!");
                            return false;
                        }
                    }
                },
                {
                    name:"engineerID",
                    type: 'input',
                    message: "What is your Engineer's Employee ID?",
                    validate: engineerIDInput => {
                        if (engineerIDInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's ID!");
                            return false;
                        }
                    }
                },
                {
                    name:"engineerEmail",
                    type: 'input',
                    message: "What is your Engineer's email address?",
                    validate: engineerEmailInput => {
                        if (engineerEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's email address!");
                            return false;
                        }
                    }
                },
                {
                    name:"engineerGitHub",
                    type: 'input',
                    message: "What is your Engineer's Github Username?",
                    validate: engineerGithubInput => {
                        if (engineerGithubInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's Github Username!");
                            return false;
                        }
                    }
                },
                {
                    name:"continueBuildingTeam",
                    type: 'list',            
                    message:"Would you like to add an Engineer, an Intern, or Finish your team?",
                    choices: ['Engineer', 'Intern', 'Finish'],
                    validate: continueBuildingTeamInput => {
                        if (continueBuildingTeamInput === "Engineer") {
                            engineerPrompt();
                            return true;
                        }
                        if (continueBuildingTeamInput === "Intern") {
                            internPrompt();
                            return true;
                        }
                    }
                },
                writeToFile(data),
                cycleThroughChoices()       
            ])
   // });
}

function internPrompt() {
//    .then((data) => {
        //INTERN QUESTIONS
            return inquirer.prompt([
                {
                    name:"internName",
                    type: 'input',
                    message: "What is your Intern's first name?",
                    validate: internNameInput => {
                        if (internNameInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's name!");
                            return false;
                        }
                    }
                },
                {
                    name:"internID",
                    type: 'input',
                    message: "What is your Intern's Employee ID?",
                    validate: internIDInput => {
                        if (internIDInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's ID!");
                            return false;
                        }
                   }
                },
                {
                    name:"internEmail",
                    type: 'input',
                    message: "What is your intern's email address?",
                    validate: internEmailInput => {
                        if (internEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's email address!");
                            return false;
                        }
                    }
                },
                {
                    name:"internSchool",
                    type: 'input',
                    message: "What school did your intern go to?",
                    validate: internSchoolInput => {
                        if (internSchoolInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's alma mater!");
                            return false;
                        }
                    }
                },
                {
                    name:"continueBuildingTeam",
                    type: 'list',            
                    message:"Would you like to add an Engineer, an Intern, or Finish your team?",
                    choices: ['Engineer', 'Intern', 'Finish']
                },
            writeToFile(data),
            cycleThroughChoices()
        ])
//})

}

promptUserForInformation();

//CAPTURE AND RETURN THE USERS INPUT
const printProfileData = data => { //data probably has to be an array. make array global and push the names/employees into the array. createemployeecard()
    console.log("=======");
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <title>Team Generator</title>
</head>
<body>
    <div class="text-white text-center bg-primary">
        <div class="container">
            <h1 class="display-3">My Team</h1>
        </div>
    </div>
    <div id="largeTeamContainer" class="container">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.managerName}</h5>
                <p>Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.managerEmpID}</li>
                <li class="list-group-item"><a href="mailto:${data.managerEmail}">Email Manager</a></li>
                <li class="list-group-item">Office: ${data.managerOfficeNumber}</li>
            </ul>
        </div>
    </div>
</body>
</html>
`
}

//WRITE THE HTML FILE
function writeToFile(data) {
    var printToString = printProfileData(data);
    fs.writeFileSync(path.join(process.cwd(), "index.html"), printToString);
}
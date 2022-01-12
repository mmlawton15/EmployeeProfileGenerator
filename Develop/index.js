// DONE - GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
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
var mgrName;
var mgrID;
var mgrEmail;
var mgrOfficeNumber;

var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//FUNCTION TO PROMPT USER FOR INFORMATION
const promptUserForInformation = () => {
    return inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'Please enter your Managers first and last name',
            validate: managerNameInput => {
                if (managerNameInput) {
                    mgrName = managerNameInput;
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
                    mgrID = managerEmpIDInput;
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
                    mgrEmail = managerEmailInput;
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
                    mgrOfficeNumber = managerOfficeNumberInput;
                return true;
            } else {
                console.log("Please enter your managers Office Number!");
                return false;
                }
            }
        },
        {
            name:"continueBuildingTeam",
            type: 'list',            
            message:"Would you like to add an Engineer, an Intern, or Finish your team?",
            choices: ['Engineer', 'Intern', 'Finish'],
            validate: continueBuildingInput => {
                if (continueBuildingInput === "Engineer") {
                    console.log(answer.continueBuildingTeam);
                }
                if (continueBuildingInput === "Intern") {
                    console.log(answer.continueBuildingTeam);
                }
                if (continueBuildingInput === "Finish") {
                    console.log(answer.continueBuildingTeam);
                    return true;
                }
            }
        }
        
    ])
    .then((data) => writeToFile(data))
}

//CAPTURE AND RETURN THE USERS INPUT
const printProfileData = profileDataArr => {
    console.log("=======");
return`
${mgrName}
${mgrOfficeNumber}
[Email Manager](mailto:${mgrEmail})
${mgrID}
`
}


//WRITE THE HTML FILE
function writeToFile(data) {
    var printToString = printProfileData(data);
    fs.writeFileSync(path.join(process.cwd(), "index.html"), printToString);
}


//CALL TO HTML FUNCTIONS
promptUserForInformation().then(printProfileData())
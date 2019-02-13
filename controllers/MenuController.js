const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get date and time",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
    switch(response.mainMenuChoice){
      case "Add new contact":
        this.addContact();
        break;
      case "Get date and time":
        this.getDate();
        break;
      case "Exit":
        this.exit();
      default:
         console.log("Invalid input");
         this.main();
     }
    })
    .catch((err) => {
     console.log(err);
    });
  }
  clear(){
     console.log("\x1Bc");
   }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }
  getDate(){
    this.clear();
    var today = new Date();
    console.log( (today.getMonth()+1)+ '/' +today.getDay() + '/'  + today.getFullYear() + ' ' + today.getHours() + ":"
+ today.getMinutes() + ":" + today.getSeconds());
    this.main();
  }

  getContactCount(){
  //method definition
    return this.contacts.length;
  }

  remindMe(){
    //this.clear();
    return "Learning is a life-long pursuit.";
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
}

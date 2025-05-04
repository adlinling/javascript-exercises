const findTheOldest = function(peeps) {

    const date = new Date();

    const thisyear = date.getFullYear();
    console.log(thisyear);

    let maxage = 0;
    let olderperson = "unknown";

    //reduce() is a looping function
    let oldest = peeps.reduce((older, person) => {

      console.log(person.name);
      
      console.log("Born: " + person.yearOfBirth);

      if(person.yearOfDeath){
          console.log("Died: " + person.yearOfDeath);
          age = person.yearOfDeath - person.yearOfBirth;
      }else{
          console.log("Still living or unknown death year");
          age = thisyear - person.yearOfBirth;
      }

      console.log("Age of "+ person.name + ": " + age);

      if(age > maxage){
        console.log(person.name + " is older than " + maxage);
        older = person;
        maxage = age;
      }

      return older;

    }, olderperson);


    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;

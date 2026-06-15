try 
  {
    for(let i =1; i<=50; i++)
      {
        if(i%3==0 && i%5==0)
          {
            console.log("FizzBuzz");
          }
        else if(i%5==0)
          {
            console.log("Buzz")
          }
        else if (i%3==0)
          {
            console.log("Fizz")
          }
        else
          {
            console.log(i)
          }
      }
}
catch(error)
  {
    console.error("Error occured", error);
  }

const array = [1,'2',3,4,'5'];
try 
  {
    let sum = array.reduce((acc, currentValue) => acc + parseInt(currentValue),0);
    console.log(sum)
  }
catch(error)
  {
    console.error("Error",error)
  }

const array = [0,1,'2',3,4,'5',null,undefined,"",false];

function countFalsy(array)
{
  try
    {
      let countFalsy = 0;
      array.forEach((items) => {
      if(!items)
      {
        countFalsy +=1;
      }
      })
      return countFalsy
}
  catch(error)
    {
      console.log("Error", error);
    }
}

console.log(countFalsy(array))


class CD
{
  constructor(country)
  {
    this.country = country;
  }
  display()
  {
    console.log("Parent Class");
    console.log(country);
  }
}

class CDI extends CD
  {
    constructor(country, EmployeeID , EmployeeName)
    {
      super(country);
      this.EmployeeID = EmployeeID;
      this.EmployeeName = EmployeeName;
    }
  }

const Company = new CDI("India", "CD00543", "Sanjai Devan");

console.log(Company);


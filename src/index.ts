{

// Ersätt alla : any med passande typ
// Avkommentera funktionerna längst ner i koden för att testa de olika funktionerna
// Se mer detaljerade instruktioner i koden


const ex1 = () => {

    const name: string = "Sandra";
    const age: number = 25;
    const isBirthday: boolean = false;

    const greet = (name: string, age :number, isBirthday: boolean): void => {

      console.log(`Hey ya! ${name}, age ${age}, do you have a birthday today? ${isBirthday}`);

    };

    greet(name, age, isBirthday);


    const sum = (num1: number, num2: number): number => num1 + num2;

    console.log(sum(1, 2));
   


    const names: string[] = ["Sandra", "Stina", "Torsten"];

    names.forEach(name => {
        console.log(`Hi you one of all ${name}`);
    });


  };

  const ex2 = () => {


        // Deklarera en typ för Pizza

        interface Pizza {
          name: string;
          slices: number;
          toppings: string [];
          price: number;
          vegan?: boolean;
        }

        const pizza: Pizza= {
          name: "Vesuvio",
          slices: 8,
          toppings: ["cheese", "tomato", "ham"],
          price: 80,
        }
    
        const veganPizza: Pizza= {
          name: "Vesuvio",
          slices: 8,
          toppings: ["cheese", "tomato", "squash"],
          price: 70,
          vegan: true
        }
    
    
        const getPizzaInfo = (pizza: Pizza): void => {
            console.log(pizza.name)
            console.log(pizza.slices)
            pizza.toppings.forEach((topping: string) => { console.log(topping) })
            console.log(pizza.price)
            if(pizza.vegan) {
                console.log("This pizza is vegan")
            }
        }
    
        getPizzaInfo(pizza);
        getPizzaInfo(veganPizza);
  }


  const ex3 = () => {

    // Skapa en Person type och använd den i funktionen. Person ska vara en union type  av "User", "Admin" och "SuperAdmin"

    type Person = 'User'| 'Admin' | 'SuperAdmin';

    const user: Person = "Admin";
    
    const getPriviligies = (user: Person): void => {

      switch (user) {

        case "User":

          console.log("You have user right privileges");

          break;

        case "Admin":

          console.log("You have admin right privileges");

          break;

        case "SuperAdmin":

          console.log("You have super admin right privileges");

          break;

      }

    };

    getPriviligies(user); 
    

  };



  const ex4 = () => {

    const getPersonList = (
      firstName: string,
      lastName: string,
      yearOfBirth: number,
      hasDriversLicense: boolean
    ): string => {

      return `<ul>
            <li><b>Förnamn:</b>${firstName}</li>

            <li><b>Efternamn:</b>${lastName}</li>

            <li><b>Födelseår:</b>${yearOfBirth}</li>

            <li><b>Har körkort:</b>${hasDriversLicense ? "Ja" : "Nej"}</li>
        </ul>`;
    };

    const personHTML: string = getPersonList("Sandra", "Larsson", 1998, true);

    console.log(personHTML);

  };


  const ex5 = () => {

    // Skapa en typ för personen
    interface Person {
        firstName: string;
        lastName: string;
        yearOfBirth: number;
        hasDriversLicense: boolean;
    }

    const getPersonList = (person: Person): string => {
        const { firstName, lastName, yearOfBirth, hasDriversLicense } = person;
        return `<ul>
            <li><b>Förnamn:</b> ${firstName}</li>
            <li><b>Efternamn:</b> ${lastName}</li>
            <li><b>Födelseår:</b> ${yearOfBirth}</li>
            <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>
        </ul>`;
    };

    // Användning av funktionen med en instans av Person
    const personData: Person = {
        firstName: "Sandra",
        lastName: "Larsson",
        yearOfBirth: 1998,
        hasDriversLicense: true,
    };

    const personHTML: string = getPersonList(personData);

    console.log(personHTML);
};



  const ex6 = () => {

    // Skapa en typ temperatureMeasurement och använd den i funktionen
    interface TemperatureMeasurement {
      day: number;
      temp: number;
    }

    const getSummerNightsTemperature = (tempMeasurements: TemperatureMeasurement[]): TemperatureMeasurement[] =>

      tempMeasurements.filter((data: TemperatureMeasurement) => data.temp > 10);


    const tempMeasurements: TemperatureMeasurement[] = [

      {

        day: 1,

        temp: 12,

      },

      {

        day: 2,

        temp: 9,

      },

      {

        day: 3,

        temp: 15,

      },

    ];


    const summerTemperatures: TemperatureMeasurement[] = getSummerNightsTemperature(tempMeasurements);

    console.log(summerTemperatures);

  };

  ex1();

  ex2();

  ex3();

  ex4();

  ex5();
  
  ex6();
}
const e = require('express');
const Models = require('../models');


const JSController =  {


   

    JavaScript: (req, res) => {
        let a = true;
       if(false || 0 || NaN || undefined || null || ''){
        res.send(a);
       }

            const person = { name: 'John', age: 30, weight: 20, height: 240, gender: 'male', address : {city:"salem"} };

            for (let k in person) {
            }

            const colors = ['red', 'green', 'blue', 'red'];

            for (let c of colors) {
            }

            colors.forEach((n)=>console.log(n));

            const new_c = colors.map((e)=>{return e+e});

            const new_color = colors.filter((c) => {return c === "red"});

              const sum = colors.reduce((p,n)=> {return `${p}, ${n}`})

                const found = colors.find((e)=> e === "red")

                const found_no = colors.indexOf("green")

                const inc = colors.includes("red")
            

                const { age, gender, name, address:{city}, ...rest } = person;

                const set_n = new Set([1,4,5,2,1,4,6])
                console.log(set_n)

                const asset = new Object();

                asset.category = "Laptop";

                asset.fun = function () {console.log("funn")}

                
                Object.entries(person).forEach(([key, value]) => {
                    // console.log(`${key}: ${value}`);
                });

                
                const arr = [1,2,3,3,1,2,7,8,7,8,7];
                
                const map = new Map();
                
                arr.forEach(e => {
                    map.set(e, (map.get(e) || 0)+1)
                });
                
                console.log(map)


const gcd = (a,b) =>{
    if(b==0){
        return a;
    }else{
        return gcd(b, a%b);
    }
} 

                const result = gcd(48, 18);



                function multiplier(factor) {
                    return function(x) {
                      return x * factor;
                    };
                  }
                  
                  const double = multiplier(2);
                  console.log(double(5)); 



                  function Dog(name) {
                    this.name = name;
                  }
                  
                  const myDog = new Dog('Buddy');

                  Dog.prototype.bark = function() {
                    console.log(this.name + ' says woof!');
                  };
                  
                  const dogg = new Dog("Doggy")
                  dogg.bark(); 
                  


                  class Animal {
                    constructor(name, sound) {
                      this.name = name;
                      this.sound = sound;
                    }
                  
                    makeSound() {
                      console.log(`${this.name} says ${this.sound}`);
                    }
                  }

                  
                  const cat = new Animal('cat', 'meow');
                    const dog = new Animal('dog', 'woof');

                    cat.makeSound(); 
                    dog.makeSound(); 



                    class Dogs extends Animal {
                        constructor(name, breed) {
                          super(name, 'woof'); 
                          this.breed = breed;
                        }
                      
                        fetch() {
                          console.log(`${this.name} is fetching. ${this.breed}`);
                        }
                      }

                      const golden = new Dogs('Max', 'Golden');
                        golden.makeSound(); 
                        golden.fetch(); 

                      

                  

       res.send("result");
    },
}

module.exports = JSController
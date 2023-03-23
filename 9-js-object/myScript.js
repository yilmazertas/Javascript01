// const person={
//     firstName:"Ahmet",
//     lastName:"Yılmaz",
//     age:33,
//     eyeColor:"blue"

//     // properties
// }
// console.log(person)
// console.log(person.age)
// console.log(person.eyeColor)
// console.log(person["lastName"])

const person ={
    firstName:"mustaf",
    lastName:"yılmaz",
    fullName: function myFuncsion(){
        return this.firstName+""+
            this.lastName
        
    }
}

let name=person.fullName()
console.log(name)

// gösterimler 
// fullname:function()
// myFunction()

// x=new Date()
// y=new String("mustafa");
// z=new Number(15)
// console.log(z)
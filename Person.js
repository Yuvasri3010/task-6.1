class Person {
    constructor(
      firstName = 'Abirami',
      lastName = 'Venkat',
      age = 25,
      country = 'India',
      city = 'Chennai',
      degree = 'Msc',
      fathername = 'Venkat'
    ) 
    {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.city = degree
      this.fathername = fathername
    }
  }
  
  const person1 = new Person() 
  const person2 = new Person('Kaviya', 'Pandian', 28, 'India', 'Coimbatore','Bsc','Pandian')
  
  console.log(person1)
  console.log(person2)
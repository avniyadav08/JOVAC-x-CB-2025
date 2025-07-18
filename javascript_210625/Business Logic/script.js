const people = [
    {
        name: "Aarav Sharma",
        age: 25,
        city: "Delhi"
    },
    {
        name: "Neha Verma",
        age: 30,
        city: "Mumbai"
    },
    {
        name: "Rohan Kapoor",
        age: 22,
        city: "Bengaluru"
    },
    {
        name: "Priya Singh",
        age: 28,
        city: "Chennai"
    },
    {
        name: "Anjali Mehta",
        age: 27,
        city: "Kolkata"
    },
    {
        name: "Karan Joshi",
        age: 24,
        city: "Pune"
    },
    {
        name: "Sneha Patil",
        age: 26,
        city: "Hyderabad"
    },
    {
        name: "Rahul Nair",
        age: 29,
        city: "Ahmedabad"
    },
    {
        name: "Ishita Rao",
        age: 23,
        city: "Surat"
    },
    {
        name: "Vikram Desai",
        age: 31,
        city: "Jaipur"
    },
    {
        name: "Meena Kumari",
        age: 21,
        city: "Lucknow"
    },
    {
        name: "Amit Trivedi",
        age: 32,
        city: "Bhopal"
    },
    {
        name: "Pooja Das",
        age: 20,
        city: "Guwahati"
    },
    {
        name: "Suresh Raina",
        age: 35,
        city: "Patna"
    },
    {
        name: "Divya Ghosh",
        age: 27,
        city: "Ranchi"
    },
    {
        name: "Yash Thakur",
        age: 24,
        city: "Nagpur"
    },
    {
        name: "Nidhi Bansal",
        age: 26,
        city: "Chandigarh"
    },
    {
        name: "Manoj Sinha",
        age: 30,
        city: "Indore"
    },
    {
        name: "Kavita Pillai",
        age: 28,
        city: "Bhopal"
    },
    {
        name: "Harshita Jain",
        age: 22,
        city: "Noida"
    }
];

// console.log(people);

// MAP FUNCTION:-Creates a new array by applying specific function to each element of an array.

const updatePeople=people.map(person =>({
    ...person,  //if we don't use this then our array will show only senior property not all the other property
    senior:person.age>30
}))

console.log("Senior People:",updatePeople)




//FILTER FUNCTION:- creates a new array conataining only the elements that meets specific condition

const  cityPeople=people.filter(person=> person.city==="Delhi"
    || person.city==="Noida"
);
console.log("City People:",cityPeople)



//REDUSE FUNCTION:- reduces an array to a single value by applying a function cumulatively to its elements.


const totalAge=people.reduce((sum,person)=>sum+person.age,0);
console.log("Total age:",totalAge)

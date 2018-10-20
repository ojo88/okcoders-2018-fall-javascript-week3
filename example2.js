var person1 = { firstname: 'Ogwugbom', lastname: 'Okpara', age: 30}
var person2 = { firstname: 'Ikechukwu', lastname: 'Okpara', age: 29}
var person3 = { firstname: 'Carlos', lastname: 'Stanfield', age: 36}

var people = [person1, person2, person3]

for(i = 0; i < people.length; i++)
    {
        console.log(people[i].firstname);
    }
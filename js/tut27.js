console.log("welcome");
let car ={
name:'razia',
speed:40,
run: function()
{
    console.log('car is awesome');
}
}

function generalCar(givenName,givenspeed)
{
    this.name =givenName;
    this.speed =givenspeed;
    this.run = function()
    {
        console.log(`${this.name} is running`);
    }

}
car1= new generalCar('aneela',12);
console.log(car);
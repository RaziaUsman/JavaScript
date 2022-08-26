console.log("Good Evening");
const proto ={
    slogn:function()
    {
        return`This company is the best`
    },
    changeName:function(newname)
    {
        this.name= newname;
    }
}
const harry = Object.create(proto);
harry.name= "Razia";
harry.role="programmer";
harry.changeName("Aneela");
console.log(harry);
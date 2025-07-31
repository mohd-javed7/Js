// The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. 
// Implement a JavaScript function that takes an array of student names and assigns them to 
// one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), 
// Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of 
// their names.

getHouse();
function getHouse(){
    const names = ["Javed","RamVishwanathKumar","Bahubali","SurajBhoj","Vivek","NoMoneyforMElol","Seven33"];
    const houses = {
        Gryffindor : [],
        Hufflepuff : [],
        Ravenclaw : [],
        Slytherin : []
    }
    for (const name of names) {
        if(name.length < 6){
            houses.Gryffindor.push(name);
        }
        else if(name.length < 8){
            houses.Hufflepuff.push(name);
        }
        else if(name.length < 12){
            houses.Ravenclaw.push(name);
        }
        else{
            houses.Slytherin.push(name);
        }
    }
    console.log(houses);
}
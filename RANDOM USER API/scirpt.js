async function randomuser(){
    try{
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("pfp").src = user.picture.large;
        document.getElementById("name").innerText=`Name : ${user.name.first} ${user.name.last}`;
        document.getElementById("email").innerText = `Email : ${user.email}`;
    }
    catch(error){
        document.getElementById("error").innerText = error;
    }
}
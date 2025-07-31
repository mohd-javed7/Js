async function getJoke(){
    const displayJoke = document.getElementById("joke");
    try{
        const response = await fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        });
        const data = await response.json();
        displayJoke.innerText = data.joke;
    }
    catch(error){
        console.log("Error fetching the joke: ",error);
        displayJoke.innerText="Couldn't fetch joke.";
    }
    
}
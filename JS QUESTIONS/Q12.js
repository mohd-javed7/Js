// The Token Manager:
// You are developing a user authentication system, and you need to manage user 
// authentication tokens. Implement a function named setAuthToken that takes an 
// authentication token and sets it in localStorage with an expiration time.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function setAuthToken(token,expiry){
    const now = new Date();
    const item = {
        value : token,
        expiry:now.getTime()+expiry*60*1000
    };
    const key = `auth-id : ${token.id}`;
    const data = JSON.stringify(item);
    localStorage.setItem(key,data);
    console.log("Token data is saved in the localstorage.")
}
function getAuthToken(id){
    const data = localStorage.getItem(`auth-id : ${id}`)
    if(!data){
        console.log("No token found.")
    }
    const item = JSON.parse(data);
    const now = new Date();
    if(now.getTime() >  item.expiry){
        console.log("Token has be expired");
        localStorage.removeItem(`auth-id : ${id}`);
    }
    console.log(item.value);
}

const data ={
    id: 404,
    user : "uknown",
    quote : "YOLO"
}
setAuthToken(data,30);
getAuthToken(data.id);
    </script>
</body>
</html>


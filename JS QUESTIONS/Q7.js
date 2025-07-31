// The Local Storage Manager:
// You are working on a note-taking app, and you want to implement a 
// function named saveNoteToLocalStorage that takes a note object and 
// saves it to the browser's local storage.

//program won't as it saves in the local storage and for that it must run on the browser to just have to make it inside the html body

function saveNoteToLocalStorage(note){
    const notekey = `note-${note.id}`;
    const notetoStr = JSON.stringify(note);
    localStorage.setItem(notekey,notetoStr);
    console.log("Note has been stored in the browser's local storage.")
}

const note = {
    id: 27,
    name : "Javed",
    content : "Trying to get it right."
}
saveNoteToLocalStorage(note);
getfromLocalStorage(note.id);
function getfromLocalStorage(noteid){
    const notekey = `note-${noteid}`;
    const getNote = localStorage.getItem(notekey);

    try{
        const note = JSON.parse(getNote);
        console.log(note);
    }
    catch(error){
        console.log(error);
    }
}
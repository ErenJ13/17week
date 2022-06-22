let message = [];
let comment;

function addNewComment() {
    let new_comment = document.getElementById('new_comm').value;
    message.push(checkSpam(new_comment))
    document.getElementById('new_comm').value = '';
    UpdateComment();

}
function UpdateComment(){
    let optionString = "";
    for (let m of message) {
        optionString += `<div><p>${m}</p><hr></div>`;
    }
        document.getElementById("comm").innerHTML = optionString;
}
document.addEventListener("DOMContentLoaded", function () {
    UpdateComment();
})


function checkSpam(comment) {

    let upcomment = comment.replace(/xxx|viagra/gi, "***")
    return upcomment;
}

console.log(message);
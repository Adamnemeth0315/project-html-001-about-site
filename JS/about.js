function sendMessage() {
    let textArea = document.querySelector("#message");
    let comment = document.createElement("p");
    comment.innerHTML = textArea.value
    
    let parent = document.querySelector("#parent");
    parent.appendChild(comment);

}

let button = document.querySelector("#sendBtn");
button.addEventListener("click", sendMessage); 

function sendName(){
    let input = document.querySelector("#name");
    console.log(input.value);
}
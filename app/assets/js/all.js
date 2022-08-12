console.log('Hello!');

$(document).ready(() => {
  console.log('Hex School Hello!');
});

const editor = document.querySelector(".assignment-reply-editor")
const reply = document.querySelector(".assignment-reply")
const replyControls = document.querySelector(".assignment-reply-controls")

function assignment_reply(){
  editor.classList.add("d-none")
  reply.classList.remove("d-none")
  replyControls.classList.remove("d-none")
}

function assignment_edit(){
  editor.classList.remove("d-none")
  reply.classList.add("d-none")
  replyControls.classList.add("d-none")
}

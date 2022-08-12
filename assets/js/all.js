"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('Hex School Hello!');
});
var editor = document.querySelector(".assignment-reply-editor");
var reply = document.querySelector(".assignment-reply");
var replyControls = document.querySelector(".assignment-reply-controls");

function assignment_reply() {
  editor.classList.add("d-none");
  reply.classList.remove("d-none");
  replyControls.classList.remove("d-none");
}

function assignment_edit() {
  editor.classList.remove("d-none");
  reply.classList.add("d-none");
  replyControls.classList.add("d-none");
}
//# sourceMappingURL=all.js.map

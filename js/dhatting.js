const mainBox = document.querySelector(".main-box");
const chattingForm = document.querySelector("#chattingForm");
const chattingInput = document.querySelector("#chattingInput");
const REPLY__key = "replys";
const del = document.querySelector(".del-btn");
let replys = [];

chattingForm.addEventListener("submit", chattingSubmit);

function chattingSubmit(event) {
  event.preventDefault();
  const newReply = chattingInput.value;
  chattingInput.value = null;
  const replyObj = {
    Text: newReply,
    id: Date.now(),
  };
  replys.push(replyObj);
  paintReply(replyObj);
  saveReply();
}

function saveReply() {
  localStorage.setItem(REPLY__key, JSON.stringify(replys));
}

function paintReply(newReply) {
  const div = document.createElement("div");
  div.classList.add("chat-chattings-reply");
  div.id = newReply.id;
  const div_second = document.createElement("div");
  div_second.classList.add("chat-chattings__column-reply");
  const span = document.createElement("span");
  span.classList.add("chat-chattings__column-content-reply");
  const span_second = document.createElement("span");
  span_second.classList.add("chat-chattings__column-time-reply");
  const btn = document.createElement("button");
  btn.classList.add("delete-btn");
  btn.innerText = "Delete";
  btn.addEventListener("click", deleteReply);

  const time = new Date();
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);

  span_second.innerText = `${hours}:${minutes}`;

  mainBox.appendChild(div);
  div.appendChild(div_second);
  div_second.appendChild(span);
  div.appendChild(span_second);
  div.appendChild(btn);

  span.innerText = newReply.Text;
}

function deleteReply(event) {
  const li = event.target.parentElement;
  li.remove();
  replys = replys.filter((reply) => reply.id !== parseInt(li.id));
  saveReply();
}

const getReplys = localStorage.getItem(REPLY__key);

if (getReplys) {
  const parseReply = JSON.parse(getReplys);
  replys = parseReply;
  parseReply.forEach(paintReply);
}

// chatting btm

const sendBtn = document.querySelector(".chat__form__input-btn");

sendBtn.addEventListener("click", chattingSubmit);

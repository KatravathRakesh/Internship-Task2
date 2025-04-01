document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = "";
    if (name === "" || email === "") {
      message = "Please fill out all fields.";
    } else if (!email.includes("@")) {
      message = "Please enter a valid email address.";
    } else {
      message = "Form submitted successfully!";
    }
    document.getElementById("formMessage").innerText = message;
  });

  function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") return;
    let taskDiv = document.createElement("div");
    taskDiv.className = "todo-item";
    taskDiv.innerHTML = `${taskInput} <button onclick="removeTask(this)">X</button>`;
    document.getElementById("todoList").appendChild(taskDiv);
    document.getElementById("taskInput").value = "";
}
function removeTask(element) {
    element.parentElement.remove();
}

function addImage() {
    let imageUrl = document.getElementById("imageUrl").value;
    if (imageUrl.trim() === "") return;
    let img = document.createElement("img");
    img.src = imageUrl;
    document.getElementById("imageGallery").appendChild(img);
    document.getElementById("imageUrl").value = "";
}

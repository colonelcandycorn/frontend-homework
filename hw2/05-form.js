const form = document.getElementById("my-form");
const nameModal = document.getElementById("name-modal");
const emailModal = document.getElementById("email-modal");
const coursesModal = document.getElementById("courses-modal");
const commentsModal = document.getElementById("comments-modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = form.elements["full-name"].value;
  const email = form.elements.email.value;
  const courses = [];
  if (form.elements.web.checked) {
    courses.push("Full Stack Web Development");
  }
  if (form.elements.op.checked) {
    courses.push("Operating Systems");
  }
  if (form.elements.pl.checked) {
    courses.push("Programming Languages");
  }

  const comments = form.elements.comments.value;

  if (nameModal.childElementCount > 1) {
    nameModal.removeChild(nameModal.lastChild);
  }
  if (emailModal.childElementCount > 1) {
    emailModal.removeChild(emailModal.lastChild);
  }
  if (coursesModal.childElementCount > 1) {
    coursesModal.removeChild(coursesModal.lastChild);
  }
  if (commentsModal.childElementCount > 1) {
    commentsModal.removeChild(commentsModal.lastChild);
  }

  const nameText = document.createElement("span");
  const emailText = document.createElement("span");
  const coursesText = document.createElement("span");
  const commentsText = document.createElement("span");

  nameText.textContent = fullName;
  emailText.textContent = email;
  coursesText.textContent = courses.join(", ");
  commentsText.textContent = comments;

  nameModal.appendChild(nameText);
  emailModal.appendChild(emailText);
  coursesModal.appendChild(coursesText);
  commentsModal.appendChild(commentsText);
});

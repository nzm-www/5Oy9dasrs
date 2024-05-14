const form = document.querySelector("form");
const template = document.querySelector("template");
const ul = document.querySelector("ul");

const data = [];

const upDataUl = (users) => {
  ul.innerHTML = "";
  data.forEach((users) => {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector("img");
    const name = clone.querySelector("h3");
    const email = clone.querySelector(".email");
    const tel = clone.querySelector(".tel");

    img.src = users.Img;
    name.textContent = users.name;
    email.textContent = users.email;
    tel.textContent = users.phoneNumber;

    ul.appendChild(clone);
  });

  console.log(users);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = {
    name: form.name.value,
    phoneNumber: form["phone-number"].value,
    Img: form.img.value,
    email: form.email.value,
  };

  data.push(newUser);
  upDataUl(data);
  form.reset();
});

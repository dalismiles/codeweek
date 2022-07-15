import { q, c, createCard, createContactEl } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const contactsEl = q(".contacts");

const getResults = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const sortList = async () => {
  const contactList = await getResults(BASE_URL);
  const contactListWPoints = contactList.map((point) => {
    return {
      points: Math.floor(Math.random() * 10),
      ...point,
    };
  });

  // funzione per ordinare i contatti in base al punteggio-------
  const sortedContactList = contactListWPoints.sort(function (a, b) {
    return b.points - a.points;
  });

  console.log(contactList);
  console.log(sortedContactList);

  sortedContactList.map((contacts) =>
    createContactEl(
      contactsEl,
      contacts.url,
      contacts.name,
      contacts.email,
      contacts.website,
      contacts.points,
      contacts.id
    )
  );

  return sortedContactList;
};

window.onload = function () {
  sortList();
};

// funzione per cambiare colore---------------------------
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

genNew.addEventListener("click", setBg);
setBg();

// modale HEADER-----------------------------------------
const button = q("#open-modal");
const modal = q(".modal");
const close = q("#close-modal");

button.addEventListener("click", function () {
  modal.classList.add("active");
});

close.addEventListener("click", function () {
  modal.classList.remove("active");
});

// modale CARDS-----------------------------------------
const modal2 = q(".modal2");
const closeM = q("#close-modal2");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    contactsEl.addEventListener("click", function (event) {
      if (event.target.closest(".contactCard")) {
        modal2.classList.add("active");

        const userID = event.target.id;
        const userInfo = JSON.stringify(data[userID - 1])
          .replaceAll("{", " ")
          .replaceAll("}", " ")
          .replaceAll(",", `<br><br>`);

        modal2.innerHTML = `${userInfo}`;
      }

      closeM.addEventListener("click", function () {
        modal2.classList.remove("active");
      });
    });
  });

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

const createCard = (parent, url, name, email, website, points) => {
  const wrapperEl = c("div");
  const iconEl = c("img");
  const nameEl = c("h3");
  const emailEl = c("p");
  const websiteEl = c("p");
  const rankingEl = c("h4");

  wrapperEl.className = "wrapper";
  iconEl.className = "contact-icon";
  nameEl.className = "contactName";
  emailEl.className = "email";
  websiteEl.className = "website";
  rankingEl.className = "ranking";

  iconEl.src =
    "https://icon-library.com/images/person-icon-svg/person-icon-svg-27.jpg";

  nameEl.textContent = `${name}`;
  emailEl.textContent = `e-mail address: ${email}`;
  websiteEl.textContent = `website: ${website}`;
  rankingEl.textContent = `${points} points`;

  wrapperEl.append(iconEl, nameEl, emailEl, websiteEl, rankingEl);
  parent.appendChild(wrapperEl);
};

const createContactEl = (parent, url, name, email, website, points, id) => {
  const wrapper = c("div");
  const parIcon = c("img");
  const parName = c("h3");
  const parEmail = c("p");
  const parWebsite = c("p");
  const parRanking = c("h4");

  wrapper.className = "contactCard";
  wrapper.setAttribute("id", id);

  parIcon.src =
    "https://icon-library.com/images/person-icon-svg/person-icon-svg-27.jpg";

  parName.textContent = `${name}`;
  parEmail.textContent = `e-mail address: ${email}`;
  parWebsite.textContent = `website: ${website}`;
  parRanking.textContent = `${points} points`;

  wrapper.append(parIcon, parName, parEmail, parWebsite, parRanking);
  parent.appendChild(wrapper);
};

export { c, q, createCard, createContactEl };

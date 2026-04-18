const mobileMenu = document.querySelector('.hamburger');
const webMenu = document.querySelector('.navbar');

const toggleMenu = () => {
  webMenu.classList.toggle("active");
  mobileMenu.classList.toggle("hamburger-active");

  if (webMenu.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};
mobileMenu.addEventListener("click", () => toggleMenu());

const navBarMenu = document.querySelectorAll('.navbar a');

navBarMenu.forEach(link => {
  link.addEventListener('click', () => {
    webMenu.classList.remove("active");
    mobileMenu.classList.remove("hamburger-active");
    document.body.classList.remove("no-scroll");
  })
})

function updateTimezone() {
  const current = new Date();
  const options = {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }

  const offset = current.getTimezoneOffset();
  const offsetHours = (offset / 60);

  const daylight = (offset === 7) ? "PDT" : "PST";

  const timeString = new Intl.DateTimeFormat("en-US", options).format(current);
  document.getElementById("local-time").textContent = `Timezone: ${timeString} ${daylight} UTC-${offsetHours}`;
}

setInterval(updateTimezone, 1000);
updateTimezone();
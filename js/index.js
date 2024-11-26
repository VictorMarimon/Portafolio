const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;

      if (element.classList.contains("hidden-left")) {
        element.classList.add("visible-left");
      } else if (element.classList.contains("hidden-right")) {
        element.classList.add("visible-right");
      } else {
        element.classList.add("visible");
      }
    }
  });
});

document.querySelectorAll(".mission-vision, .contact").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

document.querySelectorAll(".skills").forEach((section) => {
  section.classList.add("hidden-left");
  observer.observe(section);
});

document.querySelectorAll(".projects").forEach((section) => {
  section.classList.add("hidden-right");
  observer.observe(section);
});

const observerMission = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document
  .querySelectorAll(".mission-vision__mission, .mission-vision__vision")
  .forEach((element) => {
    observerMission.observe(element);
  });

const form = document.querySelector(".contact__form");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", (e) => {
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  });

  if (!valid) {
    e.preventDefault();
    alert("Por favor, completa todos los campos.");
  }
});

const footer = document.querySelector("footer");
const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      footer.classList.add("visible");
    }
  });
});

footerObserver.observe(footer);

const toggleButton = document.querySelector(".nav__toggle");
const navZone = document.querySelector(".nav__zone");

toggleButton.addEventListener("click", () => {
  navZone.classList.toggle("active");
});

navZone.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navZone.classList.remove("active");
  }
});

const certificates = document.querySelectorAll(".certificate__content");
const observerCertificates = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

certificates.forEach((cert) => observerCertificates.observe(cert));

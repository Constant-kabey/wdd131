const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".buttons");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

const lastmodified= document.querySelector("#lastmod");

// use the date object
const today = new Date();

lastmodified.innerHTML = `Last modified on <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
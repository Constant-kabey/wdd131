const lastmodified= document.querySelector("#lastmod");

// use the date object
const today = new Date();

lastmodified.innerHTML = `Last modified on <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
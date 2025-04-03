const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});

// Închide meniul la click pe link
document.querySelectorAll(".nav-menu a").forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("active");
	});
});

// Cursor follow effect
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
cursor.style.left = e.pageX + "px";
cursor.style.top = e.pageY + "px";
});

// Smooth scroll feel
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});

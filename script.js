const iconesDarkMode = document.getElementById(".iconesDarkMode");

iconesDarkMode.addEventListener("change", (e) =>{
    document.body.classList.toggle("dark", e.target.checked);
})


// start heading
// search box part
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("opacity");
});

document.addEventListener("click", (e) => {
    if (e.target != searchBox && e.target != searchIcon) {
        searchBox.classList.remove("opacity");
    }
});


// nav bar part in small screens
const navItem = document.querySelector(".bars");
const navigation = document.querySelector(".navigation");

navItem.addEventListener("click", () => {
    navigation.classList.toggle("position");
    navigation.classList.toggle("opacity");

});

document.addEventListener("click", (e) => {
    if (e.target != navItem && e.target != navigation) {
        navigation.classList.remove("position");
        navigation.classList.remove("opacity");
    }
});

navigation.addEventListener("click", (e) => {
    e.stopPropagation();
});
// end heading

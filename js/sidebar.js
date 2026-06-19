const menu = document.querySelectorAll(".sidebar ul li");

menu.forEach(item => {

  item.addEventListener("click", () => {

    menu.forEach(li => {
      li.classList.remove("active");
    });

    item.classList.add("active");

  });

});
const btn = document.querySelectorAll("input[type=button]"),
  display = document.querySelector(".screen"),
  history_list = document.querySelector(".history-list"),
  history = document.querySelector(".history"),
  history_btn = document.querySelector(".get_history");

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.value === "AC") {
      const newLi = document.createElement("li");
      newLi.textContent = display.value;
      history_list.appendChild(newLi);
      saveList();
      return (display.value = "");
    }
    if (item.value === "DEL")
      return (display.value = display.value.slice(0, -1));
    if (item.value === "=") {
      const newLi = document.createElement("li");
      newLi.textContent = display.value;
      history_list.appendChild(newLi);
      saveList();
      return (display.value = eval(display.value));
    }
    display.value += item.value;
  });
});

history_btn.addEventListener("click", function () {
  history.classList.toggle("show");

  if (history.classList.contains("show")) {
    history_btn.innerHTML = "Hide History";
  } else {
    history_btn.innerHTML = "Show History";
  }
});

function saveList() {
  localStorage.setItem("calculations", history_list.innerHTML);
}

function loadList() {
  history_list.innerHTML = localStorage.getItem("calculations");
}

loadList();

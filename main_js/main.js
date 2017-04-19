/**
 * Created by Людмила on 19.04.2017.
 */

  function look(t) {
    div = document.getElementById("hide_text");
    a = document.getElementById("a-hide_text");
    if (div.style.display == "none") {
      a.innerHTML = "Скрыть текст";
      div.style.display = "block";
    }
    else {
      a.innerHTML = "Показать больше";
      div.style.display = "none";
    }
  }

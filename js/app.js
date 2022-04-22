$("#btnAdd").click(() => {
  $.get("https://api.kanye.rest/", (data) => {
    let p = $("<p></p>").text(data.quote);
    let btnUp = $("<button><i class='fa-solid fa-arrow-up'></i></button>");
    btnUp.click(() => {
      btnUp.parent().parent().prev().before(btnUp.parent().parent());
    });
    let btnDown = $("<button><i class='fa-solid fa-arrow-down'></i></button>");
    btnDown.click(() => {
      btnDown.parent().parent().next().after(btnDown.parent().parent());
    });
    let buttonGroup = $("<div></div>")
      .addClass("buttonGroup")
      .append(btnUp, btnDown);
    let element = $("<li></li>").append(p, buttonGroup);
    $("#list").append(element);
  });
});

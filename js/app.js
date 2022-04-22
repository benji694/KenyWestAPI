$("#btnAdd").click(() => {
  $.get("https://api.kanye.rest/", (data) => {
    let p = $("<p></p>").text(data.quote);
    let btnUp = $("<button></button>").text("UP");
    btnUp.click(() => {
      btnUp.parent().parent().prev().before(btnUp.parent().parent());
    });
    let btnDown = $("<button></button>").text("DOWN");
    btnDown.click(() => {
      btnDown.parent().parent().next().after(btnDown.parent().parent());
    });
    let buttonGroup = $("<div></div>").append(btnUp, btnDown);
    let element = $("<li></li>").append(p, buttonGroup);
    $("#list").append(element);
  });
});

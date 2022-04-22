$("#btnAdd").click(() => {
  $.get("https://api.kanye.rest/", (data) => {
    let element = $.create("li");
    let p = $.create("p").text(data.quote);
    let buttonGroup = $.create("div");
    let btnUp = $.create("button");
    let btnDown = $.create("button");
    element.append(p, buttonGroup);
    $("#list").append(element);
  });
});

$(".btnUp").click(() => console.log("hello"));

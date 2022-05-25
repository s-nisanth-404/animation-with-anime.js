for (let i = 0; i <= 50; i++) {
  let BlockDiv = document.createElement("div");

  let BlockClass = document.createAttribute("class");
  BlockClass.value = "block";

  BlockDiv.setAttributeNode(BlockClass);
  document.querySelector("body").appendChild(BlockDiv);
}

function randomValues() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-600, 600);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(1, 3);
    },
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: randomValues,
  });
}

randomValues();

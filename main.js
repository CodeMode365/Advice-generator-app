let advice = document.getElementById("advice");
let adviceID = document.getElementById("ID");
let nextBtn = document.getElementById("next");

window.onload = async () => {
  fetchAdvice();
};

nextBtn.onclick = () => {
  advice.children[0].innerText = "Loading...";
  adviceID.innerHTML = "#00";
  const fet = setTimeout(() => fetchAdvice(), 1000);
};

const fetchAdvice = async () => {
  await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      advice.children[0].innerText = res.slip.advice.toString();
      adviceID.innerHTML = "#"+res.slip.id.toString();
    })
    .catch((err) => {
      console.log(err),
        (advice.children[0].innerText =
          "Counld not load Advice please try again later");
      adviceID.innerHTML = "000";
    });
};

const btn = document.querySelector("button");
const list = document.querySelector("#images");

async function getCats(numOfItems) {
  const res = await fetch(` `);
  const data = await res.json();

  data.forEach((item) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = item.url;

    li.appendChild(img);
    list.appendChild(li);
  });
}

btn.addEventListener("click", () => {
  const select = document.querySelector("select");
  getCats(select.value);
  list.classList.add("show");
});

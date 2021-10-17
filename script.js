const knap1 = document.querySelector(".quiz_click1");

const quiz1 = document.querySelector(".strawberries_img");

function addstrawberries() {
  quiz1.classList.add("active");
}

knap1.addEventListener("click", addstrawberries);

const knap2 = document.querySelector(".quiz_click2");

const quiz2 = document.querySelector(".carrie_img");

function addcarrie() {
  quiz2.classList.add("activeto");
}

knap2.addEventListener("click", addcarrie);

// const knap2 = document.querySelector(".quiz_click2");
// const quiz2 = docment.querySelector(".carrie_img");

// function addcarrie() {
//   quiz2.classList.add("active");
// }

// knap2.addEventListener("click", addcarrie);

const knap3 = document.querySelector(".quiz_click3");

const quiz3 = document.querySelector(".bloodymary_img");

function addbloodymary() {
  quiz3.classList.add("active");
}

knap3.addEventListener("click", addbloodymary);

const faqItem = document.querySelectorAll(".contactFaq__item");
faqItem.forEach((item) => {
  const question = item.querySelector(".contactFaq__item--question");
  const answer = item.querySelector(".contactFaq__item--answer");
  question.addEventListener("click", () => {
    const open = item.classList.contains("active");
    faqItem.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".contactFaq__item--answer").style.maxHeight = null;
    });
    if (!open) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

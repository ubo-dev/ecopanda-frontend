const faqs = document.querySelectorAll(".faqser");

faqs.forEach(faqser => {
    faqser.classList.remove("active");
});

faqs.forEach(faqser => {
    faqser.addEventListener("click", () => {
        faqser.classList.toggle("active");
    })
})
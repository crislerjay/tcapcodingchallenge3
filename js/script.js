let accordionHeader = document.querySelectorAll('.accordionHeader');
let accordion = document.querySelectorAll('.accordion');

function closeAccordion() {
  accordion.forEach(acc => {
    acc.classList.remove('active')
  })
}

accordionHeader.forEach(btn => {
  btn.addEventListener('click', function() {
    console.log(this.parentElement);
    // closeAccordion()
    if (this.parentElement.classList.contains('active')) {
      console.log('yes');
      this.parentElement.classList.remove('active')
    } else {
      closeAccordion()
      this.parentElement.classList.add('active')
    }
  })
})

document.addEventListener("DOMContentLoaded", function() {
  
})
// Portfolio section model
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll("img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add("active");

}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);

    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});


// ***** **** *** ** * LETTER TYPED JS * ** *** **** *****

document.addEventListener("DOMContentLoaded", function () {
    const options = {
      strings: ['Front-end Developer', 'Full-stack Developer', 'Web Designer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    };
  
    const multiTextElement = document.querySelector('.multiple-text');
    let currentTextIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function type() {
      const fullText = options.strings[currentTextIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }
  
      multiTextElement.textContent = currentText;
  
      let typeSpeed = options.typeSpeed;
      if (isDeleting) {
        typeSpeed /= 2; // Faster when deleting
      }
  
      if (!isDeleting && currentText === fullText) {
        typeSpeed = options.backDelay;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % options.strings.length;
      }
  
      setTimeout(type, typeSpeed);
    }
  
    type();
  });






//vvfjhb

// ***** **** *** ** * PROJECT SECTION * ** *** **** *****

// Select all open popup buttons
const openPopupBtns = document.querySelectorAll('.open-popup-btn');

// Loop through each open popup button and attach event listener
openPopupBtns.forEach((btn, index) => {
    // Select corresponding popup and overlay
    const popup = document.getElementById(`popup${index + 1}`);
    const overlay = document.getElementById('overlay');

    // Attach click event listener to open popup button
    btn.addEventListener('click', () => {
        // Display popup and overlay
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Select close popup button
    const closePopupBtn = popup.querySelector('.close-popup-btn');

    // Attach click event listener to close popup button
    closePopupBtn.addEventListener('click', () => {
        // Hide popup and overlay
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Attach click event listener to overlay to close popup when clicked outside of it
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            // Hide popup and overlay
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});
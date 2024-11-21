// Define colors and messages
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}




const colors = ["#0080FF","#0080FF", "#0080FF"];
const messageArr = ["UMN Student", "Software Engineer", "Fullstack Developer"];

var currentMessage = 0;
var textPosition = 0;
var typingSpeed = 100;
var backspacingSpeed = 50;
var resumeDelay = 2000;

function typewriter() {
  var element = document.querySelector("#jobTitle");

  // Update text with color
  element.innerHTML = `<span style="color: ${colors[currentMessage]}">${messageArr[currentMessage].substring(0, textPosition)}</span>`;

  if (textPosition < messageArr[currentMessage].length) {
    textPosition++;
    setTimeout(typewriter, typingSpeed);
  } else {
    setTimeout(backspace, resumeDelay);
  }
}

function backspace() {
  var element = document.querySelector("#jobTitle");

  // Update text with color
  element.innerHTML = `<span style="color: ${colors[currentMessage]}">${messageArr[currentMessage].substring(0, textPosition)}</span>`;

  if (textPosition > 0) {
    textPosition--;
    setTimeout(backspace, backspacingSpeed);
  } else {
    currentMessage = (currentMessage + 1) % messageArr.length;
    setTimeout(typewriter, typingSpeed);
  }
}

// Start the typewriter effect once the page is loaded
window.onload = function() {
  typewriter();
};


document.addEventListener('DOMContentLoaded', () => {
  const copyEmailIcon = document.getElementById('copy-email-icon');
  const email = document.getElementById('email');
  const copiedMessage = document.getElementById('copied');
  
  // Highlight email on mouseover
  copyEmailIcon.addEventListener('mouseover', () => {
      email.classList.add('highlight-email');
  });

  // Remove highlight on mouseout
  copyEmailIcon.addEventListener('mouseout', () => {
      email.classList.remove('highlight-email');
  });

  // Copy email functionality
  copyEmailIcon.addEventListener('click', () => {
      navigator.clipboard.writeText(email.textContent).then(() => {
          copiedMessage.textContent = 'Copied!';
          copiedMessage.classList.add('active');

          // Remove the "Copied" message after a few seconds
          setTimeout(() => {
              copiedMessage.classList.remove('active');
              copiedMessage.textContent = '';
          }, 2000); // 2 seconds before "Copied" message disappears
      }).catch(err => {
          console.error('Failed to copy text: ', err);
      });
  });
});
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: false,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 200 });
sr.reveal(".about-text", { delay: 200 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 100 });


/*SCROLL projects*/
sr.reveal(".project-card", { interval: 200 });
sr.reveal(".contact-form", { interval: 200 });

document.addEventListener('DOMContentLoaded', () => {
  const navCircles = document.querySelectorAll('.nav-circle');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  function getOffset(element) {
    let offset = 0;
    while (element) {
      offset += element.offsetTop;
      element = element.offsetParent;
    }
    return offset;
  }

  function updateActiveClass() {
    let currentSection = '';


    sections.forEach(section => {
      const sectionTop = getOffset(section);
      const sectionHeight = section.clientHeight;
      if (window.scrollY + window.innerHeight / 2 >= sectionTop &&
          window.scrollY + window.innerHeight / 2 <= sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });


    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });


    navCircles.forEach(circle => {
      circle.classList.remove('active');
      if (circle.getAttribute('href').includes(currentSection)) {
        circle.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveClass);
});
function enlargeImage(img) {

  var clone = img.cloneNode();
  clone.classList.add("fullscreen-image"); // Add the class for styling
  clone.onclick = closeImage; 

  // Get the overlay div and append the cloned image
  var overlay = document.getElementById("image-overlay");
  overlay.innerHTML = ''; // Clear any previous content
  overlay.appendChild(clone);
  
  // Show the overlay
  overlay.style.display = "flex";
}

// Function to close the full-screen image view
function closeImage() {
  document.getElementById("image-overlay").style.display = "none";
}




/*=============== SHOW MENU ===============*/
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
 /*---------------------------navbar js ends here-----------------------------*/ 
 /*--------------extra styling for navbar starts here-------------*/

/*--------------extra styling for navbar ends here-------------*/

/*---------------------------------about section testimonial starts here-------------------------*/
/*--------------------testimonial section js starts here----------------*/
// Get the elements needed for the slider

// Get the elements needed for the slider
(function() {
    const slides = document.querySelectorAll('.slide');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        // Update the transform to show the current slide
        const offset = -index * 100; // Move to the left based on index
        sliderWrapper.style.transform = `translateX(${offset}%)`;

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    next.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prev.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    function autoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlay();
    }

    autoPlay();
})();
//section 5 automatic slider and toggle bar js starts here---------------------------------
// Custom showcase variables
let currentFrameIndex = 0;  // Track the current frame
const showcaseFrames = document.querySelectorAll('.show-item');  // All showcase frames
const showcaseIndicators = document.querySelectorAll('.indicator');  // Navigation indicators

// Function to display a specific showcase frame
function displayFrame(frameIndex) {
  showcaseFrames.forEach((frame, index) => {
    frame.classList.remove('active');  // Remove 'active' from all frames
    showcaseIndicators[index].classList.remove('active');  // Remove 'active' from all indicators
  });

  showcaseFrames[frameIndex].classList.add('active');  // Show the current frame
  showcaseIndicators[frameIndex].classList.add('active');  // Activate the current indicator
}

// Function to automatically move to the next frame
function advanceFrame() {
  currentFrameIndex = (currentFrameIndex + 1) % showcaseFrames.length;  // Loop over frames
  displayFrame(currentFrameIndex);  // Display the next frame
}

// Automatically change frames every 3 seconds
setInterval(advanceFrame, 3000);  // Adjust the timing as needed

// Vision and Values Toggle functionality
const toggleHeaders = document.querySelectorAll('.toggle-header');

// Toggle the visibility of the content when the header is clicked
toggleHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const contentSection = header.parentElement;
    contentSection.classList.toggle('active');
  });
});
//-------------------home page testimonial section 2 starts here
// Testimonial data
const testimonials = [
    {
      text: "Manohar International have been a long-term supplier of ours and are a delight to work with. They are professional, responsive and very effective at what they do. They are very keenly focused on our needs and are always flexible in meeting our requirements. I would highly recommend them.",
      client: "CELINE DIANA",
    },
    {
      text: "Brittany Arthur has been instrumental in guiding our strategic initiatives. Her insight into market dynamics and ability to create value-based solutions is second to none.",
      client: "BRITTANY ARTHUR",
    },
    {
      text: "Tijana Cecevic has a gift for understanding what clients need even before they do. She's an asset to any project, and her attention to detail is outstanding.",
      client: "TIJANA CECEVIC",
    }
  ];
  
  let currentTestimonial = 0;
  
  // HTML elements
  const testimonialText = document.getElementById("testimonial-text");
  const clientElements = document.querySelectorAll(".client");
  
  // Function to update testimonial text and active client
  function updateTestimonial(index) {
    testimonialText.innerText = testimonials[index].text;
    
    // Remove active class from all clients
    clientElements.forEach(client => client.classList.remove("active"));
    
    // Add active class to current client
    clientElements[index].classList.add("active");
  }
  
  // Previous button event
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonial);
  });
  
  // Next button event
  document.getElementById("next-btn").addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
  });
  
  // Auto slide function
  function autoSlide() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
  }
  
  // Set interval for auto sliding every 5 seconds
  setInterval(autoSlide, 5000);
  
  // Manually click on clients to select the testimonial
  clientElements.forEach((client, index) => {
    client.addEventListener("click", () => {
      currentTestimonial = index;
      updateTestimonial(index);
    });
  });
  
  // Initial display
  updateTestimonial(currentTestimonial);
   /*--------------------------script for sec-10 starts here-------------------*/ 
 // script.js
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const updateCount = (counter) => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = 800; // Adjust speed if needed
      const increment = target / speed;

      if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => updateCount(counter), 1);
      } else {
          counter.innerText = target.toLocaleString();
      }
  };

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when at least 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              updateCount(counter);
              observer.unobserve(counter); // Stop observing after animation starts
          }
      });
  }, observerOptions);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
/*---------------------experience js ends here------------------*/
/*--------------------------script for sec-10 ends here-------------------*/ 
/*-----------------------js for filtering out different categories in the product page starts ------------*/
function filterProducts(category){
  const products=document.querySelectorAll('.product1');
  products.forEach(product=>{
    if(category==='all'){
      product.style.display='block';
    }
    else{
      if(product.classList.contains(category)){
        product.style.display='block';
      }
      else{
        product.style.display="none";
      }
    }
  });
}
/*-----------------------js for filtering out different categories in the product page ends ------------*/
/*-----------------------js for contact form submission to whatsapp starts here  ------------*/
function sendToWhatsApp(e){
  e.preventDefault(); // this line of code prevents the form from default submission
  const names=document.getElementById('name').value;
  const phonenumber= document.getElementById('no').value;
  const emailaddress=document.getElementById('e-mail').value;
  const textmessage= document.getElementById('messages').value;
  const whatsappNumber = '9903461766';
  const whatsappMessage = `Name: ${names}%0AMobile: ${phonenumber}%0AEmail: ${emailaddress}%0AMessage: ${textmessage}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    //redirect to whatsapp
    window.open(whatsappURL,'_blank');
}
/*-----------------------js for contact form submission to whatsapp ends here  ------------*/
/*-----------------------js for product section starts here  ------------*/
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,  // Display 4 slides at a time
  spaceBetween: 30,  // Space between slides
  loop: true,        // Loop through slides
  autoplay: {
      delay: 3000,  // Autoplay delay of 3 seconds
      disableOnInteraction: false,  // Continue autoplay after interaction
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,  // Allow users to click on the pagination bullets
  },
});
/*-----------------------js for product section ends here  ------------*/

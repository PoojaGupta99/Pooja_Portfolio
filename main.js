
    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    
    // Modal Logic
    function openModal(service) {
      const modal = document.getElementById("myModal");
      const title = document.getElementById("modalTitle");
      const text = document.getElementById("modalText");

      if(service === "webDev") {
        title.innerText = "Web Development";
        text.innerText = "Fast, responsive, and SEO-friendly websites tailored to your needs.\nExpertise in HTML, CSS, JavaScript, and modern frameworks like React.";
      } else if(service === "uiux") {
        title.innerText = "UI/UX Design";
        text.innerText = "Clean, creative, and user-friendly interface designs for better engagement.\nWireframes, prototypes, and visually appealing layouts to enhance usability.";
      } else if(service === "responsive") {
        title.innerText = "Responsive Design";
        text.innerText = "Mobile-first approach ensuring smooth experience on all screen sizes.\nCross-browser compatibility with optimized performance and accessibility.";
      }

      modal.style.display = "flex";
    }

    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }
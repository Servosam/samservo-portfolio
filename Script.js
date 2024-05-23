document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.navmenu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            const targetSection = document.querySelector(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    var contactInfoModal = document.getElementById("contactInfoModal");
    var contactInfoBtn = document.getElementById("contactInfoBtn");
    var downloadCvBtn = document.getElementById("downloadCvBtn");
    var closeBtn = document.getElementsByClassName("close")[0];

    downloadCvBtn.onclick = function() {
        contactInfoModal.style.display = "block";
    }

  
    closeBtn.onclick = function() {
        contactInfoModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == contactInfoModal) {
            contactInfoModal.style.display = "none";
        }
    }

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50; 

            if (scrollPosition >= sectionTop) {
                const sectionId = section.getAttribute('id');
                document.querySelectorAll('.navmenu a').forEach(link => {
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });
});

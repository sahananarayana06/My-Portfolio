AOS.init();

// Semester Details Logic
function showSemester(sem, btn) {
      const details = document.getElementById('semester-details');
      document.querySelectorAll('.btn').forEach(b=>b.classList.remove('active'));
      if(btn) btn.classList.add('active');

      let content = '';
      switch(sem) {
        case 1:
          content = `<h3>Semester 1</h3><br><p><strong>CGPA:</strong> <span class="cgpa-value">9.17</span></p><ul><li>Fundamentals of Computers</li><li>Programming in C</li><li>Mathematics</li><li>Environmental Studies</li></ul><br><p><strong>Mini Project:</strong> <ul><li>TO-Do List in C</li></ul></p>`;
          break;
        case 2:
          content = `<h3>Semester 2</h3><br><p><strong>CGPA:</strong> <span class="cgpa-value">9.26</span></p><ul><li>Data Structures</li><li>OOP Concepts</li><li>Public Finance</li></ul><br><p><strong>Mini Project:</strong> <ul><li>Stack-based "Browser History" Simulator</li></ul></p>`;
          break;
        case 3:
          content = `<h3>Semester 3</h3><br><p><strong>CGPA:</strong> <span class="cgpa-value">9.28</span></p><ul><li>Database Management Systems</li><li>C# and DOT NET Framework</li><li>Computer Communication and  Networks</li></ul><br><p><strong>Mini Project:</strong><ul><li>Student Management System using C# and SQL Server</li></ul></p>`;
          break;
        case 4:
          content = `<h3>Semester 4</h3><br><p><strong>CGPA:</strong> <span class="cgpa-value">9.24</span></p><ul><li>Python Programming</li><li>Computer Multimedia & Animation</li><li>Operating System Concepts</li><li>India and Indian Constitution</li></ul><br><p><strong>Mini Project:</strong><ul><li>Finance Manager</li></ul></p>`;
          break;
        case 5:
          content = `<h3>Semester 5</h3><br><p><strong>CGPA:</strong> <span class="cgpa-value">9.34</span></p><ul><li>Design and Analysis of Algorithms</li><li>R programming</li><li>Software Engineering</li><li>Cloud Computing</li></ul><br><p><strong>Mini Project:</strong><ul><li>Portfolio Website</li><li>E-Commerce Website</li><li>Online Notes Sharing System</li></ul></p>`;
          break;
        case 6:
          content = `<h3>Semester 6</h3><br><p><strong>CGPA:</strong> <span class="cgpa-value">9.38</span></p><ul><li>Artificial Intelligence</li><li>PHP</li><li>Advanced Java</li></ul><br><p><strong>Academic Project:</strong><ul><li>Crime Record Management System</li><li>Market Analysis</li></ul></p>`;
          break;
      }
      details.innerHTML = content;
    }

    showSemester(6, document.querySelectorAll('.btn')[5]);

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send(
    'service_64ais8n', // Service ID
    'template_ykisq84', // Template ID
    {
      from_name: name,
      from_email: email,
      message: message,
    },
    '9pkuBI_6vudizlI6E' // Public Key
  )
  .then(function(response) {
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset(); 
  }, function(error) {
    alert('Failed to send message. Please try again.');
    console.error('EmailJS error:', error);
  });
});

// Show more/less functionality for project descriptions
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', function() {
    const desc = this.previousElementSibling; 
    const expanded = this.getAttribute('aria-expanded') === 'true';
    if (desc.classList.contains('truncated')) {
      desc.classList.remove('truncated');
      this.textContent = 'See less';
      this.setAttribute('aria-expanded', 'true');
    } else {
      desc.classList.add('truncated');
      this.textContent = 'See more';
      this.setAttribute('aria-expanded', 'false');
    }
  });
});

emailjs.init('9pkuBI_6vudizlI6E');

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#8b5cf6" },
    line_linked: { enable: true, distance: 150, color: "#8b5cf6", opacity: 0.3, width: 1 },
    move: { enable: true, speed: 2 }
  }
});

<a href="mailto:sahananarayana21@gmail.com" onclick="openEmail(event)" class="contact-card" aria-label="Email Sahana">
  <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail logo">
  <div>
    <h4>Gmail</h4>
    <p>sahananarayana21@gmail.com</p>
  </div>
</a>

<script>
function openEmail(event) {
  // Check if the user is on a desktop/laptop browser
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (!isMobile) {
    event.preventDefault(); // Stop default mailto: behavior on laptop
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sahananarayana21@gmail.com', '_blank');
  }
}
</script>

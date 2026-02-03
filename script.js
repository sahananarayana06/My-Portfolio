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
          content = `<h3>Semester 5 (Current)</h3><br><p><strong>CGPA:</strong> <span class="ongoing">Ongoing</span></p><ul><li>Design and Analysis of Algorithms</li><li>R programming</li><li>Software Engineering</li><li>Cloud Computing</li></ul><br><p><strong>Mini Project:</strong><ul><li>Portfolio Website</li><li>E-Commerce Website</li><li>Online Notes Sharing System</li></ul></p>`;
          break;
        case 6:
          content = `<h3>Semester 6</h3><br><ul><li>Cloud Computing</li><li>Cyber Security</li><li>Major Project</li></ul><br><p><strong>Internship:</strong> Industry Internship</p>`;
          break;
      }
      details.innerHTML = content;
    }

    showSemester(5, document.querySelector('.btn.active'));


// Show more/less functionality for project descriptions
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', function() {
    const desc = this.previousElementSibling; // The p.project-desc
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

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

if (window.AOS) {
  AOS.init({
    duration: 700,
    once: true,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  });
}

// Semester Details Logic
function showSemester(sem, btn) {
      const details = document.getElementById('semester-details');
      document.querySelectorAll('#education .semester-buttons .btn').forEach(b => b.classList.remove('active'));
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

// Give the hero a restrained 3D response on mouse/trackpad without affecting touch users.
const heroScene = document.querySelector('.hero-scene');
const finePointer = window.matchMedia('(pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroScene && finePointer && !reducedMotion) {
  let frame = null;

  heroScene.addEventListener('pointermove', (event) => {
    const bounds = heroScene.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      heroScene.style.setProperty('--scene-rotate-x', `${(-y * 9).toFixed(2)}deg`);
      heroScene.style.setProperty('--scene-rotate-y', `${(x * 12).toFixed(2)}deg`);
    });
  });

  heroScene.addEventListener('pointerleave', () => {
    if (frame) cancelAnimationFrame(frame);
    heroScene.style.setProperty('--scene-rotate-x', '0deg');
    heroScene.style.setProperty('--scene-rotate-y', '0deg');
  });
}

// A subtle particle field that links nearby points and gently responds to the pointer.
const particleCanvas = document.getElementById('particle-field');
const particleContext = particleCanvas && particleCanvas.getContext('2d');

if (particleContext) {
  let canvasWidth = 0;
  let canvasHeight = 0;
  let particles = [];
  let pointer = { x: -1000, y: -1000, active: false };
  let animationFrame = null;

  const resizeParticleField = () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    particleCanvas.width = Math.round(canvasWidth * pixelRatio);
    particleCanvas.height = Math.round(canvasHeight * pixelRatio);
    particleContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const count = Math.min(48, Math.max(16, Math.floor((canvasWidth * canvasHeight) / 28000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      radius: 0.8 + Math.random() * 1.3
    }));
  };

  const drawParticleField = () => {
    animationFrame = null;
    particleContext.clearRect(0, 0, canvasWidth, canvasHeight);

    particles.forEach((particle, index) => {
      if (!reducedMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1;

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < 86) {
            const force = (86 - distance) / 86 * 0.012;
            particle.x += dx / distance * force * 10;
            particle.y += dy / distance * force * 10;
          }
        }
      }

      particleContext.beginPath();
      particleContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      particleContext.fillStyle = 'rgba(196, 164, 255, 0.78)';
      particleContext.fill();

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 126) {
          particleContext.beginPath();
          particleContext.moveTo(particle.x, particle.y);
          particleContext.lineTo(other.x, other.y);
          particleContext.strokeStyle = `rgba(143, 105, 235, ${(1 - distance / 126) * 0.22})`;
          particleContext.lineWidth = 0.7;
          particleContext.stroke();
        }
      }

      if (pointer.active) {
        const distanceToPointer = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
        if (distanceToPointer < 150) {
          particleContext.beginPath();
          particleContext.moveTo(particle.x, particle.y);
          particleContext.lineTo(pointer.x, pointer.y);
          particleContext.strokeStyle = `rgba(116, 200, 255, ${(1 - distanceToPointer / 150) * 0.32})`;
          particleContext.lineWidth = 0.8;
          particleContext.stroke();
        }
      }
    });

    if (!reducedMotion && !document.hidden) {
      animationFrame = requestAnimationFrame(drawParticleField);
    }
  };

  const scheduleParticleDraw = () => {
    if (animationFrame !== null) return;
    if (reducedMotion) drawParticleField();
    else animationFrame = requestAnimationFrame(drawParticleField);
  };

  resizeParticleField();
  scheduleParticleDraw();
  window.addEventListener('resize', () => {
    resizeParticleField();
    scheduleParticleDraw();
  }, { passive: true });
  window.addEventListener('pointermove', (event) => {
    if (!finePointer) return;
    pointer = { x: event.clientX, y: event.clientY, active: true };
    if (reducedMotion) scheduleParticleDraw();
  }, { passive: true });
  window.addEventListener('pointerleave', () => {
    pointer.active = false;
    if (reducedMotion) scheduleParticleDraw();
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    } else if (!document.hidden) {
      scheduleParticleDraw();
    }
  });
}

// Pointer tilt and a matching light highlight turn the project cards into a 3D gallery.
const galleryCanTilt = finePointer && !reducedMotion && window.matchMedia('(hover: hover)').matches;

if (galleryCanTilt) {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty('--card-tilt-x', `${((0.5 - y) * 9).toFixed(2)}deg`);
      card.style.setProperty('--card-tilt-y', `${((x - 0.5) * 10).toFixed(2)}deg`);
      card.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--card-tilt-x', '0deg');
      card.style.setProperty('--card-tilt-y', '0deg');
      card.style.setProperty('--shine-x', '50%');
      card.style.setProperty('--shine-y', '50%');
    });
  });

  const educationCard = document.querySelector('#education .timeline-item');
  if (educationCard) {
    educationCard.addEventListener('pointermove', (event) => {
      const bounds = educationCard.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      educationCard.style.setProperty('--education-tilt-x', `${((0.5 - y) * 5).toFixed(2)}deg`);
      educationCard.style.setProperty('--education-tilt-y', `${((x - 0.5) * 7).toFixed(2)}deg`);
    });

    educationCard.addEventListener('pointerleave', () => {
      educationCard.style.setProperty('--education-tilt-x', '0deg');
      educationCard.style.setProperty('--education-tilt-y', '0deg');
    });
  }
}


// Contact links and message form get subtle 3D depth on mouse/trackpad devices.
if (galleryCanTilt) {
  const contactTargets = [
    ...document.querySelectorAll('#contact .contact-card'),
    document.querySelector('#contact .contact-form')
  ].filter(Boolean);

  contactTargets.forEach((target) => {
    target.addEventListener('pointermove', (event) => {
      const bounds = target.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      target.style.setProperty('--contact-tilt-x', `${((0.5 - y) * 6).toFixed(2)}deg`);
      target.style.setProperty('--contact-tilt-y', `${((x - 0.5) * 8).toFixed(2)}deg`);
      target.style.setProperty('--contact-glow-x', `${(x * 100).toFixed(1)}%`);
      target.style.setProperty('--contact-glow-y', `${(y * 100).toFixed(1)}%`);
    });

    target.addEventListener('pointerleave', () => {
      target.style.setProperty('--contact-tilt-x', '0deg');
      target.style.setProperty('--contact-tilt-y', '0deg');
      target.style.setProperty('--contact-glow-x', '50%');
      target.style.setProperty('--contact-glow-y', '50%');
    });
  });
}

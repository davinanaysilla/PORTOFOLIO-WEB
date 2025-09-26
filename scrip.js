function createParticles() {
  const container = document.createElement('div');
  container.className = 'particles-container';
  document.querySelector('.hero').appendChild(container);
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
  }
}

function initTypingAnimation() {
  const heroTitle = document.querySelector('.hero-text h1');
  const originalText = heroTitle.innerHTML;
  
  heroTitle.innerHTML = '';
  heroTitle.classList.add('typing-animation');
  
  let i = 0;
  const typing = setInterval(() => {
    if (i < originalText.length) {
      heroTitle.innerHTML += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      setTimeout(() => {
        heroTitle.classList.remove('typing-animation');
        heroTitle.innerHTML = originalText;
      }, 2000);
    }
  }, 100);
}

function createCursorTrail() {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-pink);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(1.5)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });
}

function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(to right, var(--light-pink), var(--primary-pink));
    z-index: 1001;
    transition: width 0.1s;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  initTypingAnimation();
  createCursorTrail();
  createScrollProgress();
  
  document.querySelector('.logo').classList.add('animated-gradient');
  document.querySelector('h2').classList.add('animated-gradient');
});

function initParallax() {
  const sections = document.querySelectorAll('.about, .skills');
  sections.forEach(section => {
    section.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))`;
    section.classList.add('parallax');
  });
}

function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-line-1');
  
  typingElement.style.animation = 'none';
  
  void typingElement.offsetWidth;
  
  typingElement.style.animation = 'typing 4s steps(40, end) forwards, blink-caret 0.75s step-end infinite';
}

document.addEventListener('DOMContentLoaded', function() {
  initTypingAnimation();
});

function initResumeDownload() {
  const downloadBtn = document.querySelector('a[href*="resume"]');
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      if (!checkFileExists(this.href)) {
        e.preventDefault();
        showDownloadError();
        return;
      }
      
      this.classList.add('loading');
      
      setTimeout(() => {
        this.classList.remove('loading');
        this.classList.add('success');
        
        setTimeout(() => {
          this.classList.remove('success');
        }, 2000);
      }, 1000);
    });
  }
}

function checkFileExists(url) {
  return true;
}

function showDownloadError() {
  const errorModal = document.createElement('div');
  errorModal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    z-index: 10000;
    text-align: center;
    max-width: 300px;
  `;
  
  errorModal.innerHTML = `
    <h3 style="color: var(--primary-pink); margin-bottom: 10px;">File Tidak Ditemukan</h3>
    <p style="margin-bottom: 15px;">File resume sedang dalam proses update. Silakan hubungi via email untuk request resume.</p>
    <button onclick="this.parentElement.remove()" style="
      background: var(--primary-pink);
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      cursor: pointer;
    ">OK</button>
  `;
  
  document.body.appendChild(errorModal);
  
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
  `;
  overlay.onclick = () => {
    errorModal.remove();
    overlay.remove();
  };
  
  document.body.appendChild(overlay);
}

function setupResumeFallback() {
  const downloadBtn = document.querySelector('a[href*="resume"]');
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
        e.preventDefault();
        window.location.href = 'mailto:davinanaysilla@gmail.com?subject=Request Resume&body=Halo Davina, saya tertarik untuk mendapatkan resume Anda.';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  initTypingAnimation();
  createCursorTrail();
  createScrollProgress();
  initResumeDownload(); 
  setupResumeFallback(); 
  
  document.querySelector('.logo').classList.add('animated-gradient');
  document.querySelector('h2').classList.add('animated-gradient');

});


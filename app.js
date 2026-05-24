// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. NAVIGATION & MOBILE BURGER MENU
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('mobile-nav-open');
    });

    // Close menu when links are clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('mobile-nav-open');
      });
    });
  }

  // Active section nav highlighting on scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120; // offset for sticky header

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });


  /* ==========================================================================
     2. INTERACTIVE TIMELINE BULLET EXPANDERS
     ========================================================================== */
  const toggleButtons = document.querySelectorAll('.btn-toggle-bullets');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetList = document.getElementById(targetId);
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (targetList) {
        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          btn.textContent = 'Show Achievements';
          targetList.classList.remove('expanded-bullets');
          targetList.classList.add('collapsed-bullets');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          btn.textContent = 'Hide Achievements';
          targetList.classList.remove('collapsed-bullets');
          targetList.classList.add('expanded-bullets');
        }
      }
    });
  });


  /* ==========================================================================
     3. NATIVE DIALOG MODAL CONTROLLER & FALLBACKS
     ========================================================================== */
  // denml Modal
  const modalDenml = document.getElementById('modal-denml');
  const btnOpenDenml = document.getElementById('open-denml-modal');
  const btnCloseDenml = document.getElementById('close-denml-modal');

  if (modalDenml && btnOpenDenml && btnCloseDenml) {
    btnOpenDenml.addEventListener('click', () => modalDenml.showModal());
    btnCloseDenml.addEventListener('click', () => modalDenml.close());
    setupDialogBackdropClose(modalDenml);
  }

  // New Bharat Skills Modal
  const modalBharat = document.getElementById('modal-bharat');
  const btnOpenBharat = document.getElementById('open-bharat-modal');
  const btnCloseBharat = document.getElementById('close-bharat-modal');

  if (modalBharat && btnOpenBharat && btnCloseBharat) {
    btnOpenBharat.addEventListener('click', () => modalBharat.showModal());
    btnCloseBharat.addEventListener('click', () => modalBharat.close());
    setupDialogBackdropClose(modalBharat);
  }

  // Backdrop click close fallback handler for older/unsupporting browsers
  function setupDialogBackdropClose(dialogEl) {
    // If browser supports native closedby attribute, let it handle dismissal
    if ('closedBy' in HTMLDialogElement.prototype) {
      dialogEl.setAttribute('closedby', 'any');
      return;
    }

    // Fallback backdrop click logic
    dialogEl.addEventListener('click', (event) => {
      if (event.target !== dialogEl) return;

      const rect = dialogEl.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInside) {
        dialogEl.close();
      }
    });
  }


  /* ==========================================================================
     4. AI PORTFOLIO ASSISTANT CHATBOT ENGINE
     ========================================================================== */
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const chatForm = document.getElementById('chat-input-form');
  const chatInput = document.getElementById('chat-input');
  const suggestBtns = document.querySelectorAll('.suggested-prompt-btn');

  // Pre-programmed Q&A knowledge base
  const knowledgeBase = [
    {
      keywords: ['role', 'current', 'job', 'work', 'oracle', 'position'],
      answer: "Sushant is currently a <strong>Principal Consultant</strong> at <strong>Oracle India</strong> (joined Jan 2025). He leads client relationships and delivery teams of 6-13 engineers building digital banking platforms (OBDX) and core systems (FLEXCUBE) across Middle East and Africa."
    },
    {
      keywords: ['ai', 'agentic', 'agent', 'orchestration', 'llm', 'generative', 'rag'],
      answer: "Sushant is an <strong>Agentic AI Specialist</strong>. He is certified as an <strong>OCI Generative AI Professional</strong>. He integrates multi-agent systems and LLM orchestration (LangChain, OpenAI API) directly into digital banking onboarding, compliance tasks, and EdTech pipelines (like <em>New Bharat Skills</em>)."
    },
    {
      keywords: ['tech', 'stack', 'skills', 'languages', 'framework', 'java', 'spring'],
      answer: "His core technical stacks are built around: <br>• <strong>Back-end:</strong> Java, Spring Boot, REST APIs, Microservices, Kafka, Hibernate/JPA, JUnit.<br>• <strong>Front-end:</strong> AngularJS, JavaScript, CSS/HTML.<br>• <strong>DB & Cloud:</strong> AWS (EC2), PostgreSQL, Oracle DB, MongoDB, Docker, CI/CD pipelines."
    },
    {
      keywords: ['banking', 'platform', 'obdx', 'flexcube', 'finance', 'deploy'],
      answer: "Sushant has over a decade of core banking domain experience. He has deployed and optimized <strong>Oracle OBDX</strong> (digital banking) for clients like Abu Dhabi Bank, and developed <strong>Oracle FLEXCUBE</strong> enhancements. Previously at IBM, he managed 13 critical applications supporting millions of banking transactions with a 99.9% uptime SLA."
    },
    {
      keywords: ['denml', 'denml.com'],
      answer: "<strong>denml.com</strong> is Sushant's self-built AI-powered web platform. It leverages multi-agent workflows to automate content generation, semantic searches, and document synthesis, deployed on AWS with full CI/CD integrations."
    },
    {
      keywords: ['bharat', 'skills', 'edtech'],
      answer: "<strong>New Bharat Skills</strong> is an EdTech platform designed by Sushant to bridge the digital skills gap in emerging tier-2/3 Indian cities. It uses autonomous AI agents to construct personalized reading plans, auto-generate course contents, and handle student tutoring requests at scale."
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'social', 'linkedin'],
      answer: "You can reach Sushant at: <br>• <strong>Email:</strong> <a href='mailto:sushant.saj@gmail.com'>sushant.saj@gmail.com</a><br>• <strong>Phone:</strong> <a href='tel:+917400191131'>+91 7400191131</a><br>• <strong>LinkedIn:</strong> <a href='https://linkedin.com/in/thesushantanand' target='_blank'>linkedin.com/in/thesushantanand</a>"
    },
    {
      keywords: ['experience', 'years', 'history', 'ibm', 'wipro', 'synergy'],
      answer: "Sushant has <strong>10+ years of professional experience</strong>. In addition to Oracle, he worked as a Lead Technical Advisor at <strong>IBM India</strong> (Aug 2023 - Dec 2024), a Senior Project Engineer at <strong>Wipro</strong> (2020 - 2023), and a Senior Developer building CSR applications at <strong>Synergy Connect</strong> (2017 - 2020)."
    },
    {
      keywords: ['education', 'college', 'degree', 'study', 'university', 'bhopal'],
      answer: "He holds a <strong>Bachelor of Engineering in Computer Science & Engineering</strong> (Graduated in 2014) with a cumulative CGPA of 6.89/10. He also volunteered as a coordinator at NIIST Bhopal during his studies."
    }
  ];

  // Process message submission
  if (chatForm && chatInput && chatMessagesContainer) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const messageText = chatInput.value.trim();
      if (!messageText) return;

      // Render user message
      renderMessage(messageText, 'msg-user');
      chatInput.value = '';

      // Trigger chatbot response
      processBotResponse(messageText);
    });

    // Suggested prompts trigger
    suggestBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const queryText = btn.getAttribute('data-query');
        renderMessage(queryText, 'msg-user');
        processBotResponse(queryText);
      });
    });
  }

  function renderMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.innerHTML = text;
    
    msgDiv.appendChild(bubbleDiv);
    chatMessagesContainer.appendChild(msgDiv);
    
    // Auto-scroll to the bottom of the container
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  function processBotResponse(queryText) {
    // Render typing state
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message msg-bot';
    typingDiv.id = 'typing-indicator';
    
    const typingBubble = document.createElement('div');
    typingBubble.className = 'message-bubble';
    typingBubble.innerHTML = `
      <div class="typing-dots">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    
    typingDiv.appendChild(typingBubble);
    chatMessagesContainer.appendChild(typingDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Evaluate message matching
    const queryLower = queryText.toLowerCase();
    let bestMatch = null;
    let maxMatches = 0;

    for (const entry of knowledgeBase) {
      let matches = 0;
      for (const kw of entry.keywords) {
        if (queryLower.includes(kw)) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = entry;
      }
    }

    // Prepare reply text
    let replyText = "";
    if (bestMatch && maxMatches > 0) {
      replyText = bestMatch.answer;
    } else {
      replyText = "I'm not fully sure about that detail, but you can ask me about his <strong>current Oracle role</strong>, <strong>Agentic AI experience</strong>, <strong>banking tools</strong>, <strong>certifications</strong>, or project work like <strong>denml.com</strong>.";
    }

    // Delay response to simulate dynamic Agent execution (1.5s)
    setTimeout(() => {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) {
        indicator.remove();
      }
      renderMessage(replyText, 'msg-bot');
    }, 1200);
  }


  /* ==========================================================================
     5. SCROLL-REVEAL OBSERVERS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  /* ==========================================================================
     6. CONTACT FORM HANDLING & VALIDATION
     ========================================================================== */
  const contactForm = document.getElementById('portfolio-contact-form');
  const successToast = document.getElementById('form-success-message');
  const btnSubmit = document.getElementById('btn-submit');

  if (contactForm && successToast && btnSubmit) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Lock button and simulate dispatch
      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Sending Message...';

      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Render success message
        successToast.style.display = 'block';
        
        // Unlock button
        btnSubmit.disabled = false;
        btnSubmit.textContent = 'Send Message';

        // Hide success message after 5 seconds
        setTimeout(() => {
          successToast.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }

});

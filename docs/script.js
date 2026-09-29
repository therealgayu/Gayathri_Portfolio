document.addEventListener("DOMContentLoaded", function () {
  // ==========================================================
  // 1. CENTRALIZED LINK & PROJECT CONFIGURATION (EASY EDIT)
  // ==========================================================
  const portfolioLinks = {
    github: "https://github.com/therealgayu",
    linkedin: "https://www.linkedin.com/in/gayathri-14b61b28b",
    email: "gayathritafs@gmail.com",
  };

  const projectLinks = {
    idsSecureSdn: {
      github: "https://github.com/Cube14/capstone",
    },
    synergy: {
      github:
        "https://github.com/therealgayu/Synergy-Smart-Street-Light-Management-System",
    },
    schoolMgmt: {
      github: "https://github.com/therealgayu/student_management_system",
    },
    predictiveSpoilage: {
      github:
        "https://github.com/therealgayu/Adyu-Predictive-Spoilage-Smart-Dispatch-System",
    },
    cyberforensicsTrainer: {
      github:
        "https://github.com/therealgayu/CyberForensics-Simulation-Trainer-for-Law-Enforcement-Professionals",
    },
    qrng: {
      github: "https://github.com/therealgayu/IBM_Quantum_RNG",
    },
    sdnHoneypots: {
      github:
        "https://github.com/therealgayu/Threat-Detection-and-Analysis-in-SDN-with-Honeypots",
    },
  };

  // Replace the raw link targets in the static DOM with our config objects
  function bindStaticUrls() {
    const urls = {
      github: portfolioLinks.github,
      linkedin: portfolioLinks.linkedin,
      email: `mailto:${portfolioLinks.email}`,
    };
    const labels = {
      github: "@" + portfolioLinks.github.split("/").pop(),
      email: portfolioLinks.email,
    };

    document.querySelectorAll("[data-link]").forEach((el) => {
      el.href = urls[el.dataset.link];
    });
    document.querySelectorAll("[data-link-text]").forEach((el) => {
      el.textContent = labels[el.dataset.linkText];
    });
  }
  bindStaticUrls();

  const projectPages = {
    web: {
      title: "Web Projects",
      subtitle: "Web applications and full-stack projects",
      containerId: "web-projects-grid",
    },

    systems: {
      title: "Systems Projects",
      subtitle: "Cybersecurity, systems, and research projects",
      containerId: "systems-projects-grid",
    },

    // Example for future page:
    // ai: {
    //   title: "AI Projects",
    //   subtitle: "Artificial intelligence and machine learning projects",
    //   containerId: "ai-projects-grid",
    // },
  };

  // ==========================================
  // 1.5. DETAILED DYNAMIC PROJECT DATA
  // ==========================================
  const projects = [
    // --- Web / Full-Stack Projects ---
    {
      id: "ids-sdn",
      title: "AI-Powered Intrusion Detection System for SDN",
      description:
        "A full-stack AI-Driven IDS dashboard visualizing real-time alerts, logs, attack classification, traffic patterns, IP-level analysis, and anomaly trends with an integrated ML model for automated malicious traffic detection.",
      image: "public/projects/ids-sdn.png",
      technologies: ["MERN", "Mininet", "Ryu", "Snort", "Docker", "Jenkins"],
      github: projectLinks.idsSecureSdn.github,
      category: "web",
      featured: true,
    },
    {
      id: "predictive-spoilage",
      title: "Predictive Spoilage System",
      description:
        "A web dashboard that predicts spoilage risk for perishable produce and flowers, and recommends whether to redirect, prioritize dispatch, or route to a rescue channel.",
      image: "public/projects/predictive-spoilage.png",
      technologies: [
        "React (Vite)",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "scikit-learn",
      ],
      github: projectLinks.predictiveSpoilage.github,
      category: "web",
      featured: false,
      icon: "fa-solid fa-leaf",
    },
    {
      id: "synergy",
      title: "Synergy — Smart Street Light Management System",
      description:
        "A Java desktop application to streamline smart streetlight maintenance and fault tracking, with an admin interface to report, monitor, and resolve faults and automated maintenance workflows.",
      image: "public/projects/synergy.png",
      technologies: ["Java", "Desktop App", "Structured Data Handling"],
      github: projectLinks.synergy.github,
      category: "web",
      featured: false,
    },
    {
      id: "school-management",
      title: "School Management System — Tkinter GUI",
      description:
        "A GUI-based School Management System for managing student records and administrative data, with interactive forms for data entry, updates, and record retrieval.",
      image: "public/projects/school-management.png",
      technologies: ["Python", "Tkinter", "GUI"],
      github: projectLinks.schoolMgmt.github,
      category: "web",
      featured: false,
    },

    // --- Research / Systems Projects ---

    {
      id: "cyberforensics-trainer",
      title: "CyberForensics Simulation Trainer",
      description:
        "An AI-driven forensics training platform for investigators to solve realistic cybercrime cases through natural language interaction.",
      image: "public/projects/cyberforensics-trainer.png",
      technologies: ["MERN Stack", "Ollama (Gemma 3 1B)", "JWT"],
      github: projectLinks.cyberforensicsTrainer.github,
      category: "systems",
      featured: false,
      icon: "fa-solid fa-user-secret",
    },

    {
      id: "sdn-honeypots",
      title: "Threat Detection in SDN using Hybrid Honeypots",
      description:
        "SDN threat detection and honeypot architectures with a hybrid honeypot framework, automated redirection and behavioral detection.",
      image: "",
      technologies: ["Mininet", "Ryu", "Honeypots", "Network Security"],
      github: projectLinks.sdnHoneypots.github,
      category: "systems",
      featured: false,
      icon: "fa-solid fa-shield-virus",
    },
    {
      id: "qrng-ibm",
      title: "Quantum Random Number Generator",
      description:
        "Explored quantum computing fundamentals and circuit design on the IBM Quantum Platform, implementing a QRNG using quantum superposition principles.",
      image: "",
      technologies: ["IBM Qiskit", "Quantum Computing", "Python"],
      github: projectLinks.qrng.github,
      category: "systems",
      featured: false,
      icon: "fa-solid fa-atom",
    },
  ];

  // ==========================================
  // PROJECT DETAILS POPUP CONTENT (edit bullets here)
  // ==========================================
  const projectDetails = {
    "ids-sdn": [
      "Full-stack MERN dashboard with secure authentication for monitoring an SDN",
      "Visualizes real-time alerts, logs, and attack classification",
      "Traffic pattern, IP-level analysis, and anomaly trend views",
      "SDN simulated with Mininet and controlled through Ryu",
      "Integrated ML model for automated malicious traffic detection",
    ],
    "predictive-spoilage": [
      "EDIT: what problem the system solves",
      "EDIT: how the prediction works (model / data used)",
      "EDIT: main features or dashboard views",
      "EDIT: your role and tech stack",
    ],
    synergy: [
      "Java desktop application for smart streetlight maintenance and fault tracking",
      "Admin interface to report, monitor, and resolve faults",
      "Automated maintenance workflows",
      "Structured data handling for fault records",
    ],
    "school-management": [
      "GUI-based system built with Python and Tkinter",
      "Manages student records and administrative data",
      "Interactive forms for data entry, updates, and record retrieval",
    ],
    "cyberforensics-trainer": [
      "AI-driven platform for investigators to solve realistic cybercrime cases using natural language",
      "DAG-based evidence dependency system",
      "Three-tier evaluation pipeline: Jaccard similarity, LLM arbitration, hint fallback",
      "Admin Case Builder with draft → preview → publish workflow",
      "AI report evaluator that scores trainee submissions",
      "Built with the MERN stack, Ollama (Gemma 3 1B), and JWT authentication",
    ],
    "qrng-ibm": [
      "Explored fundamentals of quantum computing and circuit design on the IBM Quantum Platform",
      "Implemented a Quantum Random Number Generator using quantum superposition",
      "Simulated quantum circuits and analyzed probabilistic output distributions",
      "Strengthened understanding of qubits, gates, and measurement operations",
    ],
    "sdn-honeypots": [
      "Researched existing SDN threat detection and honeypot architectures",
      "Designed a hybrid honeypot framework that redirects suspicious traffic via the controller",
      "Integrated an automated redirection algorithm",
      "Implemented behavioral detection logic",
      "Simulated using Mininet with the Ryu SDN controller",
    ],
  };

  // ==========================================
  // 2. DYNAMICALLY RENDER PROJECTS BY CATEGORY
  // ==========================================
  function createTechBadgesHTML(techArray) {
    return techArray
      .map((tech) => `<span class="skill-badge">${tech}</span>`)
      .join("");
  }

  function createLinksHTML(project) {
    let linksHTML = "";

    if (project.github) {
      const isPlaceholder = project.github.startsWith("GITHUB_");
      const displayUrl = isPlaceholder ? "#" : project.github;
      const extraClass = isPlaceholder ? "disabled-placeholder" : "";
      linksHTML += `<a href="${displayUrl}" target="_blank" class="btn btn-secondary ${extraClass}" aria-label="GitHub Repository"><i class="fab fa-github"></i> GitHub</a>`;
    }

    if (projectDetails[project.id]) {
      linksHTML += `<button class="btn btn-secondary open-modal-trigger" data-project="${project.id}"><i class="fas fa-list-ul"></i> Details</button>`;
    }

    return linksHTML;
  }

  function createProjectCard(project) {
    let imageHTML = "";

    if (project.image && project.image !== "") {
      imageHTML = `
      <img
        src="${project.image}"
        alt="${project.title}"
        onerror="this.outerHTML='<div class=\\'project-placeholder-img\\'><i class=\\'${project.icon || "fa-solid fa-code"}\\'></i><span>${project.title}</span></div>';"
      >
    `;
    } else {
      imageHTML = `
      <div class="project-placeholder-img">
        <i class="${project.icon || "fa-solid fa-laptop-code"}"></i>
        <span>${project.title}</span>
      </div>
    `;
    }

    const card = document.createElement("div");

    card.className = "project-card";

    card.innerHTML = `
    <div class="project-image-wrapper">
      ${imageHTML}
    </div>

    <div class="project-info">

      <h3>${project.title}</h3>

      <div class="project-tech">
        ${createTechBadgesHTML(project.technologies)}
      </div>

      <p>${project.description}</p>

      <div class="project-links">
        ${createLinksHTML(project)}
      </div>

    </div>
  `;

    return card;
  }

  function renderProjectPage(category, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    const categoryProjects = projects.filter(
      (project) => project.category === category,
    );

    categoryProjects.forEach((project) => {
      container.appendChild(createProjectCard(project));
    });
  }
  // Render projects
  Object.entries(projectPages).forEach(([category, page]) => {
    renderProjectPage(category, page.containerId);
  });

  // Attach click events to dynamic disabled links
  function setupDisabledLinks() {
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".disabled-placeholder");
      if (btn) {
        e.preventDefault();
        alert(
          "This link is currently in development. Dynamic URLs can be configured at the top of script.js.",
        );
      }
    });
  }
  setupDisabledLinks();

  // =========================================================
  // 2.5 MANUAL HORIZONTAL CAROUSEL BUTTONS TRANSLATE LOGIC
  // =========================================================
  function setupCarouselSlider(trackId, prevBtnId, nextBtnId, cardWidth, gap) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    if (!track || !prevBtn || !nextBtn) return;

    const container = track.parentElement;
    const step = cardWidth + gap;

    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -step, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: step, behavior: "smooth" });
    });
  }

  // 2.6 NEW PREMIUM 3D COVERFLOW DECK SLIDER FOR CERTIFICATIONS
  function setup3DCertsSlider(trackId, prevBtnId, nextBtnId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    if (!track || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll(".cert-item");
    if (cards.length === 0) return;

    let activeIndex = 0;
    const totalCards = cards.length;

    function update3DPositions() {
      const isMobile = window.innerWidth <= 768;
      const xOffsetShort = 160;
      const xOffsetFar = 280;
      const scaleShort = 0.82;
      const scaleFar = 0.68;
      const rotShort = 25;
      const rotFar = 40;

      cards.forEach((card, index) => {
        let offset = index - activeIndex;

        // Infinite loop calculations
        if (offset > 2) offset -= totalCards;
        if (offset < -2) offset += totalCards;

        let transformStr = "";
        let opacity = 0;
        let zIndex = 0;
        let pointerEvents = "none";

        if (offset === 0) {
          // Center active card
          transformStr = "translateX(0) scale(1) translateZ(0) rotateY(0deg)";
          opacity = 1;
          zIndex = 10;
          pointerEvents = "auto";
          card.classList.add("active-cert");
        } else if (isMobile) {
          // On mobile, hide all non-active cards to prevent layout spill
          transformStr = `translateX(${offset * 120}px) scale(0.5) translateZ(-100px)`;
          opacity = 0;
          zIndex = 0;
          pointerEvents = "none";
          card.classList.remove("active-cert");
        } else if (offset === 1) {
          // Right card
          transformStr = `translateX(${xOffsetShort}px) scale(${scaleShort}) translateZ(-80px) rotateY(-${rotShort}deg)`;
          opacity = 0.65;
          zIndex = 5;
          pointerEvents = "auto";
          card.classList.remove("active-cert");
        } else if (offset === -1) {
          // Left card
          transformStr = `translateX(-${xOffsetShort}px) scale(${scaleShort}) translateZ(-80px) rotateY(${rotShort}deg)`;
          opacity = 0.65;
          zIndex = 5;
          pointerEvents = "auto";
          card.classList.remove("active-cert");
        } else if (offset === 2) {
          // Far right card
          transformStr = `translateX(${xOffsetFar}px) scale(${scaleFar}) translateZ(-160px) rotateY(-${rotFar}deg)`;
          opacity = 0.25;
          zIndex = 2;
          pointerEvents = "auto";
          card.classList.remove("active-cert");
        } else if (offset === -2) {
          // Far left card
          transformStr = `translateX(-${xOffsetFar}px) scale(${scaleFar}) translateZ(-160px) rotateY(${rotFar}deg)`;
          opacity = 0.25;
          zIndex = 2;
          pointerEvents = "auto";
          card.classList.remove("active-cert");
        } else {
          // Hidden cards
          transformStr = `translateX(${offset * 150}px) scale(0.5) translateZ(-250px)`;
          opacity = 0;
          zIndex = 0;
          pointerEvents = "none";
          card.classList.remove("active-cert");
        }

        card.style.transform = transformStr;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
        card.style.pointerEvents = pointerEvents;
      });
    }

    prevBtn.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + totalCards) % totalCards;
      update3DPositions();
    });

    nextBtn.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % totalCards;
      update3DPositions();
    });

    // Mouse Drag / Swipe gestures
    let isDragging = false;
    let startX = 0;
    const dragThreshold = 50;

    track.style.cursor = "grab";

    track.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      track.style.cursor = "grabbing";
      e.preventDefault();
    });

    const handleDragEnd = (clientX) => {
      if (!isDragging) return;
      isDragging = false;
      track.style.cursor = "grab";

      const diffX = clientX - startX;
      if (diffX < -dragThreshold) {
        activeIndex = (activeIndex + 1) % totalCards;
        update3DPositions();
      } else if (diffX > dragThreshold) {
        activeIndex = (activeIndex - 1 + totalCards) % totalCards;
        update3DPositions();
      }
    };

    track.addEventListener("mouseup", (e) => {
      handleDragEnd(e.clientX);
    });

    track.addEventListener("mouseleave", (e) => {
      if (isDragging) {
        handleDragEnd(e.clientX);
      }
    });

    // Touch swipe gestures
    track.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        if (diffX < -dragThreshold) {
          activeIndex = (activeIndex + 1) % totalCards;
          update3DPositions();
        } else if (diffX > dragThreshold) {
          activeIndex = (activeIndex - 1 + totalCards) % totalCards;
          update3DPositions();
        }
      },
      { passive: true },
    );

    // Click on side cards to select them
    cards.forEach((card, idx) => {
      card.addEventListener("click", (e) => {
        if (idx !== activeIndex) {
          e.preventDefault();
          e.stopPropagation();
          activeIndex = idx;
          update3DPositions();
        }
      });
    });

    // Initialize positions
    update3DPositions();
    window.addEventListener("resize", update3DPositions);
  }

  // Auto-playing single-card infinite-loop carousel (always slides one direction)
  function setupSingleCardCarousel(trackId, prevBtnId, nextBtnId, dotsId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsWrap = document.getElementById(dotsId);
    if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

    const realCards = Array.from(track.children);
    const realCount = realCards.length;
    if (realCount === 0) return;

    // Clone the last card to the start and the first card to the end,
    // so the track can keep sliding one direction and loop seamlessly.
    const firstClone = realCards[0].cloneNode(true);
    const lastClone = realCards[realCount - 1].cloneNode(true);
    firstClone.setAttribute("aria-hidden", "true");
    lastClone.setAttribute("aria-hidden", "true");
    track.appendChild(firstClone);
    track.insertBefore(lastClone, realCards[0]);

    // currentPos: 0 = clone-of-last, 1..realCount = real cards, realCount+1 = clone-of-first
    let currentPos = 1;
    let autoplayTimer = null;
    let autoplayActive = true;

    function buildDots() {
      dotsWrap.innerHTML = "";
      for (let i = 0; i < realCount; i++) {
        const dot = document.createElement("button");
        dot.className = "exp-edu-dot";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => {
          stopAutoplay();
          goTo(i);
        });
        dotsWrap.appendChild(dot);
      }
      updateDots();
    }
    function activeDotIndex() {
      if (currentPos === 0) return realCount - 1;
      if (currentPos === realCount + 1) return 0;
      return currentPos - 1;
    }
    function updateDots() {
      const active = activeDotIndex();
      dotsWrap.querySelectorAll(".exp-edu-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === active);
      });
    }
    function moveTo(pos, animate) {
      const cardWidth = track.children[1].getBoundingClientRect().width;
      const gap = 24; // matches 1.5rem gap in CSS
      track.style.transition = animate ? "" : "none";
      track.style.transform = `translateX(-${pos * (cardWidth + gap)}px)`;
      if (!animate) {
        void track.offsetHeight; // force reflow so "none" applies before re-enabling
        track.style.transition = "";
      }
    }
    function update(animate = true) {
      moveTo(currentPos, animate);
      updateDots();
    }
    function goTo(realIndex) {
      currentPos = realIndex + 1;
      update(true);
    }
    function next() {
      currentPos += 1;
      update(true);
    }
    function prev() {
      currentPos -= 1;
      update(true);
    }

    // After sliding onto a clone, silently snap back to the matching real card
    track.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform") return;
      if (currentPos === realCount + 1) {
        currentPos = 1;
        moveTo(currentPos, false);
      } else if (currentPos === 0) {
        currentPos = realCount;
        moveTo(currentPos, false);
      }
    });

    function startAutoplay() {
      if (!autoplayActive) return;
      autoplayTimer = setInterval(next, 4000);
    }
    function stopAutoplay() {
      autoplayActive = false;
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    // Any interaction stops autoplay permanently
    prevBtn.addEventListener("click", () => {
      stopAutoplay();
      prev();
    });
    nextBtn.addEventListener("click", () => {
      stopAutoplay();
      next();
    });

    let startX = 0,
      isDragging = false;
    track.addEventListener(
      "touchstart",
      (e) => {
        stopAutoplay();
        startX = e.touches[0].clientX;
        isDragging = true;
      },
      { passive: true },
    );
    track.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const deltaX = e.changedTouches[0].clientX - startX;
      if (Math.abs(deltaX) > 40) {
        deltaX < 0 ? next() : prev();
      }
    });
    track.addEventListener("mousedown", (e) => {
      stopAutoplay();
      startX = e.clientX;
      isDragging = true;
    });
    track.addEventListener("mouseup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) > 40) {
        deltaX < 0 ? next() : prev();
      }
    });

    window.addEventListener("resize", () => update(false));

    buildDots();
    update(false);
    startAutoplay();
  }

  // Bind Web Dev (Card: 330px width, Gap: 2rem = 32px)
  setupCarouselSlider("web-projects-grid", "web-prev", "web-next", 330, 32);
  // Bind Certifications to new 3D Coverflow slider
  setup3DCertsSlider("certs-list-grid", "cert-prev", "cert-next");
  // Bind Experience & Education carousel (1 card at a time, autoplay 4s)
  setupSingleCardCarousel(
    "exp-edu-track",
    "exp-edu-prev",
    "exp-edu-next",
    "exp-edu-dots",
  );
  // Bind Achievements carousel (1 card at a time, autoplay 4s)
  setupSingleCardCarousel(
    "achievements-track",
    "achievements-prev",
    "achievements-next",
    "achievements-dots",
  );

  // ==========================================
  // 3. HORIZONTAL SCROLL & 3D TRANSFORMS
  // ==========================================
  const scrollContainer = document.querySelector(".scroll-container");
  const sections = document.querySelectorAll(".page-section");
  const navAnchors = document.querySelectorAll(".nav-anchor");
  const progressDots = document.querySelectorAll(".progress-dot");
  const pageNumberDisplay = document.getElementById("page-number-display");
  const themes = [
    "home",
    "about",
    "skills",
    "web",
    "systems",
    "experience",
    "certifications",
    "contact",
  ];

  let isAnimating = false;
  let currentPageIndex = 0;
  const numPages = sections.length;

  // Apply 3D perspective transformations dynamically on Scroll (Active page scale(1), adjacent scale(0.96))
  function handleScrollTransforms() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".page-content-wrapper").forEach((wrapper) => {
        wrapper.style.transform = "";
        wrapper.style.opacity = "";
      });
      return;
    }

    const scrollLeft = scrollContainer.scrollLeft;
    const width = window.innerWidth;

    sections.forEach((section, index) => {
      const offset = index * width;
      const distance = scrollLeft - offset;
      const progress = distance / width; // ranges -1 to 1

      const wrapper = section.querySelector(".page-content-wrapper");
      if (wrapper) {
        const clampedProgress = Math.max(-1, Math.min(1, progress));
        const rotateY = clampedProgress * -8;
        const translateZ = Math.abs(clampedProgress) * -120;
        const translateX = clampedProgress * 60;

        // Upgraded Animation System: Scale active 1.0, adjacent 0.96
        const scale = 1 - Math.abs(clampedProgress) * 0.04;
        // Upgraded Animation System: Opacity active 1.0, adjacent 0.5
        const opacity = 1 - Math.abs(clampedProgress) * 0.5;

        wrapper.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px) translateX(${translateX}px) scale(${scale})`;
        wrapper.style.opacity = opacity;
      }
    });
  }

  // Update active navbar links, progress dots, and dynamic body theme
  function updateActiveState(index) {
    if (index < 0 || index >= numPages) return;

    document.body.className = `theme-${themes[index]}`;

    navAnchors.forEach((anchor) => {
      anchor.classList.remove("active");
      if (parseInt(anchor.getAttribute("data-index")) === index) {
        anchor.classList.add("active");
      }
    });

    progressDots.forEach((dot) => {
      dot.classList.remove("active");
      if (parseInt(dot.getAttribute("data-index")) === index) {
        dot.classList.add("active");
      }
    });

    if (pageNumberDisplay) {
      pageNumberDisplay.textContent = `0${index + 1} / 08`;
    }
  }

  let scrollTicking = false;
  scrollContainer.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        handleScrollTransforms();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // ==========================================
  // 3.5 UNIFIED INTERSECTIONOBSERVER FOR ACTIVE STATE
  const sectionsArray = Array.from(sections);
  const pageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsArray.indexOf(entry.target);
          if (index !== -1) {
            currentPageIndex = index;
            updateActiveState(currentPageIndex);
          }
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    },
  );

  sections.forEach((section) => pageObserver.observe(section));

  // ==========================================
  // 4. MOUSE WHEEL TRANSLATION (Smooth Page-Snap)
  // ==========================================
  scrollContainer.addEventListener(
    "wheel",
    (e) => {
      if (window.innerWidth <= 768) return;

      e.preventDefault();
      if (isAnimating) return;

      if (e.deltaY > 0 && currentPageIndex < numPages - 1) {
        scrollToPageIndex(currentPageIndex + 1);
      } else if (e.deltaY < 0 && currentPageIndex > 0) {
        scrollToPageIndex(currentPageIndex - 1);
      }
    },
    { passive: false },
  );

  function scrollToPageIndex(index) {
    if (index < 0 || index >= numPages) return;

    isAnimating = true;
    currentPageIndex = index;

    if (window.innerWidth <= 768) {
      const targetSection = sections[index];
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // offset for fixed header
          behavior: "smooth",
        });
      }
    } else {
      scrollContainer.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isAnimating = false;
    }, 750);
  }

  // Keyboard ArrowLeft / ArrowRight Navigation snaps
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentPageIndex < numPages - 1) {
      scrollToPageIndex(currentPageIndex + 1);
    } else if (e.key === "ArrowLeft" && currentPageIndex > 0) {
      scrollToPageIndex(currentPageIndex - 1);
    }
  });

  // ==========================================
  // 5. NAVIGATION CLICKS & BUTTONS ACTION
  // ==========================================
  function bindNavigationTriggers() {
    navAnchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const index = parseInt(anchor.getAttribute("data-index"));
        scrollToPageIndex(index);

        const navLinks = document.querySelector(".nav-links");
        const burger = document.querySelector(".burger");
        if (navLinks && navLinks.classList.contains("nav-active")) {
          navLinks.classList.remove("nav-active");
          burger.classList.remove("toggle");
        }
      });
    });

    progressDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-index"));
        scrollToPageIndex(index);
      });
    });

    document.querySelectorAll(".nav-action-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const index = parseInt(btn.getAttribute("data-index"));
        scrollToPageIndex(index);
      });
    });
  }
  bindNavigationTriggers();

  // =================================================================
  // 6. CYBERNETIC GLOVE CURSOR-TRACKING PARALLAX (REPOSITIONED TO SKILLS)
  // =================================================================
  const skillsSection = document.getElementById("skills");
  const gloveElement = document.querySelector(".glove-element");

  if (skillsSection && gloveElement) {
    skillsSection.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 768) return;

      const rect = skillsSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -30;
      const rotateY = x * 30;

      gloveElement.style.setProperty("--glove-rx", `${rotateY}deg`);
      gloveElement.style.setProperty("--glove-ry", `${rotateX}deg`);
    });

    skillsSection.addEventListener("mouseleave", () => {
      gloveElement.style.setProperty("--glove-rx", "0deg");
      gloveElement.style.setProperty("--glove-ry", "0deg");
    });
  }

  // ==========================================
  // 7. HERO TYPING TEXT ANIMATION
  // ==========================================
  const typingTextElement = document.getElementById("typing-text");
  const roles = [
    "Secure Full-Stack Applications",
    "AI-Driven Systems",
    "Network Security Systems",
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseDelay = 2200;

  function typeEffect() {
    if (!typingTextElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, typingSpeed);
    } else {
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  if (typingTextElement) {
    setTimeout(typeEffect, 1500);
  }

  // ==========================================
  // 8. PROFILE FLIP CARD INTERACTION
  // ==========================================
  const flipCard = document.querySelector(".about-flip-card");
  if (flipCard) {
    flipCard.addEventListener("click", function () {
      flipCard.classList.toggle("flipped");
    });
  }

  // ==========================================
  // 9. 3D DOMAIN CAROUSEL ROTATOR
  // ==========================================
  const carousel = document.querySelector(".carousel");
  const cells = document.querySelectorAll(".carousel__cell");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  if (carousel && cells.length > 0) {
    const cellCount = cells.length;
    const theta = 360 / cellCount;
    let rotateY = 0;

    function rotateCarousel() {
      carousel.style.transform = `rotateY(${rotateY}deg)`;
      updateActiveCell();
    }

    function updateActiveCell() {
      const activeCellIndex =
        ((Math.round(-rotateY / theta) % cellCount) + cellCount) % cellCount;
      cells.forEach((cell, idx) => {
        if (idx === activeCellIndex) {
          cell.classList.add("active-cell");
        } else {
          cell.classList.remove("active-cell");
        }
      });
    }

    function positionCells() {
      cells.forEach((cell, i) => {
        const angle = theta * i;
        const radius = Math.round(
          cell.offsetWidth / 2 / Math.tan(Math.PI / cellCount),
        );
        cell.style.transform = `rotateY(${angle}deg) translateZ(${radius + 20}px)`;
      });
      updateActiveCell();
    }

    prevButton.addEventListener("click", () => {
      rotateY += theta;
      rotateCarousel();
    });

    nextButton.addEventListener("click", () => {
      rotateY -= theta;
      rotateCarousel();
    });

    // Setup click handler on cell items for manual rotation
    cells.forEach((cell, i) => {
      cell.addEventListener("click", () => {
        rotateY = -theta * i;
        rotateCarousel();
      });
    });

    positionCells();
    window.addEventListener("resize", positionCells);
  }

  // ==========================================
  // 10. MODALS MANAGER
  // ==========================================
  function setupModal(modalId, closeBtnClass) {
    const modal = document.getElementById(modalId);
    const closeBtn = document.querySelector(`.${closeBtnClass}`);

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () =>
        modal.classList.remove("active"),
      );
    }

    if (modal) {
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("active");
        }
      });
      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("active")) {
          modal.classList.remove("active");
        }
      });
    }
  }

  setupModal("project-modal", "project-modal-close");
  setupModal("certificate-modal", "cert-modal-close");

  // Handle detail modal triggers
  function setupDynamicModalListeners() {
    document.body.addEventListener("click", (e) => {
      const trigger = e.target.closest(".open-modal-trigger");
      if (!trigger) return;
      e.preventDefault();

      const id = trigger.dataset.project;
      const project = projects.find((p) => p.id === id);
      const items = projectDetails[id];
      if (!project || !items) return;

      document.getElementById("project-modal-title").textContent =
        project.title;
      document.getElementById("project-modal-list").innerHTML = items
        .map((item) => `<li>${item}</li>`)
        .join("");
      document.getElementById("project-modal").classList.add("active");
    });
  }
  setupDynamicModalListeners();

  // Certificate Viewer Modal Action
  const certificateModal = document.getElementById("certificate-modal");
  const certificateImage = document.getElementById("certificate-image");

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-cert-btn");
    if (btn) {
      const certImageSrc = btn.getAttribute("data-cert-image");
      if (certificateImage && certificateModal) {
        certificateImage.src = certImageSrc;
        certificateImage.alt = "Academic Certification Preview";
        certificateModal.classList.add("active");
      }
    }
  });

  // ==========================================
  // 11. MOBILE DRAWER MENU
  // ==========================================
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-links");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }

  // Reset page-content-wrapper transforms on window resize to mobile
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".page-content-wrapper").forEach((wrapper) => {
        wrapper.style.transform = "";
        wrapper.style.opacity = "";
      });
    } else {
      handleScrollTransforms();
    }
  });

  // If certificate image fails to load, update the modal button's target URL to the fallback too
  document.querySelectorAll(".cert-card-image-wrapper img").forEach((img) => {
    img.addEventListener("error", function () {
      const card = this.closest(".cert-card-compact");
      if (card) {
        const btn = card.querySelector(".view-cert-btn");
        if (btn) {
          btn.setAttribute("data-cert-image", this.src);
        }
      }
    });
    // Run immediately if image is already cached and errored
    if (img.complete && !img.naturalWidth) {
      img.dispatchEvent(new Event("error"));
    }
  });

  setTimeout(handleScrollTransforms, 200);
});

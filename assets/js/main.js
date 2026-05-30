document.addEventListener('DOMContentLoaded', () => {
  /* ============================================================
     1. Sticky Navigation Header Effect
     ============================================================ */
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.remove('header-transparent');
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('header-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Init state check

  /* ============================================================
     2. Mobile Hamburger Toggle Menu
     ============================================================ */
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileNav = () => {
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  };

  mobileToggle.addEventListener('click', toggleMobileNav);

  // Close nav on click of any mobile link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('active')) {
        toggleMobileNav();
      }
    });
  });

  /* ============================================================
     3. Client-Side Song Search & Filtering (Repertoire)
     ============================================================ */
  const searchInput = document.getElementById('repertoire-search');
  const clearBtn = document.getElementById('search-clear-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const songCards = document.querySelectorAll('.song-card');
  const noResultsMsg = document.getElementById('no-results-msg');

  let activeGenre = 'all';
  let searchQuery = '';

  const filterSongs = () => {
    let visibleCount = 0;

    songCards.forEach(card => {
      const cardGenre = card.getAttribute('data-genre');
      const cardLanguage = card.getAttribute('data-language').toLowerCase();
      const cardTitle = card.getAttribute('data-title');
      const cardArtist = card.getAttribute('data-artist');

      const matchesGenre = (activeGenre === 'all' || cardGenre === activeGenre);
      
      const matchesSearch = searchQuery === '' || 
        cardTitle.includes(searchQuery) || 
        cardArtist.includes(searchQuery) ||
        cardLanguage.includes(searchQuery) ||
        cardGenre.toLowerCase().includes(searchQuery);

      if (matchesGenre && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle no results alert message
    if (visibleCount === 0) {
      noResultsMsg.style.display = 'block';
    } else {
      noResultsMsg.style.display = 'none';
    }
  };

  // Event: Search Input change
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    
    // Toggle Clear button visibility
    if (searchQuery.length > 0) {
      clearBtn.style.display = 'block';
    } else {
      clearBtn.style.display = 'none';
    }

    filterSongs();
  });

  // Event: Clear search button clicked
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    filterSongs();
    searchInput.focus();
  });

  // Event: Genre category filters clicked
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from old active, set on new clicked
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeGenre = btn.getAttribute('data-filter');
      filterSongs();
    });
  });

  /* ============================================================
     4. Dynamic YouTube Shorts Overlay Modal Player
     ============================================================ */
  const shortCards = document.querySelectorAll('.short-card');
  const videoModal = document.getElementById('video-modal');
  const modalClose = document.getElementById('modal-close');
  const modalIframe = document.getElementById('modal-iframe');

  shortCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      if (videoId) {
        // Construct standard responsive embed string for YouTube Shorts / Video
        // Enable autoplay to provide immediate playback on modal trigger
        modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        videoModal.classList.add('active');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  const closePlayerModal = () => {
    videoModal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
    // Clear dynamic iframe source to instantly stop playback and conserve resources
    modalIframe.src = '';
  };

  modalClose.addEventListener('click', closePlayerModal);
  
  // Close modal when user clicks outside the container box
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closePlayerModal();
    }
  });

  // Handle ESC keyboard key press to exit modal player
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closePlayerModal();
    }
  });
});

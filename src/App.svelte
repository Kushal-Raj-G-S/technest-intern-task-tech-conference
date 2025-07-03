<script>
  import { onMount } from 'svelte';
  import { currentPage } from './lib/router.js';
  import { darkMode } from './lib/store.js';
  
  // Import page components
  import Header from './lib/Header.svelte';
  import Home from './lib/Home.svelte';
  import Speakers from './lib/Speakers.svelte';
  import Schedule from './lib/Schedule.svelte';
  import Sponsors from './lib/Sponsors.svelte';
  import About from './lib/About.svelte';
  import Contact from './lib/Contact.svelte';
  import Register from './lib/Register.svelte';
  import Footer from './lib/Footer.svelte';
  
  let showScrollToTop = false;
  
  // Initialize dark mode from localStorage
  onMount(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      darkMode.set(JSON.parse(savedDarkMode));
    }
    
    // Save dark mode changes to localStorage
    const unsubscribe = darkMode.subscribe(value => {
      localStorage.setItem('darkMode', JSON.stringify(value));
      if (typeof document !== 'undefined') {
        if (value) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    });

    // Handle scroll-to-top button visibility
    const handleScroll = () => {
      showScrollToTop = window.scrollY > 300; // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Scroll to top of page when navigating to any page
  $: if ($currentPage === 'about' || $currentPage === 'contact' || $currentPage === 'speakers-page' || $currentPage === 'register' || $currentPage === 'home') {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<svelte:head>
  <title>CodeVibe 2025 - Where Tech Meets Innovation</title>
  <meta name="description" content="Join CodeVibe 2025, the hottest tech conference featuring cutting-edge innovations, world-class speakers, and epic networking vibes!" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
</svelte:head>

<div class="app" class:dark-theme={$darkMode}>
  <!-- Always show header -->
  <Header />
  
  <main class="main-content">
    {#if $currentPage === 'home'}
      <!-- Home Section with all main sections -->
      <section id="home">
        <Home />
      </section>
      
      <!-- Schedule Section -->
      <section id="schedule">
        <Schedule />
      </section>
      
      <!-- Sponsors Section -->
      <section id="sponsors">
        <Sponsors />
      </section>
    {:else if $currentPage === 'about'}
      <About />
    {:else if $currentPage === 'contact'}
      <Contact />
    {:else if $currentPage === 'speakers-page'}
      <Speakers />
    {:else if $currentPage === 'register'}
      <Register />
    {:else}
      <!-- Default to home -->
      <section id="home">
        <Home />
      </section>
      
      <section id="schedule">
        <Schedule />
      </section>
      
      <section id="sponsors">
        <Sponsors />
      </section>
    {/if}
  </main>
  
  <!-- Always show footer -->
  <Footer />

  <!-- Scroll to Top Button -->
  {#if showScrollToTop}
    <button 
      class="scroll-to-top" 
      on:click={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  {/if}
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
  }
  
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .main-content {
    flex: 1;
    padding-top: 120px; /* Space for fixed navbar */
  }

  .main-content section {
    min-height: auto;
    position: relative;
  }

  /* Ensure first Home section accounts for navbar but subsequent sections don't */
  .main-content section:first-child {
    padding-top: 0; /* First section uses main-content padding */
  }

  .main-content section:not(:first-child) {
    padding-top: 2rem; /* Subsequent sections have normal spacing */
  }

  /* Ensure proper spacing for Home page sections */
  .main-content section :global(.speakers-page),
  .main-content section :global(.schedule-page),
  .main-content section :global(.sponsors-page) {
    padding-top: 2rem !important;
  }
  
  /* Dark mode styles */
  :global(body.dark-mode) {
    background-color: #1a1a1a;
    color: #e0e0e0;
  }

  :global(body.dark-mode) .app {
    background: #1a1a1a;
  }
  
  :global(body.dark-mode .bg-light) {
    background-color: #2d2d2d !important;
    color: #e0e0e0 !important;
  }
  
  :global(body.dark-mode .text-dark) {
    color: #e0e0e0 !important;
  }
  
  :global(body.dark-mode .card) {
    background-color: #2d2d2d;
    border-color: #404040;
    color: #e0e0e0;
  }
  
  /* Button styles */
  :global(.btn-outline-primary) {
    color: #20b2aa;
    border-color: #20b2aa;
  }
  
  :global(.btn-outline-primary:hover) {
    background-color: #20b2aa;
    border-color: #20b2aa;
    color: #ffffff;
  }
  
  :global(.btn-primary) {
    background: linear-gradient(45deg, #20b2aa, #4ecdc4);
    border: none;
    color: white;
    transition: all 0.3s ease;
  }
  
  :global(.btn-primary:hover) {
    background: linear-gradient(45deg, #1e9e96, #45b8ac);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(32, 178, 170, 0.3);
  }
  
  :global(body.dark-mode .btn-outline-primary) {
    color: #4ecdc4;
    border-color: #4ecdc4;
  }
  
  :global(body.dark-mode .btn-outline-primary:hover) {
    background-color: #4ecdc4;
    border-color: #4ecdc4;
    color: #1a1a1a;
  }
  
  /* Form styles */
  :global(.form-control:focus) {
    border-color: #20b2aa;
    box-shadow: 0 0 0 0.2rem rgba(32, 178, 170, 0.25);
  }
  
  :global(body.dark-mode .form-control) {
    background-color: #404040;
    border-color: #555555;
    color: #e0e0e0;
  }
  
  :global(body.dark-mode .form-control:focus) {
    background-color: #404040;
    border-color: #4ecdc4;
    color: #e0e0e0;
    box-shadow: 0 0 0 0.2rem rgba(78, 205, 196, 0.25);
  }

  :global(body.dark-mode .form-control::placeholder) {
    color: #aaa;
  }
  
  /* Global transitions */
  :global(.btn), :global(.card), :global(.navbar) {
    transition: all 0.3s ease;
  }
  
  /* Custom scrollbar */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }
  
  :global(::-webkit-scrollbar-track) {
    background: #f1f1f1;
  }
  
  :global(::-webkit-scrollbar-thumb) {
    background: #20b2aa;
    border-radius: 4px;
  }
  
  :global(::-webkit-scrollbar-thumb:hover) {
    background: #1e9e96;
  }

  :global(body.dark-mode::-webkit-scrollbar-track) {
    background: #2d2d2d;
  }
  
  :global(body.dark-mode::-webkit-scrollbar-thumb) {
    background: #4ecdc4;
  }
  
  :global(body.dark-mode::-webkit-scrollbar-thumb:hover) {
    background: #45b8ac;
  }

  /* Section spacing */
  :global(.section-spacing) {
    padding: 4rem 0;
  }

  /* Animations */
  :global(.fade-in) {
    animation: fadeIn 0.6s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Text selection */
  :global(::selection) {
    background: rgba(32, 178, 170, 0.3);
    color: inherit;
  }

  :global(body.dark-mode ::selection) {
    background: rgba(78, 205, 196, 0.3);
  }

  /* Scroll to Top Button */
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #20b2aa, #4ecdc4);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 20px rgba(32, 178, 170, 0.3);
    transition: all 0.3s ease;
    opacity: 0.9;
  }

  .scroll-to-top:hover {
    background: linear-gradient(45deg, #1e9e96, #45b8ac);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(32, 178, 170, 0.4);
    opacity: 1;
  }

  :global(body.dark-mode) .scroll-to-top {
    background: linear-gradient(45deg, #4ecdc4, #20b2aa);
    box-shadow: 0 4px 20px rgba(78, 205, 196, 0.3);
  }

  :global(body.dark-mode) .scroll-to-top:hover {
    background: linear-gradient(45deg, #5dd1c8, #1e9e96);
    box-shadow: 0 8px 30px rgba(78, 205, 196, 0.4);
  }

  @media (max-width: 768px) {
    .scroll-to-top {
      bottom: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
      font-size: 1.1rem;
    }
  }
</style>

<script>
    import { darkMode } from '../lib/store.js';
    import { currentPage, navigate } from '../lib/router.js';
    import { onMount } from 'svelte';

    let activeSection = 'home';

    function toggleDarkMode() {
        darkMode.update(n => !n);
    }

    function smoothScrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            activeSection = elementId;
        }
    }

    function handleNavClick(item) {
        if (item.type === 'page') {
            navigate(item.id);
        } else if (item.id === 'home') {
            // Home button always goes to home page
            navigate('home');
        } else {
            // For other scroll sections, navigate to home first if needed, then scroll
            if ($currentPage !== 'home') {
                navigate('home');
                setTimeout(() => {
                    smoothScrollTo(item.id);
                }, 100);
            } else {
                smoothScrollTo(item.id);
            }
        }
    }

    function handleRegisterClick() {
        navigate('register');
    }

    const navItems = [
        { name: 'Home', id: 'home', type: 'scroll' },
        { name: 'Speakers', id: 'speakers-page', type: 'page' },
        { name: 'Schedule', id: 'schedule', type: 'scroll' },
        { name: 'Sponsors', id: 'sponsors', type: 'scroll' },
        { name: 'About', id: 'about', type: 'page' },
        { name: 'Contact', id: 'contact', type: 'page' }
    ];

    // Handle scroll to update active section (only for scroll-type items)
    onMount(() => {
        const handleScroll = () => {
            // Only track scroll sections when on home page
            if ($currentPage === 'home') {
                const scrollSections = navItems.filter(item => item.type === 'scroll');
                const sections = scrollSections.map(item => document.getElementById(item.id)).filter(Boolean);
                const scrollY = window.scrollY + 150; // Offset for navbar height

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section && section.offsetTop <= scrollY) {
                        activeSection = section.id;
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    // Function to check if nav item should be active
    function isActive(item) {
        if (item.type === 'page') {
            return $currentPage === item.id;
        } else {
            return $currentPage === 'home' && activeSection === item.id;
        }
    }
</script>

<header class="header">
    <nav class="navbar">
        <div class="nav-brand">
            <div class="logo">
                <span class="logo-icon">🚀</span>
                <span class="logo-text">CodeVibe</span>
                <span class="logo-year">2025</span>
            </div>
        </div>
        
        <div class="nav-menu">
            {#each navItems as item}
                <button 
                    class="nav-link" 
                    class:active={isActive(item)}
                    on:click={() => handleNavClick(item)}
                >
                    {item.name}
                </button>
            {/each}
        </div>

        <div class="nav-actions">
            <button class="dark-mode-toggle" on:click={toggleDarkMode} title="Toggle Dark Mode">
                {#if $darkMode}
                    <i class="bi bi-sun-fill"></i>
                {:else}
                    <i class="bi bi-moon-fill"></i>
                {/if}
            </button>
            <button class="register-btn" on:click={handleRegisterClick}>Register Now</button>
        </div>

        <!-- Mobile menu toggle -->
        <button class="mobile-menu-toggle" id="mobile-toggle" aria-label="Toggle mobile menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
</header>

<style>
    .header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(32, 178, 170, 0.1);
        padding: 0;
        box-shadow: 0 8px 32px rgba(32, 178, 170, 0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        max-width: 1400px;
        margin: 0 auto;
    }

    .nav-brand .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #20b2aa;
        font-size: 1.8rem;
        font-weight: 800;
        letter-spacing: -0.5px;
    }

    .logo-icon {
        font-size: 2.2rem;
        filter: drop-shadow(2px 2px 4px rgba(32, 178, 170, 0.3));
    }

    .logo-text {
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .logo-year {
        font-size: 1rem;
        color: #666;
        font-weight: 500;
        margin-left: 0.2rem;
    }

    .nav-menu {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .nav-link {
        background: none;
        border: none;
        color: #333;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        font-size: 0.95rem;
        position: relative;
        overflow: hidden;
    }

    .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        transition: left 0.3s ease;
        z-index: -1;
    }

    .nav-link:hover::before {
        left: 0;
    }

    .nav-link:hover {
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(32, 178, 170, 0.3);
    }

    .nav-link.active {
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        color: white;
        box-shadow: 0 4px 15px rgba(32, 178, 170, 0.4);
    }

    .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .dark-mode-toggle {
        background: none;
        border: 2px solid #20b2aa;
        color: #20b2aa;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }

    .dark-mode-toggle:hover {
        background: #20b2aa;
        color: white;
        transform: rotate(360deg);
    }

    .register-btn {
        background: linear-gradient(45deg, #ff6b6b, #ff8e53);
        border: none;
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: bold;
        font-size: 0.95rem;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    }

    .register-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
    }

    .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .mobile-menu-toggle span {
        width: 25px;
        height: 3px;
        background: #20b2aa;
        border-radius: 2px;
        transition: all 0.3s ease;
    }

    /* Dark mode styles */
    :global(body.dark-mode) .header {
        background: rgba(30, 30, 30, 0.95);
        border-bottom-color: rgba(32, 178, 170, 0.2);
    }

    :global(body.dark-mode) .nav-link {
        color: #e0e0e0;
    }

    :global(body.dark-mode) .logo-year {
        color: #aaa;
    }

    :global(body.dark-mode) .mobile-menu-toggle span {
        background: #4ecdc4;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .navbar {
            padding: 1rem;
        }

        .nav-menu {
            display: none;
        }

        .mobile-menu-toggle {
            display: flex;
        }

        .logo-text {
            font-size: 1.4rem;
        }

        .logo-year {
            font-size: 0.9rem;
        }

        .register-btn {
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .navbar {
            padding: 0.8rem;
        }

        .nav-actions {
            gap: 0.5rem;
        }

        .register-btn {
            padding: 0.5rem 1.2rem;
            font-size: 0.85rem;
        }
    }
</style>

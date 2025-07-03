<script>
    import { navigate } from './router.js';
    import { currentPage } from './router.js';
    
    const currentYear = new Date().getFullYear();
    
    const quickLinks = [
        { name: 'Home', id: 'home', type: 'scroll' },
        { name: 'Speakers', id: 'speakers', type: 'scroll' },
        { name: 'Schedule', id: 'schedule', type: 'scroll' },
        { name: 'Sponsors', id: 'sponsors', type: 'scroll' }
    ];

    const supportLinks = [
        { name: 'About Us', id: 'about', type: 'page' },
        { name: 'Contact', id: 'contact', type: 'page' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Help', href: '#help' }
    ];

    const socialLinks = [
        { name: 'Twitter', icon: 'bi-twitter', url: 'https://twitter.com/codevibe2025' },
        { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com/company/codevibe' },
        { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/codevibe' },
        { name: 'YouTube', icon: 'bi-youtube', url: 'https://youtube.com/codevibe' }
    ];

    function handleFooterNavClick(link) {
        if (link.type === 'page') {
            navigate(link.id);
        } else if (link.id === 'home') {
            // Home button always goes to home page
            navigate('home');
        } else if (link.type === 'scroll') {
            // Navigate to home first, then scroll
            navigate('home');
            setTimeout(() => {
                smoothScrollTo(link.id);
            }, 100);
        }
    }

    function smoothScrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<footer class="footer">
    <div class="footer-content">
        <div class="container">
            <!-- Main Footer Content -->
            <div class="footer-main">
                <!-- Brand Section -->
                <div class="footer-section brand-section">
                    <div class="footer-logo">
                        <span class="logo-icon">🚀</span>
                        <span class="logo-text">CodeVibe</span>
                        <span class="logo-year">2025</span>
                    </div>
                    <p class="footer-description">
                        Join the most innovative technology conference of the year. Connect with industry leaders, 
                        discover cutting-edge technologies, and shape the future of software development.
                    </p>
                    <div class="social-links">
                        {#each socialLinks as social}
                            <a href={social.url} target="_blank" rel="noopener noreferrer" class="social-link" title={social.name} aria-label={social.name}>
                                <i class="bi {social.icon}"></i>
                            </a>
                        {/each}
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-links">
                        {#each quickLinks as link}
                            <li>
                                <button class="footer-link" on:click={() => handleFooterNavClick(link)}>
                                    {link.name}
                                </button>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Support -->
                <div class="footer-section">
                    <h4 class="footer-title">Support</h4>
                    <ul class="footer-links">
                        {#each supportLinks as link}
                            <li>
                                {#if link.id}
                                    <button class="footer-link" on:click={() => handleFooterNavClick(link)}>
                                        {link.name}
                                    </button>
                                {:else}
                                    <a href={link.href} class="footer-link">{link.name}</a>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="footer-section">
                    <h4 class="footer-title">Get in Touch</h4>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="bi bi-geo-alt"></i>
                            <span>KTPO Center, Whitefield<br>Bangalore, Karnataka 560066</span>
                        </div>
                        <div class="contact-item">
                            <i class="bi bi-envelope"></i>
                            <span>info@codevibe2025.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="bi bi-telephone"></i>
                            <span>+91 98765 43210</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="newsletter-section">
                <div class="newsletter-content">
                    <h3>Stay Updated</h3>
                    <p>Get the latest updates about CodeVibe 2025 and exclusive early bird offers.</p>
                </div>
                <div class="newsletter-form">
                    <input type="email" placeholder="Enter your email address" class="newsletter-input">
                    <button class="newsletter-btn">Subscribe</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <div class="copyright">
                    <p>&copy; {currentYear} CodeVibe. All rights reserved.</p>
                </div>
                <div class="footer-bottom-links">
                    <a href="#privacy" class="bottom-link">Privacy Policy</a>
                    <a href="#terms" class="bottom-link">Terms of Service</a>
                    <a href="#cookies" class="bottom-link">Cookie Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        color: #e0e0e0;
        margin-top: 0;
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .footer-content {
        padding: 4rem 0 2rem;
    }

    .footer-main {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1.5fr;
        gap: 3rem;
        margin-bottom: 3rem;
    }

    .footer-section {
        display: flex;
        flex-direction: column;
    }

    .brand-section {
        max-width: 350px;
    }

    .footer-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        font-weight: 800;
    }

    .logo-icon {
        font-size: 2.2rem;
    }

    .logo-text {
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .logo-year {
        font-size: 1rem;
        color: #888;
        font-weight: 500;
    }

    .footer-description {
        line-height: 1.6;
        color: #ccc;
        margin-bottom: 2rem;
    }

    .social-links {
        display: flex;
        gap: 1rem;
    }

    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: rgba(32, 178, 170, 0.1);
        border: 2px solid rgba(32, 178, 170, 0.3);
        border-radius: 50%;
        color: #20b2aa;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 1.2rem;
    }

    .social-link:hover {
        background: #20b2aa;
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(32, 178, 170, 0.4);
    }

    .footer-title {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        position: relative;
    }

    .footer-title::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 40px;
        height: 3px;
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        border-radius: 2px;
    }

    .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-links li {
        margin-bottom: 0.8rem;
    }

    .footer-link {
        color: #ccc;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        padding: 0;
        font-family: inherit;
    }

    .footer-link:hover {
        color: #4ecdc4;
        transform: translateX(5px);
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
        color: #ccc;
    }

    .contact-item i {
        color: #20b2aa;
        font-size: 1.1rem;
        margin-top: 0.2rem;
        min-width: 16px;
    }

    .newsletter-section {
        background: rgba(32, 178, 170, 0.1);
        border: 1px solid rgba(32, 178, 170, 0.2);
        border-radius: 20px;
        padding: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .newsletter-content h3 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .newsletter-content p {
        color: #ccc;
        margin: 0;
    }

    .newsletter-form {
        display: flex;
        gap: 1rem;
        min-width: 350px;
    }

    .newsletter-input {
        flex: 1;
        padding: 0.8rem 1.2rem;
        border: 2px solid rgba(32, 178, 170, 0.3);
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        font-size: 0.95rem;
        transition: all 0.3s ease;
    }

    .newsletter-input::placeholder {
        color: #aaa;
    }

    .newsletter-input:focus {
        outline: none;
        border-color: #20b2aa;
        background: rgba(255, 255, 255, 0.15);
    }

    .newsletter-btn {
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        border: none;
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        white-space: nowrap;
    }

    .newsletter-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(32, 178, 170, 0.4);
    }

    .footer-bottom {
        background: rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1.5rem 0;
    }

    .footer-bottom-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .copyright {
        color: #888;
        font-size: 0.9rem;
    }

    .footer-bottom-links {
        display: flex;
        gap: 2rem;
    }

    .bottom-link {
        color: #ccc;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;
    }

    .bottom-link:hover {
        color: #4ecdc4;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .newsletter-section {
            flex-direction: column;
            text-align: center;
        }

        .newsletter-form {
            min-width: auto;
            width: 100%;
            max-width: 400px;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .footer-content {
            padding: 3rem 0 2rem;
        }

        .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .newsletter-section {
            padding: 2rem;
        }

        .newsletter-form {
            flex-direction: column;
            gap: 1rem;
        }

        .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }
    }

    @media (max-width: 480px) {
        .footer-logo {
            font-size: 1.5rem;
        }

        .social-links {
            justify-content: center;
        }

        .newsletter-section {
            padding: 1.5rem;
        }

        .newsletter-content h3 {
            font-size: 1.3rem;
        }
    }
</style>

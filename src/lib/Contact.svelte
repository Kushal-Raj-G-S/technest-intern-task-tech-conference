<script>
    let formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    let isSubmitting = false;
    let submitStatus = '';

    // FAQ Accordion state
    let openAccordionItem = null;

    function handleSubmit() {
        isSubmitting = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitStatus = 'success';
            isSubmitting = false;
            
            // Reset form after successful submission
            formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                submitStatus = '';
            }, 3000);
        }, 1000);
    }

    function validateForm() {
        return formData.name && formData.email && formData.message;
    }

    function toggleAccordion(index) {
        openAccordionItem = openAccordionItem === index ? null : index;
    }
</script>

<div class="contact-page">
    <div class="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the CodeVibe team</p>
    </div>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
        <div class="form-container">
            <div class="form-intro">
                <h2>Send us a Message</h2>
                <p>Have questions about CodeVibe 2025? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form class="contact-form" on:submit|preventDefault={handleSubmit}>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input 
                            type="text" 
                            id="name" 
                            bind:value={formData.name}
                            required
                            placeholder="Your full name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input 
                            type="email" 
                            id="email" 
                            bind:value={formData.email}
                            required
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        bind:value={formData.subject}
                        placeholder="What's this about?"
                    />
                </div>

                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea 
                        id="message" 
                        bind:value={formData.message}
                        required
                        rows="6"
                        placeholder="Tell us more about your inquiry..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    class="submit-btn"
                    disabled={!validateForm() || isSubmitting}
                >
                    {#if isSubmitting}
                        Sending...
                    {:else}
                        Send Message
                    {/if}
                </button>

                {#if submitStatus === 'success'}
                    <div class="success-message">
                        ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                {/if}
            </form>
        </div>
    </section>



    <!-- Contact Information -->
    <section class="contact-info">
        <h2>Get in Touch</h2>
        <div class="contact-grid">
            <div class="contact-card">
                <div class="icon">📧</div>
                <h3>Email</h3>
                <p>General Inquiries</p>
                <a href="mailto:info@codevibe2025.com">info@codevibe2025.com</a>
                
                <p>Press Inquiries</p>
                <a href="mailto:press@codevibe2025.com">press@codevibe2025.com</a>
            </div>

            <div class="contact-card">
                <div class="icon">📞</div>
                <h3>Phone</h3>
                <p>General Information</p>
                <a href="tel:+919876543210">+91 98765 43210</a>
                
                <p>Event Support</p>
                <a href="tel:+919876543211">+91 98765 43211</a>
            </div>

            <div class="contact-card">
                <div class="icon">📍</div>
                <h3>Address</h3>
                <p>Event Location</p>
                <address>
                    KTPO Center<br>
                    Whitefield<br>
                    Bangalore, Karnataka 560066<br>
                    India
                </address>
            </div>

            <div class="contact-card">
                <div class="icon">🕒</div>
                <h3>Office Hours</h3>
                <p>Monday - Friday</p>
                <span>9:00 AM - 6:00 PM IST</span>
                
                <p>Event Support</p>
                <span>Available during conference</span>
            </div>
        </div>
    </section>

    <!-- Social Media -->
    <section class="social-section">
        <h2>Follow Us</h2>
        <p>Stay updated with the latest CodeVibe news and announcements</p>
        
        <div class="social-links">
            <a href="https://twitter.com/codevibe2025" target="_blank" rel="noopener" class="social-link twitter">
                <span class="icon">🐦</span>
                <span class="platform">Twitter</span>
                <span class="handle">@CodeVibe2025</span>
            </a>
            
            <a href="https://linkedin.com/company/codevibe" target="_blank" rel="noopener" class="social-link linkedin">
                <span class="icon">💼</span>
                <span class="platform">LinkedIn</span>
                <span class="handle">CodeVibe Conference</span>
            </a>
            
            <a href="https://instagram.com/codevibeconf" target="_blank" rel="noopener" class="social-link instagram">
                <span class="icon">📸</span>
                <span class="platform">Instagram</span>
                <span class="handle">@codevibeconf</span>
            </a>
            
            <a href="https://youtube.com/codevibeconf" target="_blank" rel="noopener" class="social-link youtube">
                <span class="icon">📺</span>
                <span class="platform">YouTube</span>
                <span class="handle">CodeVibe Conference</span>
            </a>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-accordion">
            <!-- FAQ Item 1 -->
            <div class="accordion-item">
                <button 
                    class="accordion-header" 
                    on:click={() => toggleAccordion(0)}
                >
                    <span>How can I register for CodeVibe 2025?</span>
                    <span class="accordion-arrow" class:rotated={openAccordionItem === 0}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                </button>
                {#if openAccordionItem === 0}
                    <div class="accordion-content">
                        <p>Registration will open soon! Follow us on social media or subscribe to our newsletter to be notified when tickets become available.</p>
                    </div>
                {/if}
            </div>

            <!-- FAQ Item 2 -->
            <div class="accordion-item">
                <button 
                    class="accordion-header" 
                    on:click={() => toggleAccordion(1)}
                >
                    <span>Are there student discounts available?</span>
                    <span class="accordion-arrow" class:rotated={openAccordionItem === 1}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                </button>
                {#if openAccordionItem === 1}
                    <div class="accordion-content">
                        <p>Yes! We offer special pricing for students and academic researchers. Contact us with your academic email for discount codes.</p>
                    </div>
                {/if}
            </div>

            <!-- FAQ Item 3 -->
            <div class="accordion-item">
                <button 
                    class="accordion-header" 
                    on:click={() => toggleAccordion(2)}
                >
                    <span>Will sessions be recorded?</span>
                    <span class="accordion-arrow" class:rotated={openAccordionItem === 2}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                </button>
                {#if openAccordionItem === 2}
                    <div class="accordion-content">
                        <p>Selected sessions will be recorded and made available to registered attendees. Live streaming options are also available.</p>
                    </div>
                {/if}
            </div>

            <!-- FAQ Item 4 -->
            <div class="accordion-item">
                <button 
                    class="accordion-header" 
                    on:click={() => toggleAccordion(3)}
                >
                    <span>Is there a code of conduct?</span>
                    <span class="accordion-arrow" class:rotated={openAccordionItem === 3}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                </button>
                {#if openAccordionItem === 3}
                    <div class="accordion-content">
                        <p>Yes, we maintain a strict code of conduct to ensure a safe and inclusive environment for all attendees. View our full policy on our website.</p>
                    </div>
                {/if}
            </div>
        </div>
    </section>
</div>

<style>
    .contact-page {
        min-height: 100vh;
        padding-top: 0; /* Main content handles navbar spacing */
    }

    .page-header {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
        margin-bottom: 3rem;
    }

    .page-header h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        background: linear-gradient(45deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .page-header p {
        font-size: 1.2rem;
        color: #666;
    }

    .contact-form-section {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .form-intro {
        text-align: center;
        margin-bottom: 3rem;
    }

    .form-intro h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .form-intro p {
        font-size: 1.1rem;
        color: #666;
        line-height: 1.6;
    }

    .contact-form {
        background: white;
        padding: 3rem;
        border-radius: 20px;
        box-shadow: 0 15px 50px rgba(0,0,0,0.1);
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #333;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        font-family: inherit;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }

    .submit-btn {
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border: none;
        padding: 1.25rem 3rem;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(102,126,234,0.3);
    }

    .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }

    .success-message {
        background: #d1fae5;
        color: #065f46;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        border: 1px solid #a7f3d0;
    }

    .contact-info {
        background: #f8fafc;
        padding: 4rem 2rem;
    }

    .contact-info h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .contact-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .contact-card:hover {
        transform: translateY(-5px);
    }

    .contact-card .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .contact-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .contact-card p {
        color: #666;
        margin: 0.75rem 0 0.25rem;
        font-weight: 600;
    }

    .contact-card a {
        color: #667eea;
        text-decoration: none;
        font-weight: 500;
    }

    .contact-card a:hover {
        text-decoration: underline;
    }

    .contact-card address {
        font-style: normal;
        color: #667eea;
        line-height: 1.6;
    }

    .contact-card span {
        color: #667eea;
        font-weight: 500;
    }

    .social-section {
        max-width: 1000px;
        margin: 0 auto;
        padding: 4rem 2rem;
        text-align: center;
    }

    .social-section h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .social-section p {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 3rem;
    }

    .social-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .social-link {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-decoration: none;
        color: #333;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .social-link:hover {
        transform: translateY(-5px);
        text-decoration: none;
        color: #333;
    }

    .social-link .icon {
        font-size: 2.5rem;
    }

    .social-link .platform {
        font-size: 1.3rem;
        font-weight: bold;
        color: #333;
    }

    .social-link .handle {
        color: #667eea;
        font-weight: 500;
    }

    .social-link.twitter:hover {
        box-shadow: 0 10px 30px rgba(29,161,242,0.3);
    }

    .social-link.linkedin:hover {
        box-shadow: 0 10px 30px rgba(0,119,181,0.3);
    }

    .social-link.instagram:hover {
        box-shadow: 0 10px 30px rgba(225,48,108,0.3);
    }

    .social-link.youtube:hover {
        box-shadow: 0 10px 30px rgba(255,0,0,0.3);
    }

    .faq-section {
        background: #f8fafc;
        padding: 4rem 2rem;
    }

    .faq-section h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
    }

    .faq-accordion {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1px; /* Small gap between items like in your image */
    }

    .accordion-item {
        background: white;
        border-radius: 0;
        overflow: hidden;
    }

    .accordion-header {
        width: 100%;
        background: #e5e7eb; /* Gray background like in your image */
        border: none;
        padding: 1.5rem 2rem;
        text-align: left;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
        color: #374151;
        transition: all 0.3s ease;
        position: relative;
    }

    .accordion-header:hover {
        background: #d1d5db;
    }

    .accordion-header:focus {
        outline: none;
        background: #d1d5db;
    }

    .accordion-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
        color: #6b7280;
    }

    .accordion-arrow.rotated {
        transform: rotate(180deg);
    }

    .accordion-content {
        background: white;
        padding: 2rem;
        border-top: 1px solid #e5e7eb;
        animation: slideDown 0.3s ease-out;
    }

    .accordion-content p {
        color: #666;
        line-height: 1.6;
        margin: 0;
        font-size: 1rem;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            max-height: 0;
            padding-top: 0;
            padding-bottom: 0;
        }
        to {
            opacity: 1;
            max-height: 200px;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }

    @media (max-width: 768px) {
        .page-header h1 {
            font-size: 2rem;
        }

        .form-row {
            grid-template-columns: 1fr;
        }

        .contact-form {
            padding: 2rem;
        }

        .contact-grid {
            grid-template-columns: 1fr;
        }

        .social-links {
            grid-template-columns: 1fr;
        }

        .faq-accordion {
            gap: 0; /* Remove gap on mobile */
        }

        .accordion-header {
            padding: 1.25rem 1.5rem;
            font-size: 1rem;
        }

        .accordion-content {
            padding: 1.5rem;
        }
    }
</style>

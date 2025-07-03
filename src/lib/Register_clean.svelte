<script>
    import { onMount } from 'svelte';
    
    // FAQ Accordion functionality
    function toggleAccordion(event) {
        const accordionItem = event.currentTarget.closest('.accordion-item');
        const isActive = accordionItem.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    }

    // Star rating functionality
    function handleStarRating(event) {
        const clickedStar = event.currentTarget;
        const rating = parseInt(clickedStar.getAttribute('data-rating'));
        const allStars = clickedStar.parentElement.querySelectorAll('.star');
        
        // Remove active class from all stars
        allStars.forEach(star => star.classList.remove('active'));
        
        // Add active class to clicked star and all previous stars
        for (let i = 0; i < rating; i++) {
            allStars[i].classList.add('active');
        }
    }

    // Initialize interactions on mount
    onMount(() => {
        // Add click listeners to stars
        document.querySelectorAll('.rating-stars .star').forEach(star => {
            star.addEventListener('click', handleStarRating);
        });
    });
</script>

<div class="register-page">
    <div class="page-header">
        <h1>Register for CodeVibe 2025</h1>
        <p>Secure your spot at the most innovative tech conference of the year</p>
        <div class="conference-dates">
            <span>📅 July 15-17, 2025</span>
            <span>📍 KTPO Center, Bangalore</span>
        </div>
    </div>

    <div class="registration-container">
        <!-- Registration Progress -->
        <div class="progress-indicator">
            <div class="step active">
                <div class="step-number">1</div>
                <span>Personal Info</span>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <span>Ticket Selection</span>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <span>Payment</span>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <span>Confirmation</span>
            </div>
        </div>

        <div class="registration-form">
            <form>
                <!-- Personal Information Section -->
                <div class="form-section">
                    <div class="section-header">
                        <h3>👤 Personal Information</h3>
                        <p>Tell us about yourself</p>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name *</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                class="form-control" 
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name *</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                class="form-control" 
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                class="form-control" 
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                class="form-control" 
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="company">Company/Organization</label>
                            <input 
                                type="text" 
                                id="company" 
                                class="form-control" 
                                placeholder="Your workplace"
                            />
                        </div>
                        <div class="form-group">
                            <label for="designation">Job Title</label>
                            <input 
                                type="text" 
                                id="designation" 
                                class="form-control" 
                                placeholder="Your role"
                            />
                        </div>
                    </div>
                </div>

                <!-- Ticket Selection Section -->
                <div class="form-section">
                    <div class="section-header">
                        <h3>🎫 Ticket Selection</h3>
                        <p>Choose your conference package</p>
                    </div>

                    <div class="ticket-options">
                        <div class="ticket-card">
                            <input type="radio" id="standard" name="ticketType" value="standard" />
                            <label for="standard">
                                <div class="ticket-header">
                                    <h4>Standard Pass</h4>
                                    <div class="price">₹2,999</div>
                                </div>
                                <ul>
                                    <li>Access to all main sessions</li>
                                    <li>Networking breaks</li>
                                    <li>Conference swag bag</li>
                                    <li>Digital certificates</li>
                                </ul>
                            </label>
                        </div>

                        <div class="ticket-card premium">
                            <div class="ticket-badge">POPULAR</div>
                            <input type="radio" id="premium" name="ticketType" value="premium" />
                            <label for="premium">
                                <div class="ticket-header">
                                    <h4>Premium Pass</h4>
                                    <div class="price">₹4,999</div>
                                </div>
                                <ul>
                                    <li>Everything in Standard</li>
                                    <li>VIP networking dinner</li>
                                    <li>Premium seating</li>
                                    <li>One-on-one speaker sessions</li>
                                    <li>Premium swag</li>
                                </ul>
                            </label>
                        </div>

                        <div class="ticket-card">
                            <input type="radio" id="student" name="ticketType" value="student" />
                            <label for="student">
                                <div class="ticket-header">
                                    <h4>Student Pass</h4>
                                    <div class="price">₹999</div>
                                </div>
                                <ul>
                                    <li>Access to all main sessions</li>
                                    <li>Student networking area</li>
                                    <li>Digital certificates</li>
                                    <li>Career guidance session</li>
                                </ul>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Payment Details Section -->
                <div class="form-section">
                    <div class="section-header">
                        <h3>💳 Payment Details</h3>
                        <p>Secure payment information</p>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="cardNumber">Card Number *</label>
                            <input 
                                type="text" 
                                id="cardNumber" 
                                class="form-control" 
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV *</label>
                            <input 
                                type="text" 
                                id="cvv" 
                                class="form-control" 
                                placeholder="123"
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiryMonth">Expiry Month *</label>
                            <select id="expiryMonth" class="form-control">
                                <option value="">MM</option>
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="expiryYear">Expiry Year *</label>
                            <select id="expiryYear" class="form-control">
                                <option value="">YYYY</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="billingAddress">Billing Address</label>
                        <textarea 
                            id="billingAddress" 
                            class="form-control" 
                            rows="3"
                            placeholder="Enter your complete billing address"
                        ></textarea>
                    </div>
                </div>

                <!-- Special Offers Section -->
                <div class="form-section">
                    <div class="section-header">
                        <h3>🎁 Special Offers & Add-ons</h3>
                        <p>Enhance your conference experience</p>
                    </div>

                    <div class="offers-grid">
                        <div class="offer-card">
                            <h4>Workshop Package</h4>
                            <p>Access to all hands-on workshops</p>
                            <div class="price">+₹1,500</div>
                            <input type="checkbox" id="workshop" />
                            <label for="workshop" class="checkbox-label">Add Workshop Package</label>
                        </div>

                        <div class="offer-card">
                            <h4>Recorded Sessions</h4>
                            <p>60-day access to recorded sessions</p>
                            <div class="price">+₹800</div>
                            <input type="checkbox" id="recordings" />
                            <label for="recordings" class="checkbox-label">Add Recorded Sessions</label>
                        </div>

                        <div class="offer-card">
                            <h4>Certification</h4>
                            <p>Official participation certificate</p>
                            <div class="price">+₹500</div>
                            <input type="checkbox" id="certificate" />
                            <label for="certificate" class="checkbox-label">Add Certification</label>
                        </div>
                    </div>
                </div>

                <!-- FAQ Section -->
                <div class="faq-section">
                    <div class="section-header">
                        <h3>❓ Frequently Asked Questions</h3>
                        <p>Quick answers to common registration questions</p>
                    </div>

                    <div class="accordion">
                        <div class="accordion-item">
                            <div class="accordion-header" on:click={toggleAccordion}>
                                <h4>What's included in my registration?</h4>
                                <i class="bi bi-chevron-down"></i>
                            </div>
                            <div class="accordion-content">
                                <p>Your registration includes access to all conference sessions, workshops, networking events, breakfast, lunch, coffee breaks, conference swag bag, and digital access to all presentation materials.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <div class="accordion-header" on:click={toggleAccordion}>
                                <h4>Can I get a refund if I can't attend?</h4>
                                <i class="bi bi-chevron-down"></i>
                            </div>
                            <div class="accordion-content">
                                <p>Yes! Full refunds are available until 30 days before the event. After that, a 50% refund is available until 7 days before. No refunds within 7 days of the conference start date.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <div class="accordion-header" on:click={toggleAccordion}>
                                <h4>What payment methods do you accept?</h4>
                                <i class="bi bi-chevron-down"></i>
                            </div>
                            <div class="accordion-content">
                                <p>We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Support Section -->
                <div class="support-section">
                    <div class="section-header">
                        <h3>🎧 Need Help?</h3>
                        <p>We're here to assist you with your registration</p>
                    </div>

                    <div class="support-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="supportName">Your Name</label>
                                <input 
                                    type="text" 
                                    id="supportName" 
                                    class="form-control" 
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="supportEmail">Email Address</label>
                                <input 
                                    type="email" 
                                    id="supportEmail" 
                                    class="form-control" 
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="supportMessage">Message</label>
                            <textarea 
                                id="supportMessage" 
                                class="form-control" 
                                rows="4" 
                                placeholder="Describe your issue or question in detail..."
                            ></textarea>
                        </div>
                    </div>
                </div>

                <!-- Feedback Section -->
                <div class="feedback-section">
                    <div class="section-header">
                        <h3>💭 Share Your Feedback</h3>
                        <p>Help us improve your conference experience</p>
                    </div>

                    <div class="feedback-form">
                        <div class="form-group">
                            <label>Rate Your Experience So Far</label>
                            <div class="rating-stars">
                                <span class="star" data-rating="1">⭐</span>
                                <span class="star" data-rating="2">⭐</span>
                                <span class="star" data-rating="3">⭐</span>
                                <span class="star" data-rating="4">⭐</span>
                                <span class="star" data-rating="5">⭐</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="feedbackMessage">Your Feedback</label>
                            <textarea 
                                id="feedbackMessage" 
                                class="form-control" 
                                rows="4" 
                                placeholder="Tell us what you think! Suggestions, compliments, or concerns are all welcome..."
                            ></textarea>
                        </div>
                    </div>
                </div>

                <!-- Terms and Submit -->
                <div class="form-section">
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                            <span>I accept the Terms & Conditions and Privacy Policy *</span>
                        </label>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="register-btn">
                            Complete Registration
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!-- Security Badges -->
        <div class="security-badges">
            <div class="badge">🔒 SSL Secured</div>
            <div class="badge">🛡️ PCI Compliant</div>
            <div class="badge">✅ 256-bit Encryption</div>
        </div>
    </div>
</div>

<style>
    .register-page {
        min-height: 100vh;
        background: linear-gradient(135deg, rgba(32, 178, 170, 0.05) 0%, rgba(78, 205, 196, 0.05) 100%);
        padding-top: 0;
    }

    .page-header {
        text-align: center;
        padding: 3rem 2rem;
        background: linear-gradient(135deg, #20b2aa 0%, #4ecdc4 100%);
        color: white;
        margin-bottom: 3rem;
    }

    .page-header h1 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .page-header p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .conference-dates {
        display: flex;
        justify-content: center;
        gap: 2rem;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .registration-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 2rem 3rem;
    }

    .progress-indicator {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    }

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        opacity: 0.5;
        transition: all 0.3s ease;
    }

    .step.active {
        opacity: 1;
    }

    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #e2e8f0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #64748b;
    }

    .step.active .step-number {
        background: linear-gradient(135deg, #20b2aa, #4ecdc4);
        color: white;
    }

    .registration-form {
        background: white;
        border-radius: 20px;
        padding: 3rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        border: 1px solid #f1f5f9;
    }

    .form-section {
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 2px solid #f8fafc;
    }

    .form-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }

    .section-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .section-header h3 {
        color: #1e293b;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .section-header p {
        color: #64748b;
        font-size: 1rem;
        margin: 0;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-group label {
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
    }

    .form-control {
        padding: 0.75rem 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        font-size: 1rem;
        transition: all 0.3s ease;
        background: #ffffff;
    }

    .form-control:focus {
        outline: none;
        border-color: #20b2aa;
        box-shadow: 0 0 0 3px rgba(32, 178, 170, 0.1);
        transform: translateY(-1px);
    }

    /* Ticket Selection */
    .ticket-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .ticket-card {
        position: relative;
        border: 2px solid #e2e8f0;
        border-radius: 16px;
        padding: 0;
        transition: all 0.3s ease;
        overflow: hidden;
        background: white;
    }

    .ticket-card.premium {
        border-color: #ffd700;
        background: linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.1) 100%);
    }

    .ticket-card input[type="radio"] {
        display: none;
    }

    .ticket-card label {
        display: block;
        padding: 2rem;
        cursor: pointer;
        height: 100%;
    }

    .ticket-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .ticket-card input[type="radio"]:checked + label {
        background: linear-gradient(135deg, rgba(32, 178, 170, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
    }

    .ticket-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .ticket-header h4 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0;
    }

    .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #20b2aa;
    }

    .ticket-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: linear-gradient(45deg, #ffd700, #ffa500);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .ticket-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .ticket-card li {
        padding: 0.5rem 0;
        color: #64748b;
        position: relative;
        padding-left: 1.5rem;
    }

    .ticket-card li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #20b2aa;
        font-weight: bold;
    }

    /* Offers Grid */
    .offers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .offer-card {
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
    }

    .offer-card:hover {
        border-color: #20b2aa;
        transform: translateY(-2px);
    }

    .offer-card h4 {
        color: #1e293b;
        margin-bottom: 0.5rem;
    }

    .offer-card p {
        color: #64748b;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .offer-card .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #20b2aa;
        margin-bottom: 1rem;
    }

    /* FAQ Accordion */
    .faq-section {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 2px solid #f1f5f9;
    }

    .accordion {
        max-width: 100%;
    }

    .accordion-item {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 1rem;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
    }

    .accordion-item:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }

    .accordion-header {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        transition: all 0.3s ease;
        user-select: none;
    }

    .accordion-header:hover {
        background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    }

    .accordion-header h4 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #1e293b;
        flex-grow: 1;
    }

    .accordion-header i {
        font-size: 1.2rem;
        color: #64748b;
        transition: transform 0.3s ease;
        margin-left: 1rem;
    }

    .accordion-item.active .accordion-header i {
        transform: rotate(180deg);
    }

    .accordion-content {
        padding: 0 1.5rem;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        background: white;
    }

    .accordion-item.active .accordion-content {
        padding: 1.5rem;
        max-height: 200px;
    }

    .accordion-content p {
        margin: 0;
        color: #475569;
        line-height: 1.6;
        font-size: 0.95rem;
    }

    /* Support and Feedback Sections */
    .support-section, .feedback-section {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 2px solid #f1f5f9;
    }

    .support-form, .feedback-form {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        border: 1px solid #e2e8f0;
    }

    .rating-stars {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    .rating-stars .star {
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0.3;
    }

    .rating-stars .star:hover,
    .rating-stars .star.active {
        opacity: 1;
        transform: scale(1.2);
    }

    /* Checkbox styles */
    .checkbox-group {
        margin: 2rem 0;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 1rem;
        line-height: 1.4;
        font-size: 0.95rem;
        color: #374151;
    }

    .checkbox-label input[type="checkbox"] {
        display: none;
    }

    .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #cbd5e0;
        border-radius: 6px;
        margin-right: 0.75rem;
        position: relative;
        transition: all 0.3s ease;
        background: white;
        flex-shrink: 0;
    }

    .checkbox-label input[type="checkbox"]:checked + .checkmark {
        background: linear-gradient(135deg, #20b2aa, #4ecdc4);
        border-color: #20b2aa;
        transform: scale(1.05);
    }

    .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
        content: '';
        position: absolute;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    /* Submit button */
    .form-actions {
        text-align: center;
        padding-top: 2rem;
    }

    .register-btn {
        background: linear-gradient(135deg, #20b2aa, #4ecdc4);
        color: white;
        border: none;
        padding: 1rem 3rem;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(32, 178, 170, 0.3);
    }

    .register-btn:hover {
        background: linear-gradient(135deg, #1e9e96, #45b8ac);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(32, 178, 170, 0.4);
    }

    /* Security badges */
    .security-badges {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .security-badges .badge {
        background: linear-gradient(135deg, #f8fafc, #e2e8f0);
        border: 1px solid #cbd5e1;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-size: 0.9rem;
        color: #475569;
        font-weight: 600;
    }

    /* Dark mode styles */
    :global(body.dark-mode) .register-page {
        background: linear-gradient(135deg, rgba(32, 178, 170, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
    }

    :global(body.dark-mode) .registration-form {
        background: #1e293b;
        border-color: #334155;
    }

    :global(body.dark-mode) .section-header h3 {
        color: #f1f5f9;
    }

    :global(body.dark-mode) .section-header p {
        color: #cbd5e1;
    }

    :global(body.dark-mode) .form-control {
        background: #334155;
        border-color: #475569;
        color: #f1f5f9;
    }

    :global(body.dark-mode) .form-control::placeholder {
        color: #94a3b8;
    }

    :global(body.dark-mode) .accordion-item {
        background: #1e293b;
        border-color: #334155;
    }

    :global(body.dark-mode) .accordion-header {
        background: linear-gradient(135deg, #334155 0%, #475569 100%);
    }

    :global(body.dark-mode) .accordion-header h4 {
        color: #f1f5f9;
    }

    :global(body.dark-mode) .accordion-content {
        background: #1e293b;
    }

    :global(body.dark-mode) .accordion-content p {
        color: #cbd5e1;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .page-header {
            padding: 2rem 1rem;
        }

        .page-header h1 {
            font-size: 2rem;
        }

        .conference-dates {
            flex-direction: column;
            gap: 0.5rem;
        }

        .registration-container {
            padding: 0 1rem 2rem;
        }

        .registration-form {
            padding: 2rem 1.5rem;
        }

        .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .progress-indicator {
            gap: 1rem;
        }

        .ticket-options {
            grid-template-columns: 1fr;
        }

        .offers-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

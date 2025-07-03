<script>
    import { conferenceData } from '../lib/store.js';
    import { navigate } from '../lib/router.js';
    import { onMount } from 'svelte';
    
    let timeRemaining = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    function updateCountdown() {
        const now = new Date();
        const eventDate = new Date('2025-07-21T09:00:00');
        const diff = eventDate - now;

        if (diff > 0) {
            timeRemaining.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            timeRemaining.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeRemaining.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            timeRemaining.seconds = Math.floor((diff % (1000 * 60)) / 1000);
        }
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    });

    function handleRegisterClick() {
        navigate('register');
    }
</script>

<div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">{$conferenceData.name}</h1>
            <p class="hero-tagline">{$conferenceData.tagline}</p>
            <div class="hero-details">
                <p class="date">📅 {$conferenceData.date}</p>
                <p class="location">📍 {$conferenceData.location}</p>
            </div>
            <button class="cta-button" on:click={handleRegisterClick}>Register Now</button>
        </div>
        <div class="hero-visual">
            <div class="floating-elements">
                <div class="element">💻</div>
                <div class="element">🚀</div>
                <div class="element">⚡</div>
                <div class="element">🔬</div>
                <div class="element">🌟</div>
            </div>
        </div>
    </section>

    <!-- Countdown Timer -->
    <section class="countdown">
        <h2>Event Countdown</h2>
        <div class="timer">
            <div class="time-unit">
                <span class="number">{timeRemaining.days}</span>
                <span class="label">Days</span>
            </div>
            <div class="time-unit">
                <span class="number">{timeRemaining.hours}</span>
                <span class="label">Hours</span>
            </div>
            <div class="time-unit">
                <span class="number">{timeRemaining.minutes}</span>
                <span class="label">Minutes</span>
            </div>
            <div class="time-unit">
                <span class="number">{timeRemaining.seconds}</span>
                <span class="label">Seconds</span>
            </div>
        </div>
    </section>

    <!-- Quick Info -->
    <section class="quick-info">
        <div class="info-grid">
            <div class="info-card">
                <div class="icon">👥</div>
                <h3>2000+ Attendees</h3>
                <p>Join tech enthusiasts from around the world</p>
            </div>
            <div class="info-card">
                <div class="icon">🎤</div>
                <h3>50+ Speakers</h3>
                <p>Industry leaders sharing their expertise</p>
            </div>
            <div class="info-card">
                <div class="icon">🛠️</div>
                <h3>20+ Workshops</h3>
                <p>Hands-on learning experiences</p>
            </div>
            <div class="info-card">
                <div class="icon">🤝</div>
                <h3>Networking</h3>
                <p>Connect with peers and potential partners</p>
            </div>
        </div>
    </section>
</div>

<style>
    .home-page {
        min-height: 100vh;
        padding-top: 0; /* Main content handles navbar spacing */
    }

    .hero {
        background: linear-gradient(135deg, #20b2aa 0%, #4ecdc4 100%);
        padding: 4rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        min-height: 80vh;
        color: white;
    }

    .hero-content {
        flex: 1;
        max-width: 600px;
    }

    .hero-title {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1rem;
        background: linear-gradient(45deg, #fff, #f0f9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-tagline {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .hero-details {
        margin-bottom: 2rem;
    }

    .hero-details p {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .cta-button {
        background: linear-gradient(45deg, #ff6b6b, #ff8e53);
        border: none;
        color: white;
        padding: 1.25rem 2.5rem;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 30px rgba(255,107,107,0.3);
    }

    .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 40px rgba(255,107,107,0.4);
    }

    .hero-visual {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .floating-elements {
        position: relative;
        width: 300px;
        height: 300px;
    }

    .element {
        position: absolute;
        font-size: 3rem;
        animation: float 3s ease-in-out infinite;
    }

    .element:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
    .element:nth-child(2) { top: 20%; right: 20%; animation-delay: 0.5s; }
    .element:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 1s; }
    .element:nth-child(4) { bottom: 20%; right: 10%; animation-delay: 1.5s; }
    .element:nth-child(5) { top: 50%; left: 50%; animation-delay: 2s; }

    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
    }

    .countdown {
        background: #f8fafc;
        padding: 4rem 2rem;
        text-align: center;
    }

    .countdown h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .timer {
        display: flex;
        justify-content: center;
        gap: 2rem;
        max-width: 600px;
        margin: 0 auto;
    }

    .time-unit {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        min-width: 120px;
    }

    .time-unit .number {
        display: block;
        font-size: 3rem;
        font-weight: bold;
        color: #667eea;
    }

    .time-unit .label {
        color: #666;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .quick-info {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 4rem 2rem;
        color: white;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .info-card {
        text-align: center;
        padding: 2rem;
        background: rgba(255,255,255,0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }

    .info-card .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .info-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .info-card p {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        .hero {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
        }

        .hero-title {
            font-size: 2.5rem;
        }

        .timer {
            flex-wrap: wrap;
            gap: 1rem;
        }

        .time-unit {
            min-width: 100px;
            padding: 1rem;
        }

        .time-unit .number {
            font-size: 2rem;
        }
    }
</style>

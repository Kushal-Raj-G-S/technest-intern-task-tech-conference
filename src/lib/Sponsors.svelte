<script>
    import { conferenceData } from '../lib/store.js';
</script>

<div class="sponsors-page">
    <div class="page-header">
        <h1>Our Sponsors</h1>
        <p>Thank you to our amazing sponsors who make TechNest 2025 possible</p>
    </div>

    <!-- Gold Sponsors -->
    <section class="sponsor-tier gold">
        <div class="tier-header">
            <h2>🥇 Gold Sponsors</h2>
            <p>Premier partners supporting innovation in technology</p>
        </div>
        <div class="sponsors-grid gold-grid">
            {#each $conferenceData.sponsors.gold as sponsor}
                <a href={sponsor.website} target="_blank" rel="noopener" class="sponsor-card gold-card">
                    <div class="logo-container">
                        <img src={sponsor.logo} alt={sponsor.name} />
                    </div>
                    <div class="sponsor-info">
                        <h3>{sponsor.name}</h3>
                        <p>{sponsor.description}</p>
                    </div>
                </a>
            {/each}
        </div>
    </section>

    <!-- Silver Sponsors -->
    <section class="sponsor-tier silver">
        <div class="tier-header">
            <h2>🥈 Silver Sponsors</h2>
            <p>Valued partners driving technological advancement</p>
        </div>
        <div class="sponsors-grid silver-grid">
            {#each $conferenceData.sponsors.silver as sponsor}
                <a href={sponsor.website} target="_blank" rel="noopener" class="sponsor-card silver-card">
                    <div class="logo-container">
                        <img src={sponsor.logo} alt={sponsor.name} />
                    </div>
                    <div class="sponsor-info">
                        <h3>{sponsor.name}</h3>
                        <p>{sponsor.description}</p>
                    </div>
                </a>
            {/each}
        </div>
    </section>

    <!-- Bronze Sponsors -->
    <section class="sponsor-tier bronze">
        <div class="tier-header">
            <h2>🥉 Bronze Sponsors</h2>
            <p>Supporting partners fostering tech community growth</p>
        </div>
        <div class="sponsors-grid bronze-grid">
            {#each $conferenceData.sponsors.bronze as sponsor}
                <a href={sponsor.website} target="_blank" rel="noopener" class="sponsor-card bronze-card">
                    <div class="logo-container">
                        <img src={sponsor.logo} alt={sponsor.name} />
                    </div>
                    <div class="sponsor-info">
                        <h3>{sponsor.name}</h3>
                        <p>{sponsor.description}</p>
                    </div>
                </a>
            {/each}
        </div>
    </section>

    <!-- Sponsorship Benefits -->
    <section class="benefits-section">
        <h2>Sponsorship Benefits</h2>
        <div class="benefits-grid">
            <div class="benefit-card">
                <div class="icon">📈</div>
                <h3>Brand Visibility</h3>
                <p>Showcase your brand to 2000+ tech professionals and decision makers</p>
            </div>
            <div class="benefit-card">
                <div class="icon">🤝</div>
                <h3>Networking</h3>
                <p>Connect with potential clients, partners, and top talent in the industry</p>
            </div>
            <div class="benefit-card">
                <div class="icon">🎯</div>
                <h3>Targeted Audience</h3>
                <p>Reach a focused audience of developers, engineers, and tech leaders</p>
            </div>
            <div class="benefit-card">
                <div class="icon">💡</div>
                <h3>Thought Leadership</h3>
                <p>Position your company as an innovator in the technology space</p>
            </div>
        </div>
    </section>

    <!-- Become a Sponsor -->
    <section class="cta-section">
        <div class="cta-content">
            <h2>Become a Sponsor</h2>
            <p>Join us in shaping the future of technology. Various sponsorship packages available.</p>
            <div class="cta-buttons">
                <button class="sponsor-btn primary">Download Sponsorship Package</button>
                <button class="sponsor-btn secondary">Contact Us</button>
            </div>
        </div>
    </section>
</div>

<style>
    .sponsors-page {
        min-height: 100vh;
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
        max-width: 600px;
        margin: 0 auto;
    }

    .sponsor-tier {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 2rem;
    }

    .tier-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .tier-header h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .tier-header p {
        font-size: 1.1rem;
        color: #666;
    }

    .sponsors-grid {
        display: grid;
        gap: 2rem;
        justify-items: center;
    }

    .gold-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .silver-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .bronze-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .sponsor-card {
        background: white;
        border-radius: 15px;
        padding: 2rem;
        text-align: center;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        width: 100%;
        max-width: 100%;
    }

    .sponsor-card:hover {
        transform: translateY(-10px);
        text-decoration: none;
        color: inherit;
    }

    .gold-card {
        border: 3px solid #ffd700;
        box-shadow: 0 10px 30px rgba(255,215,0,0.2);
    }

    .gold-card:hover {
        box-shadow: 0 15px 40px rgba(255,215,0,0.3);
    }

    .silver-card {
        border: 3px solid #c0c0c0;
        box-shadow: 0 8px 25px rgba(192,192,192,0.2);
    }

    .silver-card:hover {
        box-shadow: 0 12px 35px rgba(192,192,192,0.3);
    }

    .bronze-card {
        border: 3px solid #cd7f32;
        box-shadow: 0 6px 20px rgba(205,127,50,0.2);
    }

    .bronze-card:hover {
        box-shadow: 0 10px 30px rgba(205,127,50,0.3);
    }

    .logo-container {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 10px;
    }

    .logo-container img {
        max-width: 100%;
        max-height: 80px;
        object-fit: contain;
        display: block;
    }

    .sponsor-card h3 {
        font-size: 1.3rem;
        color: #333;
        margin: 0;
    }

    .benefits-section {
        background: #f8fafc;
        padding: 4rem 2rem;
    }

    .benefits-section h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
    }

    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .benefit-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .benefit-card:hover {
        transform: translateY(-5px);
    }

    .benefit-card .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .benefit-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .benefit-card p {
        color: #666;
        line-height: 1.6;
    }

    .cta-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 4rem 2rem;
        text-align: center;
        color: white;
    }

    .cta-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .cta-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .sponsor-btn {
        padding: 1rem 2rem;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        text-decoration: none;
        display: inline-block;
    }

    .sponsor-btn.primary {
        background: white;
        color: #667eea;
        border-color: white;
    }

    .sponsor-btn.primary:hover {
        background: transparent;
        color: white;
        border-color: white;
        transform: translateY(-2px);
    }

    .sponsor-btn.secondary {
        background: transparent;
        color: white;
        border-color: white;
    }

    .sponsor-btn.secondary:hover {
        background: white;
        color: #667eea;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .page-header h1 {
            font-size: 2rem;
        }

        .tier-header h2 {
            font-size: 2rem;
        }

        .gold-grid,
        .silver-grid,
        .bronze-grid {
            grid-template-columns: 1fr;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }

        .sponsor-btn {
            width: 100%;
            max-width: 300px;
        }
    }
</style>

<script>
    import { conferenceData } from '../lib/store.js';
    import { navigate } from '../lib/router.js';

    // Extended speakers list including keynote speakers and additional speakers
    const allSpeakers = [
        ...$conferenceData.keynote_speakers,
        {
            id: 6,
            name: "James Kim",
            title: "Blockchain Architect at CryptoInnovate",
            topic: "Decentralized Applications of Tomorrow",
            bio: "Leading blockchain developer with expertise in DeFi protocols and smart contract security. Pioneer in next-generation blockchain solutions.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&facepad=2",
            type: "speaker"
        },
        {
            id: 7,
            name: "Lisa Chen",
            title: "VP of Engineering at CloudTech",
            topic: "Scaling Applications in the Cloud",
            bio: "Expert in cloud architecture and DevOps with extensive experience in building scalable systems for millions of users.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces&facepad=2",
            type: "speaker"
        },
        {
            id: 8,
            name: "Dr. Michael Torres",
            title: "Cybersecurity Research Director",
            topic: "Future of Cybersecurity",
            bio: "Leading cybersecurity researcher focused on AI-powered threat detection and zero-trust security architectures.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&facepad=2",
            type: "speaker"
        },
        {
            id: 9,
            name: "Rachel Green",
            title: "UX Design Lead at TechFlow",
            topic: "Designing for Accessibility",
            bio: "Passionate about creating inclusive digital experiences with focus on accessibility and user-centered design principles.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces&facepad=2",
            type: "speaker"
        },
        {
            id: 9,
            name: "David Park",
            title: "IoT Solutions Architect",
            topic: "Connected Devices Revolution",
            bio: "Expert in Internet of Things architecture with experience in smart city projects and industrial automation systems.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&facepad=2",
            type: "speaker"
        }
    ];
</script>

<div class="speakers-page">


    <div class="page-header">
        <div class="container">
            <h1>Our Amazing Speakers</h1>
            <p>Meet the industry leaders and innovators who will be sharing their expertise at CodeVibe 2025</p>
        </div>
    </div>

    <div class="container">
        <!-- Keynote Speakers Section -->
        <section class="keynote-section">
            <h2>Keynote Speakers</h2>
            <div class="keynote-grid">
                {#each $conferenceData.keynote_speakers as speaker}
                    <div class="keynote-card">
                        <div class="keynote-image">
                            <img src={speaker.image} alt={speaker.name} />
                            <div class="keynote-badge">Keynote</div>
                        </div>
                        <div class="keynote-content">
                            <h3>{speaker.name}</h3>
                            <p class="title">{speaker.title}</p>
                            <p class="topic">"{speaker.topic}"</p>
                            <p class="bio">{speaker.bio}</p>
                            <div class="speaker-topics">
                                <span class="topic-tag">Keynote Speaker</span>
                                <span class="topic-tag">Tech Innovation</span>
                            </div>
                            <div class="social-links">
                                <a href="https://twitter.com" class="social-link" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                                <a href="https://linkedin.com" class="social-link" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                                <a href="https://example.com" class="social-link" aria-label="Website"><i class="bi bi-globe"></i></a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

    <!-- All Speakers Section -->
    <section class="all-speakers">
        <h2>Featured Speakers</h2>
        <div class="speakers-grid">
            {#each allSpeakers.filter(s => !$conferenceData.keynote_speakers.find(k => k.id === s.id)) as speaker}
                <div class="speaker-card">
                    <div class="speaker-image">
                        <img src={speaker.image} alt={speaker.name} />
                    </div>
                    <div class="speaker-content">
                        <h3>{speaker.name}</h3>
                        <p class="title">{speaker.title}</p>
                        <p class="topic">{speaker.topic}</p>
                        <p class="bio">{speaker.bio}</p>
                        <div class="speaker-topics">
                            <span class="topic-tag">Speaker</span>
                            <span class="topic-tag">Expert</span>
                        </div>
                        <div class="social-links">
                            <a href="https://twitter.com" class="social-link" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                            <a href="https://linkedin.com" class="social-link" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
        <div class="cta-content">
            <h2>Don't Miss Out!</h2>
            <p>Secure your spot to learn from these incredible speakers</p>
            <button class="register-btn" on:click={() => navigate('register')}>Register Now</button>
        </div>
    </section>
    </div>
</div>

<style>


    .speakers-page {
        min-height: 100vh;
        padding-top: 2rem; /* Reduced padding for single-page layout */
    }

    .page-header {
        text-align: center;
        padding: 5rem 2rem 4rem; /* Increased top padding to account for back button */
        background: linear-gradient(135deg, #e0f7fa 0%, #b2dfdb 100%);
        margin-bottom: 4rem;
    }

    .page-header h1 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: bold;
    }

    .page-header p {
        font-size: 1.3rem;
        color: #006064;
        max-width: 700px;
        margin: 0 auto;
        font-weight: 500;
    }

    .keynote-section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .keynote-section h2 {
        text-align: center;
        font-size: 2.8rem;
        margin-bottom: 3rem;
        color: #20b2aa;
        font-weight: bold;
    }

    .keynote-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 3rem;
    }

    .keynote-card {
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(32, 178, 170, 0.15);
        transition: all 0.3s ease;
        border: 3px solid #20b2aa;
    }

    .keynote-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 30px 80px rgba(32, 178, 170, 0.25);
    }

    .keynote-image {
        position: relative;
        width: 100%;
        height: 300px; /* Fixed height for 1:1 ratio container */
        overflow: hidden;
    }

    .keynote-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .keynote-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: linear-gradient(45deg, #20b2aa, #4ecdc4);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .keynote-content {
        padding: 2.5rem;
    }

    .keynote-content h3 {
        font-size: 2rem;
        margin-bottom: 0.8rem;
        color: #20b2aa;
        font-weight: bold;
    }

    .keynote-content .title {
        color: #006064;
        font-weight: 600;
        margin-bottom: 1.2rem;
        font-size: 1.2rem;
        line-height: 1.4;
    }

    .keynote-content .topic {
        color: #4ecdc4;
        font-style: italic;
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
        line-height: 1.5;
    }

    .keynote-content .bio {
        color: #666;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .speaker-topics {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .topic-tag {
        background: rgba(32, 178, 170, 0.1);
        color: #20b2aa;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .social-links {
        display: flex;
        gap: 0.5rem;
    }

    .social-link {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #f5f5f5;
        color: #20b2aa;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .social-link:hover {
        background: #20b2aa;
        color: white;
        transform: scale(1.1);
    }

    .all-speakers {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .all-speakers h2 {
        text-align: center;
        font-size: 2.8rem;
        margin-bottom: 3rem;
        color: #20b2aa;
        font-weight: bold;
    }

    .speakers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2.5rem;
    }

    .speaker-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 15px 40px rgba(32, 178, 170, 0.1);
        transition: all 0.3s ease;
        border: 2px solid #e0f7fa;
    }

    .speaker-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 60px rgba(32, 178, 170, 0.2);
        border-color: #20b2aa;
    }

    .speaker-image {
        height: 250px; /* Fixed height for consistent 1:1 ratio */
        overflow: hidden;
    }

    .speaker-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .speaker-content {
        padding: 2rem;
    }

    .speaker-content h3 {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
        color: #20b2aa;
        font-weight: bold;
    }

    .speaker-content .title {
        color: #006064;
        font-weight: 600;
        margin-bottom: 1rem;
        font-size: 1.1rem;
        line-height: 1.4;
    }

    .speaker-content .topic {
        color: #e74c3c;
        font-style: italic;
        margin-bottom: 0.75rem;
        font-weight: 500;
    }

    .speaker-content .bio {
        color: #666;
        line-height: 1.5;
        font-size: 0.9rem;
        margin-bottom: 1rem;
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

    .register-btn {
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

    .register-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 40px rgba(255,107,107,0.4);
    }

    @media (max-width: 768px) {
        .page-header h1 {
            font-size: 2rem;
        }

        .keynote-grid,
        .speakers-grid {
            grid-template-columns: 1fr;
        }

        .keynote-card,
        .speaker-card {
            margin: 0 1rem;
        }
    }
</style>

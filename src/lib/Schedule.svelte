<script>
    import { conferenceData } from '../lib/store.js';
    
    let selectedDay = 0;
    
    function selectDay(index) {
        selectedDay = index;
    }
    
    function getSessionTypeClass(type) {
        const typeClasses = {
            keynote: 'keynote',
            panel: 'panel',
            workshop: 'workshop',
            networking: 'networking',
            break: 'break',
            reception: 'reception',
            presentation: 'presentation',
            ceremony: 'ceremony',
            party: 'party',
            dinner: 'dinner',
            registration: 'registration'
        };
        return typeClasses[type] || 'default';
    }
    
    function getSessionIcon(type) {
        const icons = {
            keynote: '🎤',
            panel: '👥',
            workshop: '🛠️',
            networking: '🤝',
            break: '☕',
            reception: '🥂',
            presentation: '📊',
            ceremony: '🎉',
            party: '🎊',
            dinner: '🍽️',
            registration: '📝'
        };
        return icons[type] || '📅';
    }

    function generatePDF() {
        // Create a new window for PDF content
        const printWindow = window.open('', '_blank');
        
        // Generate HTML content for PDF
        let htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>CodeVibe 2025 - Conference Schedule</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
                    .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #20b2aa; padding-bottom: 15px; }
                    .header h1 { color: #20b2aa; margin: 0; font-size: 28px; }
                    .header p { margin: 5px 0; color: #666; }
                    .day-section { margin-bottom: 40px; page-break-inside: avoid; }
                    .day-title { background: #20b2aa; color: white; padding: 10px; margin: 0 0 20px 0; font-size: 20px; }
                    .session { margin-bottom: 15px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
                    .session-time { font-weight: bold; color: #20b2aa; font-size: 14px; }
                    .session-title { font-size: 16px; font-weight: bold; margin: 5px 0; }
                    .session-speaker { color: #666; font-style: italic; }
                    .session-type { background: #f0f0f0; padding: 2px 8px; border-radius: 3px; font-size: 12px; margin-top: 5px; display: inline-block; }
                    .keynote { background: #ffd700; }
                    .workshop { background: #87ceeb; }
                    .networking { background: #98fb98; }
                    .break { background: #f0e68c; }
                    @media print { body { margin: 0; } .day-section { page-break-after: always; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🚀 CodeVibe 2025 Conference Schedule</h1>
                    <p><strong>Date:</strong> March 15-17, 2025</p>
                    <p><strong>Location:</strong> KTPO Center, Whitefield, Bangalore</p>
                    <p><strong>Website:</strong> www.codevibe2025.com</p>
                </div>
        `;

        // Add each day's schedule
        $conferenceData.schedule.forEach((day, dayIndex) => {
            htmlContent += `
                <div class="day-section">
                    <h2 class="day-title">${day.day}</h2>
            `;
            
            day.sessions.forEach(session => {
                const sessionType = session.type || 'default';
                htmlContent += `
                    <div class="session">
                        <div class="session-time">${session.time}</div>
                        <div class="session-title">${session.title}</div>
                        ${session.speaker ? `<div class="session-speaker">Speaker: ${session.speaker}</div>` : ''}
                        <div class="session-type ${sessionType}">${sessionType.toUpperCase()}</div>
                    </div>
                `;
            });
            
            htmlContent += `</div>`;
        });

        htmlContent += `
                <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
                    <p>Generated on ${new Date().toLocaleDateString()}</p>
                    <p>For updates and more information, visit www.codevibe2025.com</p>
                </div>
            </body>
            </html>
        `;

        // Write content to new window and trigger print
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Wait for content to load, then print
        printWindow.onload = function() {
            setTimeout(() => {
                printWindow.print();
            }, 500);
        };
    }
</script>

<div class="schedule-page">
    <div class="page-header">
        <h1>Conference Schedule</h1>
        <p>Three days packed with inspiring talks, hands-on workshops, and networking opportunities</p>
    </div>

    <!-- Day Selector -->
    <div class="day-selector">
        {#each $conferenceData.schedule as day, index}
            <button 
                class="day-tab" 
                class:active={selectedDay === index}
                on:click={() => selectDay(index)}
            >
                {day.day}
            </button>
        {/each}
    </div>

    <!-- Schedule Content -->
    <div class="schedule-content">
        <div class="schedule-container">
            <h2>{$conferenceData.schedule[selectedDay].day}</h2>
            
            <div class="sessions-list">
                {#each $conferenceData.schedule[selectedDay].sessions as session}
                    <div class="session-card {getSessionTypeClass(session.type)}">
                        <div class="session-time">
                            <span class="time">{session.time}</span>
                        </div>
                        <div class="session-content">
                            <div class="session-icon">{getSessionIcon(session.type)}</div>
                            <div class="session-details">
                                <h3>{session.title}</h3>
                                {#if session.speaker}
                                    <p class="speaker">{session.speaker}</p>
                                {/if}
                                <span class="session-type">{session.type.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Schedule Overview -->
    <div class="schedule-overview">
        <h2>At a Glance</h2>
        <div class="overview-grid">
            <div class="overview-card">
                <div class="icon">🎤</div>
                <h3>Keynote Sessions</h3>
                <p>3 inspiring keynote presentations from industry leaders</p>
            </div>
            <div class="overview-card">
                <div class="icon">🛠️</div>
                <h3>Workshops</h3>
                <p>Hands-on learning sessions with practical takeaways</p>
            </div>
            <div class="overview-card">
                <div class="icon">👥</div>
                <h3>Panel Discussions</h3>
                <p>Expert panels covering the latest tech trends</p>
            </div>
            <div class="overview-card">
                <div class="icon">🤝</div>
                <h3>Networking</h3>
                <p>Multiple opportunities to connect with peers</p>
            </div>
        </div>
    </div>

    <!-- Download Schedule -->
    <div class="download-section">
        <h3>Take the Schedule with You</h3>
        <p>Download the complete conference schedule for offline access</p>
        <button class="download-btn" on:click={generatePDF}>📅 Download PDF Schedule</button>
    </div>
</div>

<style>
    .schedule-page {
        min-height: 100vh;
    }

    .page-header {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
        margin-bottom: 2rem;
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

    .day-selector {
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 2rem;
        flex-wrap: wrap;
    }

    .day-tab {
        background: white;
        border: 2px solid #667eea;
        color: #667eea;
        padding: 1rem 2rem;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        font-size: 1rem;
    }

    .day-tab:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
    }

    .day-tab.active {
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border-color: transparent;
    }

    .schedule-content {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    .schedule-container h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
    }

    .sessions-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .session-card {
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        display: flex;
        gap: 1.5rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        border-left: 4px solid #667eea;
    }

    .session-card:hover {
        transform: translateX(5px);
    }

    .session-card.keynote {
        border-left-color: #e74c3c;
        background: linear-gradient(135deg, #fff 0%, #fff5f5 100%);
    }

    .session-card.workshop {
        border-left-color: #f39c12;
        background: linear-gradient(135deg, #fff 0%, #fffbf0 100%);
    }

    .session-card.panel {
        border-left-color: #27ae60;
        background: linear-gradient(135deg, #fff 0%, #f0fff4 100%);
    }

    .session-card.networking {
        border-left-color: #9b59b6;
        background: linear-gradient(135deg, #fff 0%, #faf5ff 100%);
    }

    .session-card.break {
        border-left-color: #95a5a6;
        background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    }

    .session-time {
        flex-shrink: 0;
        text-align: center;
        min-width: 100px;
    }

    .session-time .time {
        font-size: 1.2rem;
        font-weight: bold;
        color: #667eea;
        background: #f0f9ff;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        display: inline-block;
    }

    .session-content {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        flex: 1;
    }

    .session-icon {
        font-size: 2rem;
        flex-shrink: 0;
    }

    .session-details {
        flex: 1;
    }

    .session-details h3 {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        color: #333;
    }

    .session-details .speaker {
        color: #667eea;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .session-type {
        background: #667eea;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .schedule-overview {
        background: #f8fafc;
        padding: 4rem 2rem;
        margin-top: 4rem;
    }

    .schedule-overview h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
    }

    .overview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .overview-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }

    .overview-card .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .overview-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .overview-card p {
        color: #666;
        line-height: 1.6;
    }

    .download-section {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .download-section h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .download-section p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .download-btn {
        background: rgba(255,255,255,0.2);
        border: 2px solid white;
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .download-btn:hover {
        background: white;
        color: #667eea;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .page-header h1 {
            font-size: 2rem;
        }

        .day-tab {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
        }

        .session-card {
            flex-direction: column;
            gap: 1rem;
        }

        .session-time {
            min-width: auto;
            text-align: left;
        }

        .session-content {
            gap: 0.75rem;
        }

        .session-icon {
            font-size: 1.5rem;
        }

        .session-details h3 {
            font-size: 1.2rem;
        }
    }
</style>

/* ==================== BASE ==================== */
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #ff9a9e, #fecfef, #fbc2eb);
    color: #222;
}

/* ==================== LANDING PAGE ==================== */
.landing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    padding: 20px;
}
.centerBox {
    max-width: 400px;
    width: 100%;
}
.title {
    font-size: 42px;
    margin-bottom: 10px;
    color: #ff1a6b;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}
.subtitle {
    font-size: 16px;
    margin-bottom: 30px;
    color: #333;
    opacity: 0.9;
    line-height: 1.5;
}

/* ==================== LOGIN / ARCHIVE CARD ==================== */
.loginCard {
    background: #ffffffee;
    padding: 25px;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    transition: transform 0.3s, box-shadow 0.3s;
}
.loginCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}
.loginCard p {
    margin-bottom: 15px;
    color: #ff4d88;
    font-weight: bold;
    font-size: 14px;
}
.loginCard input {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 14px;
}
.loginCard button {
    margin-top: 5px;
    padding: 12px;
    width: 100%;
    border: none;
    background: #ff4d88;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s, transform 0.2s;
}
.loginCard button:hover {
    background: #e6006a;
    transform: translateY(-2px);
}

/* ==================== DASHBOARD & ARCHIVE LAYOUT ==================== */
.layout {
    display: flex;
    height: 100vh;
}

/* SIDEBAR */
.sidebar {
    width: 220px;
    background: #ffffffdd;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    backdrop-filter: blur(10px);
    border-right: 1px solid #ffd1e0;
}
.sidebar h2 {
    color: #ff1a6b;
    text-align: center;
    margin: 0 0 10px 0;
}
.sidebar input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
}
.sidebar button {
    background: #ff4d88;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}
.sidebar button:hover {
    background: #e6006a;
}
.sidebar a {
    text-decoration: none;
    color: #ff1a6b;
    font-weight: bold;
    transition: color 0.2s;
}
.sidebar a:hover {
    color: #e6006a;
}

/* MAIN AREA */
.main {
    flex: 1;
    padding: 40px;
    background: #fff;
    border-top-left-radius: 20px;
    overflow-y: auto;
}

/* LETTER BOX */
.letterBox {
    background: #fff0f6;
    padding: 25px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.letterBox input,
.letterBox textarea {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 14px;
}
.letterBox textarea {
    height: 150px;
    resize: vertical;
}
.letterBox button {
    background: #ff4d88;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s, transform 0.2s;
}
.letterBox button:hover {
    background: #e6006a;
    transform: translateY(-2px);
}

/* LETTER CARDS */
.letter {
    background: #ffe6f0;
    padding: 20px;
    border-radius: 12px;
    margin-top: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}
.letter:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
.letter h3 {
    margin: 0 0 5px 0;
    color: #ff1a6b;
}
.letter p {
    margin: 0;
    color: #222;
}
.spotifyCover {
    margin-top: 10px;
    width: 100px;
    border-radius: 8px;
}

/* PUBLISHED LETTER ANIMATION */
#animationContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    z-index: 1000;
}
.envelopeCenter {
    width: 150px;
    height: 100px;
    background: #ffb6c1;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #ff4d88;
    font-size: 16px;
    animation: dropCenter 5s ease forwards;
}
@keyframes dropCenter {
    0% { transform: translateY(-200px) scale(0.5); opacity: 0; }
    50% { transform: translateY(0) scale(1.1); opacity: 1; }
    80% { transform: translateY(-20px) scale(1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0; }
}

/* FOOTER */
footer {
    margin-top: 40px;
    color: #fff;
    font-size: 14px;
    opacity: 0.8;
    text-align: center;
}

/* RESPONSIVE */
@media screen and (max-width: 600px) {
    .layout { flex-direction: column; }
    .sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; justify-content: space-around; padding: 15px; }
    .main { padding: 20px; border-radius: 0; }
    .letterBox { padding: 20px; }
}

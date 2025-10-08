:root{
  --bg:#0b0a1f; --bg-2:#0a1633; --bg-3:#0b1b3f;
  --panel:#151a3a; --text:#e7e9ee; --muted:#bfc6d8;
  --brand:#78A6FF; --border:#232945;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:linear-gradient(180deg,var(--bg)0%,var(--bg-2)60%,var(--bg-3)100%);color:var(--text);font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;scroll-behavior:smooth}
img{max-width:100%;display:block}
a{color:var(--text);text-decoration:none}

/* Topbar */
.topbar{position:sticky;top:0;z-index:60;background:rgba(15,18,42,.7);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.75rem;padding:.6rem .9rem}
.brand{font-weight:700}
.icon-btn{background:rgba(255,255,255,.06);border:1px solid var(--border);color:var(--text);border-radius:.6rem;padding:.4rem .6rem;cursor:pointer}
.icon-btn.close{position:absolute;top:.6rem;right:.6rem}

/* Sidebar */
.sidebar{position:fixed;inset:0 30% 0 0;transform:translateX(-100%);transition:transform .28s ease;z-index:70;background:linear-gradient(180deg,rgba(15,18,42,.98),rgba(10,13,34,.98));border-right:1px solid var(--border);display:flex;flex-direction:column;padding:1rem}
.sidebar.open{transform:none}
.side-nav{display:flex;flex-direction:column;margin-top:2.2rem}
.side-link{padding:.6rem .7rem;border-radius:.5rem;color:var(--muted)}
.side-link:hover,.side-link.active{background:rgba(255,255,255,.06);color:var(--text)}

/* Sections */
.section{padding:2.2rem 1rem}
.section h2{margin:0 0 .75rem}
.lead{color:var(--muted)}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.6rem 1rem;border-radius:.6rem;border:1px solid var(--border);color:var(--text)}
.btn-primary{background:var(--brand);border-color:transparent;color:#0b0f1a}
.wa-btn{background:#25D366;border-color:transparent;color:#0b0f1a}
.wa-icon{display:inline-flex}

/* Hero */
.hero{padding:0}
.hero-3d{position:relative;min-height:78svh;display:grid;place-items:center;overflow:hidden}
.hero-bg{
  position:absolute;inset:-2rem;filter:saturate(108%) contrast(105%) brightness(.95);
  background: url('assets/img/Harshit-Senani-portrait.jpg') center / cover no-repeat fixed;
  transform: translateZ(-60px) scale(1.2);
}
.hero-overlay{
  position:absolute;inset:0;background:radial-gradient(120% 120% at 70% 30%,rgba(120,166,255,.18),rgba(0,0,0,.0) 45%),linear-gradient(180deg,rgba(11,10,31,.35),rgba(11,27,63,.85));
  box-shadow: inset 0 -80px 120px rgba(0,0,0,.6);
}
.hero-content{position:relative;z-index:1;max-width:680px;padding:3.2rem 1rem 2rem;text-align:center}
.stats-card{
  margin:.9rem auto 0;display:flex;gap:.8rem;padding:.85rem;border-radius:16px;max-width:700px;
  background:linear-gradient(180deg,rgba(21,26,58,.85),rgba(10,14,40,.85));
  border:1px solid rgba(124,146,220,.25);box-shadow:0 20px 60px rgba(0,0,0,.35);
}
.stat{display:flex;align-items:center;gap:.7rem;padding:.6rem .7rem;border-radius:12px;background:rgba(255,255,255,.03)}
.stat-icon{width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(120,166,255,.22),rgba(120,166,255,.12));border:1px solid rgba(120,166,255,.25);color:#9fbdff}
.stat-text{display:flex;flex-direction:column;gap:.12rem}
.stat-text strong{font-size:1.08rem}
.stat-text span{color:var(--muted)}
.stat-text small{color:var(--muted);opacity:.95}
.nowrap{white-space:nowrap}.arrow{color:#9fb5ff;margin:0 .2ch}

/* Cards & lists */
.card-list{display:grid;grid-template-columns:1fr;gap:1rem}
.card{background:rgba(21,26,58,.7);border:1px solid var(--border);border-radius:12px;padding:1rem}
.list{margin:.5rem 0 0;padding-left:1.1rem;color:var(--muted)}
.media .media-box{border:1px solid var(--border);border-radius:12px;overflow:hidden;aspect-ratio:16/9;margin-bottom:.6rem}
.media .media-box img{width:100%;height:100%;object-fit:cover}

/* Forms */
.form .form-field{margin-bottom:1rem}
.form input,.form textarea{width:100%;padding:.7rem .8rem;border-radius:.6rem;border:1px solid var(--border);background:rgba(10,16,51,.5);color:var(--text)}
.error{color:#ff9c9c;min-height:1.1rem;display:block}
.form-response.hidden{display:none}
.wa-block{margin-top:1rem}

/* Animations */
.fade-in-up{opacity:0;transform:translateY(14px);animation:fadeUp .7s ease forwards}
.delay-1{animation-delay:.15s}.delay-2{animation-delay:.3s}.delay-3{animation-delay:.45s}
.reveal{opacity:0;transform:translateY(18px)}
.reveal.visible{animation:fadeUp .6s ease forwards}
@keyframes fadeUp{to{opacity:1;transform:none}}
.tilt{transform-style:preserve-3d;perspective:800px}

/* Loader */
.loader{position:fixed;inset:0;background:linear-gradient(180deg,var(--bg),var(--bg-2));display:grid;place-items:center;z-index:100;transition:opacity .35s ease, visibility .35s ease}
.loader.hidden{opacity:0;visibility:hidden}
.spinner{width:42px;height:42px;border-radius:50%;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

/* Desktop scale-ups but keep single-column content width */
@media (min-width:900px){
  .section{padding:2.8rem 1.2rem}
  .card-list{max-width:900px;margin:0 auto}
  .hero-content{max-width:760px}
  .stats-card{max-width:740px}
  .sidebar{inset:0 70% 0 0}
}

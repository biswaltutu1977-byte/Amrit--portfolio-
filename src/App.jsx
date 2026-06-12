import { useState, useEffect, useRef } from "react";

const PHOTO = "https://i.ibb.co/NnG2nHQV/file-0000000077d47206a64e9c3ff1e12fd6.png";

const data = {
  name: "Amrit Pritam Biswal",
  short: "Amrit",
  tagline: "Finance Enthusiast & Aspiring Data Analyst",
  location: "India",
  bio: "I'm pursuing a Bachelor of Business Administration at Dreims University (2025-2028), passionate about finance, business strategy, and data analytics.",
  email: "biswaltutu1977@gmail.com",
  linkedin: "https://www.linkedin.com/in/amrit-pritam-biswal-455abb380",
  instagram: "https://instagram.com/amritpritam82",
  stats: [
    { icon: "🎓", value: 3, label: "Certifications" },
    { icon: "📚", value: 4, label: "Courses Completed" },
    { icon: "📅", value: 1, label: "Years of Study" },
  ],
  skills: [
    { name: "Business Management", icon: "💼" },
    { name: "Finance", icon: "📈" },
    { name: "Data Analytics", icon: "📊" },
    { name: "Microsoft Excel", icon: "🗂️" },
    { name: "Leadership", icon: "🏅" },
    { name: "Communication", icon: "💬" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Cost Accounting", icon: "🔢" },
  ],
  certifications: [
    { title: "Tata GenAI Powered Data Analytics Job Simulation", issuer: "Forage", year: "2025" },
    { title: "National Financial Literacy Quiz 2026", issuer: "NISM & SEBI", year: "2026" },
    { title: "Career Guidance Session", issuer: "Grad Guru", year: "2025" },
  ],
  courses: [
    { name: "Cost Accounting", institution: "Dreims University" },
    { name: "Management Theory & Practices", institution: "Dreims University" },
    { name: "Business Communication", institution: "Dreims University" },
    { name: "Computer for Managers", institution: "Dreims University " },
  ],
};

function useInView(threshold = 0.15) {
const ref = useRef(null); 
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useCounter(target, active, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ icon, value, label, active }) {
  const count = useCounter(value, active);
  return (
    <div style={{ flex:"1 1 100px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(139,92,246,0.25)", borderRadius:"12px", padding:"1rem", textAlign:"center" }}>
      <div style={{ fontSize:"1.4rem", marginBottom:"0.3rem" }}>{icon}</div>
      <div style={{ fontSize:"1.8rem", fontWeight:800, color:"#A78BFA" }}>{count}</div>
      <div style={{ fontSize:"0.68rem", color:"#9CA3AF", textTransform:"uppercase", marginTop:"0.2rem" }}>{label}</div>
    </div>
  );
}

const TABS = ["Skills", "Certifications", "Courses"];
};
export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeTab, setActiveTab] = useState("Skills");
  const [scrolled, setScrolled] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [statsRef, statsVisible] = useInView(0.2);
  const [aboutRef, aboutVisible] = useInView(0.15);
  const [portfolioRef, portfolioVisible] = useInView(0.1);
  const [contactRef, contactVisible] = useInView(0.2);

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 120);
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home","about","portfolio","contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveNav(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background:"#0D0D1A", color:"#E5E7EB", minHeight:"100vh", fontFamily:"'Inter','Segoe UI',sans-serif", overflowX:"hidden" }}>
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        {[
          { w:380, h:380, top:"-80px", left:"-100px", color:"rgba(109,40,217,0.35)" },
          { w:300, h:300, top:"30%", right:"-80px", color:"rgba(91,33,182,0.25)" },
          { w:250, h:250, bottom:"10%", left:"20%", color:"rgba(124,58,237,0.2)" },
        ].map((o,i) => (
          <div key={i} style={{ position:"absolute", width:o.w, height:o.h, top:o.top, left:o.left, right:o.right, bottom:o.bottom, borderRadius:"50%", background:o.color, filter:"blur(80px)" }} />
        ))}
        <style>{`
          @keyframes fadeUp { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
          @keyframes gradShift { 0%,100% { background-position:0% 50% } 50% { background-position:100% 50% } }
        `}</style>
      </div>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"0 2rem", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between", background:scrolled?"rgba(13,13,26,0.85)":"transparent", backdropFilter:scrolled?"blur(16px)":"none", borderBottom:scrolled?"1px solid rgba(139,92,246,0.2)":"none", transition:"all 0.4s" }}>
        <span style={{ fontWeight:800, fontSize:"1.1rem", background:"linear-gradient(135deg,#A78BFA,#7C3AED)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>APB</span>
        <div style={{ display:"flex", gap:"1.5rem" }}>
          {["home","about","portfolio","contact"].map(s => (
            <a key={s} href={`#${s}`} style={{ color:activeNav===s?"#A78BFA":"#9CA3AF", textDecoration:"none", fontSize:"0.82rem", fontWeight:activeNav===s?600:400, borderBottom:activeNav===s?"1px solid #A78BFA":"1px solid transparent", transition:"all 0.2s" }}>
              {s.charAt(0).toUpperCase()+s.slice(1)}
            </a>
          ))}
        </div>
      </nav><section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"5rem 2rem 3rem", position:"relative", zIndex:1 }}>
        <div style={{ textAlign:"center", maxWidth:"700px" }}>
          <div style={{ display:"flex", justifyContent:"center", gap:"1rem", marginBottom:"1.5rem", opacity:heroReady?1:0, transition:"opacity 0.6s ease 0.1s" }}>
            {["💼","🎓","📊"].map((ic,i) => (
              <div key={i} style={{ width:"42px", height:"42px", borderRadius:"10px", background:"rgba(124,58,237,0.25)", border:"1px solid rgba(139,92,246,0.4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem" }}>{ic}</div>
            ))}
          </div>
          <p style={{ color:"#A78BFA", fontSize:"0.85rem", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.8rem", opacity:heroReady?1:0, transition:"opacity 0.6s ease 0.2s" }}>Welcome to my</p>
          <h1 style={{ fontSize:"clamp(2.6rem,8vw,5.5rem)", fontWeight:900, lineHeight:1.05, marginBottom:"0.2rem", opacity:heroReady?1:0, animation:heroReady?"fadeUp 0.8s ease 0.3s both":"none" }}>
            Portfolio{" "}
            <span style={{ background:"linear-gradient(135deg,#A78BFA,#7C3AED,#C4B5FD)", backgroundSize:"200% 200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradShift 4s ease infinite" }}>Website</span>
          </h1>
          <h2 style={{ fontSize:"clamp(1rem,3vw,1.4rem)", fontWeight:600, color:"#C4B5FD", marginBottom:"1rem", opacity:heroReady?1:0, animation:heroReady?"fadeUp 0.8s ease 0.4s both":"none" }}>
            {data.short} · {data.tagline}
          </h2>
          <p style={{ color:"#9CA3AF", fontSize:"0.9rem", marginBottom:"2rem", opacity:heroReady?1:0, animation:heroReady?"fadeUp 0.8s ease 0.5s both":"none" }}>
            {data.location} · Dreims University · BBA 2025-2028
          </p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", opacity:heroReady?1:0, animation:heroReady?"fadeUp 0.8s ease 0.6s both":"none" }}>
            <a href="#portfolio" style={{ padding:"0.75rem 2rem", borderRadius:"8px", background:"linear-gradient(135deg,#7C3AED,#5B21B6)", color:"#fff", textDecoration:"none", fontWeight:600, fontSize:"0.88rem", boxShadow:"0 0 24px rgba(124,58,237,0.4)", transition:"all 0.2s" }}>View Portfolio</a>
            <a href="#contact" style={{ padding:"0.75rem 2rem", borderRadius:"8px", background:"transparent", color:"#A78BFA", border:"1px solid rgba(167,139,250,0.5)", textDecoration:"none", fontWeight:600, fontSize:"0.88rem" }}>Contact Me</a>
          </div>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", marginTop:"1.5rem", opacity:heroReady?1:0, animation:heroReady?"fadeUp 0.8s ease 0.75s both":"none" }}>
            {[
              { icon:"in", label:"LinkedIn", href:data.linkedin, bg:"#0A66C2" },
              { icon:"📸", label:"Instagram", href:data.instagram, bg:"linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)" },
              { icon:"✉", label:"Email", href:`mailto:${data.email}`, bg:"rgba(124,58,237,0.5)" },
            ].map(({icon,label,href,bg})=>(
              <a key={label} href={href} target="_blank" rel="noreferrer" title={label} style={{ width:"42px", height:"42px", borderRadius:"10px", background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", color:"#fff", textDecoration:"none", fontWeight:700, boxShadow:"0 4px 16px rgba(0,0,0,0.3)", transition:"transform 0.2s" }}>{icon}</a>
            ))}
          </div>
          <div style={{ marginTop:"3rem", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", opacity:0.4 }}>
            <span style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#9CA3AF" }}>scroll</span>
            <div style={{ width:"1px", height:"32px", background:"linear-gradient(180deg,#7C3AED,transparent)" }} />
          </div>
        </div>
      </section><section id="about" ref={aboutRef} style={{ maxWidth:"900px", margin:"0 auto", padding:"5rem 2rem", position:"relative", zIndex:1 }}>
        <div style={{ opacity:aboutVisible?1:0, transform:aboutVisible?"translateY(0)":"translateY(30px)", transition:"all 0.8s ease" }}>
          <p style={{ color:"#A78BFA", fontSize:"0.75rem", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"0.5rem", textAlign:"center" }}>✦ About Me ✦</p>
          <p style={{ color:"#C4B5FD", fontSize:"0.8rem", textAlign:"center", marginBottom:"2.5rem" }}>Transforming business ideas into analytical insights</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem", alignItems:"start" }}>
            <div>
              <div style={{ position:"relative", width:"110px", marginBottom:"1.5rem" }}>
                <img src={PHOTO} alt="Amrit" style={{ width:"110px", height:"110px", borderRadius:"50%", objectFit:"cover", border:"3px solid rgba(167,139,250,0.5)", boxShadow:"0 0 30px rgba(124,58,237,0.45), 0 0 0 6px rgba(124,58,237,0.1)", display:"block" }} />
                <div style={{ position:"absolute", bottom:"6px", right:"6px", width:"14px", height:"14px", borderRadius:"50%", background:"#22C55E", border:"2px solid #0D0D1A" }} />
              </div>
              <p style={{ color:"#A78BFA", fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.3rem" }}>Hello, I'm</p>
              <h2 style={{ fontSize:"1.8rem", fontWeight:800, color:"#E5E7EB", marginBottom:"1rem", lineHeight:1.2 }}>{data.name}</h2>
              <p style={{ color:"#9CA3AF", lineHeight:1.8, fontSize:"0.9rem", marginBottom:"1.5rem" }}>{data.bio}</p>
              <div style={{ display:"flex", gap:"0.8rem", flexWrap:"wrap" }}>
                <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ padding:"0.6rem 1.2rem", borderRadius:"6px", background:"linear-gradient(135deg,#7C3AED,#5B21B6)", color:"#fff", textDecoration:"none", fontSize:"0.8rem", fontWeight:600 }}>LinkedIn ↗</a>
                <a href={data.instagram} target="_blank" rel="noreferrer" style={{ padding:"0.6rem 1.2rem", borderRadius:"6px", background:"linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)", color:"#fff", textDecoration:"none", fontSize:"0.8rem", fontWeight:600 }}>📸 Instagram</a>
              </div>
            </div>
            <div ref={statsRef}>
              <div style={{ display:"flex", gap:"0.8rem", flexWrap:"wrap", marginBottom:"1.2rem" }}>
                {data.stats.map((s,i)=>(<StatCard key={i} {...s} active={statsVisible} />))}
              </div>
              <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(139,92,246,0.2)", borderRadius:"12px", padding:"1.2rem" }}>
                {[["📍","Location",data.location],["🎓","University","Dreims University"],["📅","Graduation","2028"],["📧","Email",data.email]].map(([ic,label,val])=>(
                  <div key={label} style={{ display:"flex", alignItems:"center", gap:"0.8rem", padding:"0.55rem 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize:"1rem", width:"20px", textAlign:"center" }}>{ic}</span>
                    <span style={{ color:"#6B7280", fontSize:"0.78rem", width:"80px", flexShrink:0 }}>{label}</span>
                    <span style={{ color:"#D1D5DB", fontSize:"0.82rem" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section><section id="portfolio" ref={portfolioRef} style={{ maxWidth:"900px", margin:"0 auto", padding:"5rem 2rem", position:"relative", zIndex:1 }}>
        <div style={{ opacity:portfolioVisible?1:0, transform:portfolioVisible?"translateY(0)":"translateY(30px)", transition:"all 0.8s ease" }}>
          <p style={{ color:"#A78BFA", textAlign:"center", fontSize:"0.75rem", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"0.4rem" }}>✦ Portfolio Showcase ✦</p>
          <p style={{ color:"#6B7280", textAlign:"center", fontSize:"0.82rem", marginBottom:"2.5rem" }}>Explore my journey through skills, certifications, and academic coursework</p>
          <div style={{ display:"flex", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(139,92,246,0.2)", borderRadius:"10px", padding:"4px", marginBottom:"2rem" }}>
            {TABS.map(tab=>(
              <button key={tab} onClick={()=>setActiveTab(tab)} style={{ flex:1, padding:"0.65rem 1rem", borderRadius:"8px", border:"none", cursor:"pointer", background:activeTab===tab?"linear-gradient(135deg,#7C3AED,#5B21B6)":"transparent", color:activeTab===tab?"#fff":"#9CA3AF", fontWeight:activeTab===tab?700:400, fontSize:"0.82rem", transition:"all 0.25s" }}>{tab}</button>
            ))}
          </div>
          {activeTab==="Skills" && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:"1rem" }}>
              {data.skills.map((s,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(139,92,246,0.2)", borderRadius:"10px", padding:"1.2rem 1rem", display:"flex", alignItems:"center", gap:"0.8rem", transition:"all 0.25s", cursor:"default" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(124,58,237,0.15)";e.currentTarget.style.transform="translateY(-3px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.transform="translateY(0)";}}
                >
                  <span style={{ fontSize:"1.4rem" }}>{s.icon}</span>
                  <span style={{ fontSize:"0.85rem", fontWeight:600, color:"#D1D5DB" }}>{s.name}</span>
                </div>
              ))}
            </div>
          )}
          {activeTab==="Certifications" && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:"1.2rem" }}>
              {data.certifications.map((c,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(139,92,246,0.25)", borderRadius:"12px", padding:"1.5rem", position:"relative", overflow:"hidden", transition:"all 0.25s" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 32px rgba(124,58,237,0.25)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}
                >
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", background:"linear-gradient(90deg,#7C3AED,#A78BFA)" }}/>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1rem" }}>
                    <div style={{ width:"40px", height:"40px", borderRadius:"8px", background:"rgba(124,58,237,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem" }}>🏅</div>
                    <span style={{ background:"rgba(124,58,237,0.2)", color:"#A78BFA", fontSize:"0.7rem", padding:"2px 8px", borderRadius:"20px" }}>{c.year}</span>
                  </div>
                  <h3 style={{ fontSize:"0.88rem", fontWeight:700, color:"#E5E7EB", lineHeight:1.4, marginBottom:"0.5rem" }}>{c.title}</h3>
                  <p style={{ color:"#A78BFA", fontSize:"0.75rem", fontWeight:600 }}>{c.issuer}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab==="Courses" && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"1rem" }}>
              {data.courses.map((c,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(139,92,246,0.2)", borderRadius:"10px", padding:"1.3rem", transition:"all 0.25s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(124,58,237,0.12)";e.currentTarget.style.transform="translateY(-3px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.transform="translateY(0)";}}
                >
                  <div style={{ fontSize:"1.4rem", marginBottom:"0.7rem" }}>📘</div>
                  <h3 style={{ fontSize:"0.88rem", fontWeight:700, color:"#D1D5DB", lineHeight:1.3, marginBottom:"0.4rem" }}>{c.name}</h3>
                  <p style={{ color:"#6B7280", fontSize:"0.75rem" }}>{c.institution}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section><section id="contact" ref={contactRef} style={{ maxWidth:"700px", margin:"0 auto", padding:"5rem 2rem 7rem", position:"relative", zIndex:1, textAlign:"center" }}>
        <div style={{ opacity:contactVisible?1:0, transform:contactVisible?"translateY(0)":"translateY(30px)", transition:"all 0.8s ease" }}>
          <p style={{ color:"#A78BFA", fontSize:"0.75rem", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"0.5rem" }}>✦ Contact Me ✦</p>
          <h2 style={{ fontSize:"clamp(2rem,6vw,3.2rem)", fontWeight:900, background:"linear-gradient(135deg,#A78BFA,#7C3AED,#C4B5FD)", backgroundSize:"200% 200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradShift 4s ease infinite", marginBottom:"0.8rem" }}>Let's Connect</h2>
          <p style={{ color:"#9CA3AF", marginBottom:"2.5rem", fontSize:"0.9rem" }}>Open to discussions on finance, data analytics, and business collaborations.</p>
          <a href={`mailto:${data.email}`} style={{ display:"inline-block", padding:"0.85rem 2.5rem", background:"linear-gradient(135deg,#7C3AED,#5B21B6)", color:"#fff", textDecoration:"none", fontWeight:700, borderRadius:"8px", fontSize:"0.9rem", boxShadow:"0 0 28px rgba(124,58,237,0.45)", transition:"all 0.25s" }}>✉ {data.email}</a>
          <div style={{ marginTop:"2rem", display:"flex", justifyContent:"center", gap:"1.5rem" }}>
            {[{label:"LinkedIn",href:data.linkedin},{label:"Instagram",href:data.instagram}].map(({label,href})=>(
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ color:"#6B7280", textDecoration:"none", fontSize:"0.82rem", letterSpacing:"0.06em", textTransform:"uppercase", transition:"color 0.2s" }}
                onMouseEnter={e=>e.target.style.color="#A78BFA"}
                onMouseLeave={e=>e.target.style.color="#6B7280"}
              >{label} ↗</a>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ textAlign:"center", padding:"1.5rem", borderTop:"1px solid rgba(139,92,246,0.15)", color:"#374151", fontSize:"0.72rem", letterSpacing:"0.08em", position:"relative", zIndex:1 }}>
        © 2026 Amrit Pritam Biswal · Built with 💜
      </footer>
    </div>
  );
                                                               }

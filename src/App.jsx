import { useState } from "react";

const PHOTO = "https://i.ibb.co/NnG2nHQV/file-0000000077d47206a64e9c3ff1e12fd6.png";

export default function App() {
  const [tab, setTab] = useState("Skills");
  const skills = ["Business Management","Finance","Data Analytics","Microsoft Excel","Leadership","Communication","Problem Solving"];
  const certs = [
    { title:"Tata GenAI Powered Data Analytics Job Simulation", issuer:"Forage", year:"2025" },
    { title:"National Financial Literacy Quiz 2026", issuer:"NISM & SEBI", year:"2026" },
    { title:"Career Guidance Session", issuer:"Grad Guru", year:"2025" },
  ];
  return (
    <div style={{ background:"#0D0D1A", color:"#E5E7EB", minHeight:"100vh", fontFamily:"Inter,sans-serif" }}>
      <nav style={{ padding:"1rem 2rem", display:"flex", justifyContent:"space-between", borderBottom:"1px solid #1a1a2e" }}>
        <span style={{ color:"#A78BFA", fontWeight:800, fontSize:"1.2rem" }}>APB</span>
        <div style={{ display:"flex", gap:"1.5rem" }}>
          {["About","Portfolio","Contact"].map(s=>(
            <a key={s} href={`#${s.toLowerCase()}`} style={{ color:"#9CA3AF", textDecoration:"none", fontSize:"0.85rem" }}>{s}</a>
          ))}
        </div>
      </nav>
      <section style={{ minHeight:"90vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"2rem" }}>
        <img src={PHOTO} alt="Amrit" style={{ width:"120px", height:"120px", borderRadius:"50%", objectFit:"cover", border:"3px solid #7C3AED", marginBottom:"1.5rem" }} />
        <h1 style={{ fontSize:"clamp(2rem,8vw,5rem)", fontWeight:900, background:"linear-gradient(135deg,#A78BFA,#7C3AED)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Amrit</h1>
        <p style={{ color:"#C4B5FD", fontSize:"1.1rem", margin:"0.5rem 0" }}>Finance Enthusiast & Aspiring Data Analyst</p>
        <p style={{ color:"#6B7280", marginBottom:"2rem" }}>BBA Student · Dreims University · 2025-2028</p>
        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
          <a href="#portfolio" style={{ padding:"0.75rem 2rem", background:"linear-gradient(135deg,#7C3AED,#5B21B6)", color:"#fff", borderRadius:"8px", textDecoration:"none", fontWeight:600 }}>View Portfolio</a>
          <a href="mailto:biswaltutu1977@gmail.com" style={{ padding:"0.75rem 2rem", border:"1px solid #7C3AED", color:"#A78BFA", borderRadius:"8px", textDecoration:"none", fontWeight:600 }}>Contact Me</a>
        </div>
        <div style={{ display:"flex", gap:"1rem", marginTop:"1.5rem" }}>
          <a href="https://www.linkedin.com/in/amrit-pritam-biswal-455abb380" target="_blank" rel="noreferrer" style={{ padding:"0.5rem 1.2rem", background:"#0A66C2", color:"#fff", borderRadius:"6px", textDecoration:"none", fontSize:"0.85rem" }}>LinkedIn</a>
          <a href="https://instagram.com/amritpritam82" target="_blank" rel="noreferrer" style={{ padding:"0.5rem 1.2rem", background:"linear-gradient(135deg,#833AB4,#FD1D1D)", color:"#fff", borderRadius:"6px", textDecoration:"none", fontSize:"0.85rem" }}>Instagram</a>
        </div>
      </section>
      <section id="portfolio" style={{ maxWidth:"900px", margin:"0 auto", padding:"4rem 2rem" }}>
        <h2 style={{ textAlign:"center", color:"#A78BFA", marginBottom:"2rem", fontSize:"2rem", fontWeight:800 }}>Portfolio</h2>
        <div style={{ display:"flex", background:"#111827", borderRadius:"10px", padding:"4px", marginBottom:"2rem" }}>
          {["Skills","Certifications"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{ flex:1, padding:"0.6rem", borderRadius:"8px", border:"none", cursor:"pointer", background:tab===t?"linear-gradient(135deg,#7C3AED,#5B21B6)":"transparent", color:tab===t?"#fff":"#9CA3AF", fontWeight:tab===t?700:400 }}>{t}</button>
          ))}
        </div>
        {tab==="Skills" && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:"1rem" }}>
            {skills.map((s,i)=>(
              <div key={i} style={{ background:"#111827", border:"1px solid #374151", borderRadius:"10px", padding:"1rem", textAlign:"center", color:"#D1D5DB", fontSize:"0.88rem", fontWeight:600 }}>{s}</div>
            ))}
          </div>
        )}
        {tab==="Certifications" && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:"1rem" }}>
            {certs.map((c,i)=>(
              <div key={i} style={{ background:"#111827", border:"1px solid #374151", borderRadius:"10px", padding:"1.5rem" }}>
                <p style={{ color:"#A78BFA", fontSize:"0.75rem", marginBottom:"0.5rem" }}>{c.year}</p>
                <h3 style={{ color:"#E5E7EB", fontSize:"0.9rem", fontWeight:700, marginBottom:"0.4rem" }}>{c.title}</h3>
                <p style={{ color:"#6B7280", fontSize:"0.8rem" }}>{c.issuer}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <section id="contact" style={{ textAlign:"center", padding:"4rem 2rem" }}>
        <h2 style={{ color:"#A78BFA", fontSize:"2rem", fontWeight:800, marginBottom:"1rem" }}>Let's Connect</h2>
        <a href="mailto:biswaltutu1977@gmail.com" style={{ display:"inline-block", padding:"0.85rem 2.5rem", background:"linear-gradient(135deg,#7C3AED,#5B21B6)", color:"#fff", borderRadius:"8px", textDecoration:"none", fontWeight:700 }}>biswaltutu1977@gmail.com</a>
        <div style={{ marginTop:"1.5rem", display:"flex", justifyContent:"center", gap:"2rem" }}>
          <a href="https://instagram.com/amritpritam82" target="_blank" rel="noreferrer" style={{ color:"#A78BFA", textDecoration:"none" }}>Instagram ↗</a>
          <a href="https://www.linkedin.com/in/amrit-pritam-biswal-455abb380" target="_blank" rel="noreferrer" style={{ color:"#A78BFA", textDecoration:"none" }}>LinkedIn ↗</a>
        </div>
      </section>
      <footer style={{ textAlign:"center", padding:"1.5rem", borderTop:"1px solid #1a1a2e", color:"#374151", fontSize:"0.75rem" }}>© 2026 Amrit Pritam Biswal · Built with 💜</footer>
    </div>
  );
                }                  

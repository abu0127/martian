import { useState, useEffect, useRef } from "react";
import dataMenu from "./data";
import drinks from "./assets/coctel-banan.png";
import sweet from "./assets/sweets.png";
import pizza from "./assets/category_pizza.png";
// import burger from "./assets/burger.png";

const categoryImages = {
  Drinks: drinks,
  Sweets: sweet,
  Pizzas: pizza,
  // Burgers: burger
};


// ---------------- Carusell ----------------
function Carusell({ title, isActive, index }) {
  const image = categoryImages[title]; 
  return (
    <div
      id={index}
      style={{
        height: isActive ? "170px" : "150px",
        flex: isActive ? "0 0 80%" : "0 0 75%",
        borderRadius: "20px",
        scrollSnapAlign: "center",
        transition: "all .4s",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        fontWeight: isActive ? "bold" : "normal",
        boxShadow:'3px 5px 15px 2px rgba(38, 38, 38, 0.59)'
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: isActive ? "brightness(100%)" : "brightness(60%)",
          transition: "filter 0.4s",
        }}
      />
      <div
        style={{
          position: "relative",
          color: "white",
          padding: "15px 0 0 10px",
          fontWeight:'bold', 
          borderRadius: "12px",
          marginBottom: "10px",
          fontSize: "27px",
          textShadow:'2px 2px 3px #0000008A'
        }}
      >
        {title}
      </div>
    </div>
  );
}

// ---------------- Card ----------------
function Card({ item, onClick }) {
  return (
    <div
      className="card-anim"
      onClick={() => onClick(item)}
      style={{
        width: "45vw",
        height: 250,
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        boxShadow:'0px 5px 10px 1px rgba(38, 38, 38, 0.30)'
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          left:0,
          top: 0,
          textShadow:'1px 2px 2px #0000008A', 
          color: "white",
          padding: "10px",
          textAlign: "center",
          fontSize: "24px"
        }}
      >
        {item.name}
      </div>
    </div>
  );
}

// ---------------- Modal ----------------
function Modal({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "420px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          animation: "scaleIn 0.25s ease",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "transparent",
            border: "none",
            fontSize: "1.4rem",
            cursor: "pointer",
            color: "#333",
            transition: "color 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#ff4757")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          <i className="fas fa-times"></i>
        </button>

        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            display: "block",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            marginBottom: "18px",
          }}
        />

        <h2
          style={{
            textAlign: "center",
            marginBottom: "18px",
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "#222",
          }}
        >
          {item.name}
        </h2>

        <table
          style={{
            width: "90%",
            borderCollapse: "collapse",
            marginBottom: "10px",
            fontSize: "1rem",
            margin:'10px auto'
          }}
        >
          <thead>
            <tr>
              <th style={{padding:"10px 0", textAlign:"left", color:"#666"}}>Size</th>
              <th style={{padding:"10px 0", textAlign:"right", color:"#666"}}>Price</th>
            </tr>
          </thead>
          <tbody>
            {item.prices.map((p, i) => (
              <tr key={i}>
                <td style={{padding:"10px 0", borderBottom:"1px solid #DDDDDD"}}>
                  {p.size}
                </td>
                <td style={{padding:"10px 0", textAlign:"right", borderBottom:"1px solid #DDDDDD", fontWeight:600, color:"#111"}}>
                  {p.price.toLocaleString()} UZS
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------------- Skeleton ----------------
function SkeletonCard() {
  return (
    <div style={{ display: "flex", marginBottom: 20 }}>
      <div className="skeleton thumbnail"></div>
    </div>
  );
}
function SkeletonCarusell() {
  return (
    <div
      className="skeleton"
      style={{
        height: "150px",
        flex: "0 0 75%",
        borderRadius: "20px",
      }}
    ></div>
  );
}

// ---------------- SearchBar ----------------
function SearchBar({ search, setSearch }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div ref={wrapperRef} style={{ display:"flex", alignItems:"center", position:"relative" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          background:"transparent",
          border:"none",
          color:"white",
          fontSize:"20px",
          cursor:"pointer",
          zIndex:2,
        }}
      >
        <i style={{color:'#0000009D'}} className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          position:"absolute",
          right:0,
          top:"50%",
          transform:"translateY(-50%)",
          padding:"5px 10px",
          borderRadius:"10px",
          border:"none",
          outline:"none",
          fontSize:"16px",
          width: open ? "180px" : "0px",
          opacity: open ? 1 : 0,
          transition:"all 0.3s ease",
          background:"#42424224",
          color:"black",
        }}
      />
    </div>
  );
}

// ---------------- App ----------------
function App() {
  const [activeCatigory, setActiveCatigory] = useState("Drinks");
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const caruselRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");

  const catigory = ["Drinks", "Sweets", "Pizzas", "Burgers"];

  useEffect(() => {
     try {
      setLoading(true);
     
      setTimeout(() => {
        setData(dataMenu);
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setErr(err.message);
      setLoading(false);
    }

    // header scroll
    let lastScroll = 0;
    const hideThreshold = 180;
    const showThreshold = 10;

    const handleScroll = () => {
      const currentScroll = containerRef.current.scrollTop;
      if (currentScroll > lastScroll && currentScroll > hideThreshold) {
        headerRef.current?.classList.add("hide");
      } else if (lastScroll - currentScroll > showThreshold) {
        headerRef.current?.classList.remove("hide");
      }
      lastScroll = currentScroll;
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // active category observer
  useEffect(() => {
    if (!caruselRef.current) return;
    const items = caruselRef.current.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.id;
            setActiveCatigory(catigory[index]);
          }
        });
      },
      { root: caruselRef.current, threshold: 0.6 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [catigory]);

  return (
    <>
      <div
        ref={containerRef}
        className="container"
        style={{
          width:"100%",
          height:"100dvh",
          paddingTop:"13%",
          maxWidth:550,
          margin:"0 auto",
          overflowY:"auto",
          alignItems:"center",
        }}
      >
        {/* navbar */}
        <header
          ref={headerRef}
          id="myHeader"
          style={{
            position:"fixed",
            top:0,
            left:0,
            right:0,
            background:"#fefefe",
            padding:"10px 15px",
            fontSize:"20px",
            transition:"transform 0.3s ease-in-out",
            zIndex:1000,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            boxShadow:'0 0 5px 1px #0000003D'
          }}
        >
          <span>logo</span>
          <SearchBar search={search} setSearch={setSearch} />
        </header>

        {/* carusel */}
        <div
          ref={caruselRef}
          className="carusel"
          style={{
            position:"relative",
            display:"flex",
            alignItems:"center",
            height:"220px",
            width:"100%",
            overflowX:"auto",
            scrollSnapType:"x mandatory",
            scrollBehavior:"smooth",
            gap:"25px",
            padding:"0 3%",
            margin:"0 auto",
          }}
        >
          {loading
            ? Array(3).fill(0).map((_, i) => <SkeletonCarusell key={i} />)
            : catigory.map((c, i) => (
                <Carusell key={i} index={i} title={c} isActive={activeCatigory == c} />
              ))}
        </div>

        {/* grid */}
        <div
          key={activeCatigory + search}
          className="cards-grid"
          style={{
            padding:"0 3%",
            width:"100%",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:15,
            overflowX:"hidden",
            marginTop:"20px"
          }}
        >
          {loading ? (
            Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : err ? (
            <p style={{ color:"red" }}>{err}</p>
          ) : (
            (() => {
              const filtered = data.filter(
                (d) =>
                  d.category === activeCatigory &&
                  d.name.toLowerCase().includes(search.toLowerCase())
              );
              return filtered.length > 0 ? (
                filtered.map((d, i) => (
                  <Card key={i} item={d} onClick={setSelectedItem} />
                ))
              ) : (
                <p
                  style={{
                    gridColumn:"1 / -1",
                    textAlign:"center",
                    color:"white",
                    fontSize:"18px",
                    marginTop:"20px",
                    opacity:0.8,
                  }}
                >
                  ❌ Topilmadi
                </p>
              );
            })()
          )}
        </div>
      </div>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}

export default App;

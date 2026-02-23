import data from "./content/data.json";

function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <header style={{ padding: "80px 20px", textAlign: "center", background: "#f4f4f4" }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>{data.companyName}</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>{data.tagline}</p>
      </header>

      {/* About Section */}
      <section style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px" }}>
        <h2>Tentang Kami</h2>
        <p>{data.aboutText}</p>
      </section>

      {/* Services Section */}
      <section style={{ background: "#333", color: "#fff", padding: "50px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>Layanan Kami</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {data.services.map((item, index) => (
              <div key={index} style={{ border: "1px solid #555", padding: "15px" }}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer style={{ textAlign: "center", padding: "50px" }}>
        <a href={`https://wa.me/${data.whatsapp}`} style={{ background: "#25D366", color: "#fff", padding: "15px 30px", borderRadius: "5px", textDecoration: "none" }}>
          Hubungi Kami via WhatsApp
        </a>
      </footer>
    </div>
  );
}

export default App;

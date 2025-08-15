import { useState } from "react";
import "../App.css";

export default function Contact() {
    const [form, setForm] = useState({ name:"", suggestion:"" });

    const submit = (e) => {
    e.preventDefault();
    alert(`Gracias ${form.name || "Anónimo"}: ${form.suggestion}`);
    setForm({ name:"", suggestion:"" });
};

    return (
        <div className="container" style={{ maxWidth: 640 }}>
        <h2 style={{ marginBottom: 12 }}>Sugerir película</h2>
        <form onSubmit={submit}>
            <input className="input" placeholder="Tu nombre"
            value={form.name} onChange={e => setForm({ ...form, name:e.target.value })} />
            <textarea className="input" rows="4" placeholder="Película sugerida"
            value={form.suggestion} onChange={e => setForm({ ...form, suggestion:e.target.value })} />
            <div style={{ display:"flex", gap:10 }}>
            <button className="btn" type="submit">Enviar</button>
            <button className="btn btn-outline" type="button" onClick={()=>setForm({ name:"", suggestion:"" })}>Limpiar</button>
            </div>
        </form>
        </div>
    );
}

  "use client";
import { useState } from "react";
export default function Page(){
const [msgs,setMsgs]=useState([{id:1,nom:"Direction",texte:"Bienvenue sur INSTITUT DES NATIONS !"}]);
const [nom,setNom]=useState("");const [texte,setTexte]=useState("");
function envoyer(){if(!nom||!texte){alert("Nom et message");return;}setMsgs([{id:Date.now(),nom,texte},...msgs]);setTexte("");}
return(<div style={{background:"#eef2f7",minHeight:"100vh",padding:"20px",fontFamily:"Arial"}}>
<div style={{background:"#0a2a5e",color:"white",padding:"20px",textAlign:"center",borderRadius:"12px",maxWidth:"600px",margin:"0 auto 20px"}}><h1>INSTITUT DES NATIONS</h1><p>Forum officiel - Poster les messages</p></div>
<div style={{background:"white",padding:"15px",borderRadius:"12px",maxWidth:"600px",margin:"0 auto 20px"}}>
<input value={nom} onChange={e=>setNom(e.target.value)} placeholder="Ton nom" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"8px",border:"1px solid #ccc"}}/>
<textarea value={texte} onChange={e=>setTexte(e.target.value)} placeholder="Ton message" style={{width:"100%",padding:"10px",height:"70px",borderRadius:"8px",border:"1px solid #ccc"}}></textarea>
<button onClick={envoyer} style={{width:"100%",padding:"12px",background:"#0a2a5e",color:"white",border:"none",borderRadius:"8px",marginTop:"10px",fontWeight:"bold"}}>PUBLIER</button></div>
<div style={{maxWidth:"600px",margin:"0 auto"}}>{msgs.map(m=>(<div key={m.id} style={{background:"white",padding:"12px",borderRadius:"10px",marginBottom:"10px"}}><b style={{color:"#0a2a5e"}}>{m.nom}</b><p style={{margin:"5px 0 0"}}>{m.texte}</p></div>))}</div></div>);}

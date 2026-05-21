console.log("BNI PRO iniciado");

const SUPABASE_URL = "https://wqiqauksktmvzppctoqo.supabase.co";

const SUPABASE_KEY = "sb_publishable_ktAaADb0EkTBBvPh6JMWyw_eGVnlEiO";

fetch(`${SUPABASE_URL}/rest/v1/propiedades?select=*`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
.then(response => response.json())
.then(data => {
  console.log("PROPIEDADES:");
  console.log(data);
})
.catch(error => {
  console.error(error);
});

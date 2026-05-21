console.log("BNI PRO iniciado");

const SUPABASE_URL = "https://wqiqauksktmvzppctoqo.supabase.co";
const SUPABASE_KEY = "sb_publishable_ktAaADb0EkTBBvPh6JMWyw_eGVnlEiO";

async function obtenerPropiedades() {

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/propiedades`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    }
  );

  const data = await response.json();

  console.log(data);
}

obtenerPropiedades();

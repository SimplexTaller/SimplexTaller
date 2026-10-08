// ==========================================
// SimplexTaller - Conexión con Supabase
// ==========================================

// REEMPLAZAR con los datos de tu proyecto Supabase
const SUPABASE_URL = "https://msajattdzapxqladdrnf.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_viIkRT1RLBxBUsBW2of_xw_DvYMhpJ0";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

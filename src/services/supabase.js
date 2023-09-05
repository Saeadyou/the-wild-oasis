import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://chmlitqhkkbrtfxdajyo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNobWxpdHFoa2ticnRmeGRhanlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NDUxODIsImV4cCI6MjAwOTQyMTE4Mn0.auwUU0nKbMCyEFciZ_6xrsDHiqsJaTt_QLE4jI_JTF8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

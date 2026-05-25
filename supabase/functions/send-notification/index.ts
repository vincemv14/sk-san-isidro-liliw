const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { resident_name, clearance_type, quantity, total_price, contact_number } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": Deno.env.get("BREVO_API_KEY") ?? "",
      },
      body: JSON.stringify({
        sender: {
          name: Deno.env.get("BREVO_SENDER_NAME") ?? "SK San Isidro",
          email: Deno.env.get("BREVO_SENDER_EMAIL") ?? "",
        },
        to: [{ email: Deno.env.get("NOTIFY_EMAIL") ?? "" }],
        subject: `New Clearance Request from ${resident_name}`,
        htmlContent: `
          <h2 style="color:#006400;">New Clearance Request - SK San Isidro</h2>
          <table style="border-collapse:collapse;width:100%;">
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Resident Name</strong></td><td style="padding:8px;border:1px solid #ddd;">${resident_name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Clearance Type</strong></td><td style="padding:8px;border:1px solid #ddd;">${clearance_type}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Quantity</strong></td><td style="padding:8px;border:1px solid #ddd;">${quantity}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Total Price</strong></td><td style="padding:8px;border:1px solid #ddd;">₱${total_price}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Contact Number</strong></td><td style="padding:8px;border:1px solid #ddd;">${contact_number}</td></tr>
          </table>
        `,
      }),
    });

    const result = await response.json();

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
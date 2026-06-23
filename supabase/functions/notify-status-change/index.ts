const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ── Your 5 status options ──────────────────────────────────────────────────
const STATUS_CONFIG: Record<string, {
  label:   string;
  emoji:   string;
  color:   string;
  bg:      string;
  message: string;
}> = {
  pending: {
    label:   "Pending Review",
    emoji:   "⏳",
    color:   "#92400e",
    bg:      "#fef3c7",
    message: "Your request has been received and is currently queued for review by our barangay staff. We will process it as soon as possible.",
  },
  processing: {
    label:   "Processing",
    emoji:   "🔄",
    color:   "#1e40af",
    bg:      "#dbeafe",
    message: "Great news! Your request is now being actively processed by our barangay staff. Please wait for further updates.",
  },
  "ready for pick up": {
    label:   "Ready for Pick Up",
    emoji:   "📄",
    color:   "#065f46",
    bg:      "#d1fae5",
    message: "Your document is <strong>ready for pick up!</strong> Please visit the Barangay Hall during office hours (Mon–Fri, 8AM–5PM). Don't forget to bring a valid ID.",
  },
  completed: {
    label:   "Completed",
    emoji:   "🎉",
    color:   "#374151",
    bg:      "#f3f4f6",
    message: "Your request has been completed. Thank you for using the SK San Isidro Barangay Portal. We hope we were able to serve you well!",
  },
  rejected: {
    label:   "Rejected",
    emoji:   "❌",
    color:   "#991b1b",
    bg:      "#fee2e2",
    message: "Unfortunately, your request could not be approved at this time. Please visit the Barangay Hall or contact us for more information about the reason and next steps.",
  },
};

// ── Email HTML builder ─────────────────────────────────────────────────────
function buildEmailHtml(record: any): string {
  const status = (record.status ?? "").toLowerCase();
  const cfg = STATUS_CONFIG[status] ?? {
    label:   record.status,
    emoji:   "📋",
    color:   "#374151",
    bg:      "#f3f4f6",
    message: "Your request status has been updated.",
  };

  // Use resident_name — grab first word as first name
  const fullName  = record.resident_name ?? "Resident";
  const firstName = fullName.split(" ")[0];

  // Format reference code — show first 8 chars uppercase
  const refCode = String(record.reference_code ?? record.id ?? "").slice(0, 8).toUpperCase();

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f5f7f2;font-family:'Helvetica Neue',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7f2;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
        style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,44,2,.10);">

        <!-- HEADER -->
        <tr>
          <td style="background:#002c02;padding:32px 40px;text-align:center;">
            <div style="font-size:1.8rem;font-weight:900;color:#ffd000;font-family:Georgia,serif;">SK San Isidro</div>
            <div style="color:rgba(255,255,255,.65);font-size:.78rem;margin-top:4px;letter-spacing:1.5px;text-transform:uppercase;">
              Barangay Portal · Liliw, Laguna
            </div>
          </td>
        </tr>

        <!-- YELLOW BAR -->
        <tr><td style="background:#ffd000;height:4px;"></td></tr>

        <!-- BODY -->
        <tr>
          <td style="padding:40px 40px 0;">

            <p style="margin:0 0 6px;font-size:.82rem;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">
              Request Status Update
            </p>
            <h1 style="margin:0 0 20px;font-size:1.5rem;color:#002c02;font-family:Georgia,serif;font-weight:900;">
              Hello, ${firstName}! ${cfg.emoji}
            </h1>

            <p style="margin:0 0 28px;color:#374151;font-size:.97rem;line-height:1.75;">
              We have an update on your <strong>${record.clearance_type ?? "service"}</strong> request
              (Ref: <strong>${refCode}</strong>).
            </p>

            <!-- STATUS BADGE -->
            <div style="background:${cfg.bg};border-left:4px solid ${cfg.color};border-radius:8px;padding:20px 24px;margin-bottom:28px;">
              <div style="font-size:.72rem;font-weight:700;color:${cfg.color};text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">
                Current Status
              </div>
              <div style="font-size:1.2rem;font-weight:800;color:${cfg.color};">
                ${cfg.emoji} ${cfg.label}
              </div>
            </div>

            <!-- STATUS MESSAGE -->
            <p style="margin:0 0 28px;color:#374151;font-size:.97rem;line-height:1.75;">
              ${cfg.message}
            </p>

            ${record.remarks ? `
            <!-- REMARKS FROM ADMIN -->
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:18px 22px;margin-bottom:28px;">
              <div style="font-size:.75rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:8px;">
                Remarks from Barangay Staff
              </div>
              <p style="margin:0;color:#374151;font-size:.93rem;line-height:1.65;">${record.remarks}</p>
            </div>
            ` : ""}

            <!-- REFERENCE CODE -->
            <div style="background:#002c02;border-radius:12px;padding:20px;text-align:center;margin-bottom:28px;">
              <div style="font-size:.72rem;font-weight:700;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">
                Your Reference Code
              </div>
              <div style="font-family:monospace;font-size:1.8rem;font-weight:900;color:#ffd000;letter-spacing:4px;">
                ${refCode}
              </div>
            </div>

          </td>
        </tr>

        <!-- BARANGAY INFO -->
        <tr>
          <td style="padding:0 40px 40px;">
            <div style="background:#f5f7f2;border-radius:10px;padding:20px 24px;">
              <div style="font-size:.75rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:12px;">
                Barangay Hall Information
              </div>
              <p style="margin:0;color:#374151;font-size:.88rem;line-height:1.9;">
                📍 Brgy. Hall, San Isidro, Liliw, Laguna<br/>
                🕐 Office Hours: Mon – Fri, 8:00 AM – 5:00 PM<br/>
                📧 sangguniangkabataanngsanisidro@gmail.com
              </p>
            </div>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#002c02;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,.4);font-size:.75rem;line-height:1.7;">
              This is an automated notification from the SK San Isidro Barangay Portal.<br/>
              Please do not reply to this email.<br/>
              © 2026 Barangay San Isidro · Liliw, Laguna
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>
  `.trim();
}

// ── Edge Function handler ──────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const { type, record, old_record } = payload;

    // Only fire on UPDATE where status actually changed
    if (type !== "UPDATE") {
      return new Response(JSON.stringify({ skipped: "not an update" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    if (record.status === old_record?.status) {
      return new Response(JSON.stringify({ skipped: "status unchanged" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    if (!record.email) {
      return new Response(JSON.stringify({ skipped: "no email on record" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const statusLabel = STATUS_CONFIG[(record.status ?? "").toLowerCase()]?.label ?? record.status;

    // Send email to requestor via Brevo
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": Deno.env.get("BREVO_API_KEY") ?? "",
      },
      body: JSON.stringify({
        sender: {
          name:  Deno.env.get("BREVO_SENDER_NAME")  ?? "SK San Isidro",
          email: Deno.env.get("BREVO_SENDER_EMAIL") ?? "",
        },
        to: [{ email: record.email, name: record.resident_name ?? "Resident" }],
        subject: `${STATUS_CONFIG[(record.status ?? "").toLowerCase()]?.emoji ?? "📋"} Request Update: ${statusLabel} — SK San Isidro`,
        htmlContent: buildEmailHtml(record),
      }),
    });

    if (!brevoRes.ok) {
      const err = await brevoRes.text();
      console.error("Brevo error:", err);
      return new Response(JSON.stringify({ error: err }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    const result = await brevoRes.json();
    return new Response(
      JSON.stringify({ success: true, to: record.email, status: record.status, result }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );

  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
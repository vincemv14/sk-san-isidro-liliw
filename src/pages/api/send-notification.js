export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { resident_name, clearance_type, quantity, total_price, contact_number } = req.body;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: process.env.BREVO_SENDER_NAME,
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email: process.env.NOTIFY_EMAIL }],
      subject: `New Clearance Request from ${resident_name}`,
      htmlContent: `
        <h2>New Clearance Request - SK San Isidro</h2>
        <p><strong>Resident Name:</strong> ${resident_name}</p>
        <p><strong>Clearance Type:</strong> ${clearance_type}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total Price:</strong> ₱${total_price}</p>
        <p><strong>Contact Number:</strong> ${contact_number}</p>
      `,
    }),
  });

  if (!response.ok) return res.status(500).json({ error: "Failed to send email" });
  return res.status(200).json({ success: true });
}
// api/send-webhook.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { name, email, phoneNumber, pageUrl } = req.body;

  try {
    const webhookURL =
      "https://flow.zoho.com/899071440/flow/webhook/incoming?zapikey=1001.032298ac244ab16396c1ccb1793332ca.a6728157ec735e0e3955e6c335e8a9a2&isdebug=false";

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        Remote__IP: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
        Time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        Date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        Name: name,
        Phone: phoneNumber,
        email : email,
        Page__URL : pageUrl,
      }).toString(),
    });

    if (!response.ok) throw new Error("Webhook failed");

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

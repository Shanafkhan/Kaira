export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { phoneNumber } = req.body;
  if (!phoneNumber) {
    return res.status(400).json({ success: false, message: "Phone number required" });
  }

  try {
    const apiKey = "68f214b7760bd";
    const sender = "VIEWIT";
    const url = `http://www.smsalert.co.in/api/mverify.json?apikey=${apiKey}&sender=${sender}&mobileno=${phoneNumber}&template=Hello%20User,%20Your%20OTP%20is%20[otp%20length=%224%22]`;

    const response = await fetch(url, { method: "POST", redirect: "follow" });
    const result = await response.json();

    if (result.status !== "success") {
      throw new Error(result.description?.desc || "Failed to send OTP");
    }

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

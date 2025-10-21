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
    const sender = "VBZEST";
    const template = `Hello Ravi, Your OTP is [otp length="5"]`;
    const url = `http://www.smsalert.co.in/api/mverify.json?apikey=68f214b7760bd&sender=VBZEST&mobileno=${phoneNumber}&template=${encodeURIComponent(template)}`;
  
    const response = await fetch(url, { method: "POST", redirect: "follow" });
    
    const result = await response.json();
    console.log(result);

    if (result.status !== "success") {
      throw new Error(result.description?.desc || "Failed to send OTP");
    }

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

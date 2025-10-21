import { useActionState, useState } from "react";
import image from "../assets/images/fromImage.png";
import ModalBase from "./ModalBase";

export default function Form({ isFormOpen, isFormClose }) {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitAction(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phoneNumber = formData.get("phoneNumber")?.trim();

    const errors = [];

    if (!name) errors.push("Name cannot be empty");
    if (!email.includes("@")) errors.push("Email is invalid");
    if (phoneNumber.length !== 10)
      errors.push("Phone number must be 10 digits");

    if (errors.length > 0) {
      setMessage(errors.join(", "));
      setLoading(false);
      return;
    }

    try {
      const pageUrl = window.location.href;
      const payload = { name, email, phoneNumber, pageUrl };

      const res = await fetch("/api/send-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStep(2);
        setMessage("OTP sent successfully!");
      } else {
        setMessage(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  
  async function verifyOtp(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();

      if (data.success) {
        setStep(3);
        setMessage("Thank you for your response! We will reach you soon.");
      } else {
        setMessage(data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong during verification.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <ModalBase isOpen={isFormOpen} onClose={isFormClose}>
      <div>
        <div className='flex flex-col md:flex-row bg-light max-h-[90vh] overflow-y-auto md:overflow-hidden'>
          {/* Left Image Section */}
          <div className='w-full md:w-1/2 h-[400px] md:h-auto'>
            <img
              src={image}
              alt='Form illustration'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Right Form Section */}
          <div className='w-full md:w-1/2 bg-light p-6 sm:p-10 md:p-12 flex flex-col justify-center'>
            {step === 1 && (
              <form onSubmit={submitAction} className='w-full'>
                <div className='flex flex-col items-start py-3'>
                  <label
                    htmlFor='name'
                    className='font-secondary text-stone-900 text-xl sm:text-2xl font-normal pb-3 tracking-tighter'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='p-4 w-full sm:p-5 bg-white text-lg sm:text-xl outline-none rounded-3xl placeholder:text-stone-400'
                    placeholder='Enter your Name'
                  />
                </div>

                <div className='flex flex-col items-start py-3'>
                  <label
                    htmlFor='email'
                    className='font-secondary text-stone-900 text-xl sm:text-2xl font-normal pb-3 tracking-tighter'>
                    Your Email ID
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='p-4 sm:p-5 bg-white w-full text-lg sm:text-xl outline-none rounded-3xl placeholder:text-stone-400'
                    placeholder='Enter your email'
                  />
                </div>

                <div className='flex flex-col items-start py-3'>
                  <label
                    htmlFor='phoneNumber'
                    className='font-secondary text-stone-900 text-xl sm:text-2xl font-normal pb-3 tracking-tighter'>
                    Your Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='Enter your phone number'
                    className='p-4 w-full sm:p-5 bg-white text-lg sm:text-xl outline-none rounded-3xl placeholder:text-stone-400'
                  />
                </div>

                {message && (
                  <p className='text-red-600 text-sm mt-2'>{message}</p>
                )}

                <button
                  className='text-lg sm:text-xl rounded-full px-8 py-4 font-secondary font-medium mt-8 cursor-pointer bg-[#D3A270] text-white hover:bg-[#c08b5d] transition-all duration-300'
                  type='submit'
                  disabled={loading}>
                  {loading
                    ? "Submitting..."
                    : "Submit your response and download!"}
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={verifyOtp}>
                <input
                  type='text'
                  placeholder='Enter OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='p-4 w-full rounded-lg border mb-3'
                  required
                />
                <button
                  type='submit'
                  disabled={loading}
                  className='px-6 py-3 bg-[#D3A270] text-white rounded-full'>
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
                {message && (
                  <p className='mt-2 text-sm text-gray-700'>{message}</p>
                )}
              </form>
            )}

            {step === 3 && (
              <div className='text-center py-8'>
                <h2 className='text-2xl font-medium text-green-600'>
                  {message}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalBase>
  );
}

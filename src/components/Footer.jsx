import logo from '../assets/images/kaira-logo-light.png';
export default function Footer() {
  return (
    <div className='flex bg-[#104D39]'>
      <div className='p-12 border-r-1 border-light w-1/3 '>
        <h1 className='font-secondary font-normal text-3xl text-light max-w-[80%] pb-5'>
          From coffee plantations to ROI numbers , our brochure’s got
          everything. Don’t worry, it’s more cozy than corporate.
        </h1>
        <button className='font-secondary text-2xl font-normal text-light border-1 border-light rounded-[55px] tracking-tighter px-6 py-4'>
          Download Our Brochure Now!
        </button>
      </div>
      <div className='w-1/3 flex items-center justify-center border-r-1 border-light'>
        <img src={logo} alt="kaira logo" className='h-[320px] w-auto' />
      </div>
      <div className='p-12 w-1/3 text-light'>
        <h1 className='font-secondary font-bold text-6xl tracking-tighter pb-5'>
          Contact Us!
        </h1>
        <table>
          <tbody className='text-2xl'>
            <tr>
              <td className='left-column  border-r-1 border-t-1 border-light '>E-mail</td>
              <td className='right-coulm border-t-1 border-light p-3'>info@vibezestates.com</td>
            </tr>
            <tr>
              <td className='border-r-1 border-t-1 border-light'>Website</td>
              <td className='border-t-1 border-light p-3'>https://vibezestates.com/</td>
            </tr>
            <tr>
              <td className='border-r-1 border-t-1 border-light'>Phone</td>
              <td className='border-t-1 border-light p-3'>+91 8152883388</td>
            </tr>
            <tr>
              <td className='border-r-1 border-t-1 border-light pr-2'>Address</td>
              <td className='border-t-1 border-light p-3'>
                #200, 4th floor, 10th cross, CBI Main Road, Ganganagar,
                Bangalore 560032.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

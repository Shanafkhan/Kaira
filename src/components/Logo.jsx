import kairaLogo from '../assets/images/kaira-logo-light.png'
export default function Logo(){
    return(
        <div className="p-20 flex justify-center items-center bg-[#104D39]">
            <img src={kairaLogo} alt="Kaira Logo" className='h-[320px] w-auto' />
        </div>
    );
}
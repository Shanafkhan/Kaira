import background from '../assets/images/storeBackground.png';
export default function Store() {
  return (
    <div className="p-20 flex flex-col items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <h1 className='font-secondary text-7xl font-normal text-[#F5EDD9] p-3'>
        What we have in store...
      </h1>
      <p className='font-primary text-3xl font-medium text-brown p-3 max-w-2/3 text-center'>
    Every courtyard, every villa, every tree, it’s all mapped out. Wanna see
        your future hangout spot?
      </p>
      <button className="rounded-[55px] py-4 px-6 border-1 border-brown font-secondary text-2xl font-bold text-brown p-3 cursor-pointer">
        Download Our Layout Plan
      </button>
    </div>
  );
}

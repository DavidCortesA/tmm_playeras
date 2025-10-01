import Image from 'next/image';

export default function Page() {
  return (
    <div className='bg-amber-100 w-full h-screen flex flex-col justify-center items-center'>
      <Image
        src="/images/Logo.png"
        alt="Logo"
        width={363}
        height={475}
      />
      <h1 className="font-bold text-4xl text-center mt-4 text-blue-800 italic">PRÓXIMAMENTE</h1>
    </div>
  );
}
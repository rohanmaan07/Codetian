import React from 'react';

// QR Code library
const QRCode = ({ url }) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
  return <img src={qrCodeUrl} alt="QR Code" className="w-28 h-28 mx-auto" />;
};


// Icons for services and process - Netflix theme
const ServiceIcon = ({ d }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
);


const PamphletFront = () => (
    <div className="bg-black text-white p-6 rounded-lg shadow-2xl h-full flex flex-col justify-between border border-zinc-800" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div>
            <div>
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-extrabold tracking-widest uppercase text-red-600">Codetian</h1>
                    <p className="text-xs text-gray-400 tracking-widest mt-1">INNOVATION IN EVERY LINE</p>
                </div>
                <div className="text-center my-4">
                    <h2 className="text-4xl font-extrabold leading-tight">
                        Turning Your <br /> Thoughts into <span className="text-red-600">Code</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">Welcome to Codetian — We create modern, beautiful, and high-performing websites that make a true impact.</p>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-bold text-center mb-4 border-b-2 border-red-600 pb-2">What We Offer</h3>
                <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="flex items-center space-x-2 p-2 bg-zinc-900 rounded-lg">
                        <ServiceIcon d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        <p className="font-semibold text-xs">Custom Web Development</p>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-zinc-900 rounded-lg">
                        <ServiceIcon d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        <p className="font-semibold text-xs">UI/UX Design</p>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-zinc-900 rounded-lg">
                        <ServiceIcon d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        <p className="font-semibold text-xs">E-commerce Solutions</p>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-zinc-900 rounded-lg">
                        <ServiceIcon d="M13 10V3L4 14h7v7l9-11h-7z" />
                        <p className="font-semibold text-xs">AI-Powered Solutions</p>
                    </div>
                     <div className="flex items-center space-x-2 p-2 bg-zinc-900 rounded-lg col-span-2 justify-center">
                        <ServiceIcon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        <p className="font-semibold text-xs">Maintenance & SEO</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-4">
  <p className="text-gray-400 italic text-sm">
    "Karmanye vadhikaraste, ma phaleshu kadachana."
  </p>
  <p className="text-gray-500 text-xs mt-1">- Shri Krishna (Bhagavad Gita 2.47)</p>
  <p className="text-gray-400 text-xs mt-2">
    Meaning: "Focus on your actions, for your right lies only in the work itself, never in its rewards."
  </p>
</div>

    </div>
);

const PamphletBack = () => (
    <div className="bg-black text-white p-6 rounded-lg shadow-2xl h-full flex flex-col justify-between border border-zinc-800" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div>
            <h3 className="text-xl font-bold text-center mb-3 border-b-2 border-red-600 pb-2">About Us</h3>
            <p className="text-gray-400 text-center text-sm mb-4">
                We turn ideas into modern, beautiful, and high-performing websites with clean code and robust back-end solutions.
            </p>
            
            <h3 className="text-xl font-bold text-center mb-3 border-b-2 border-red-600 pb-2">Our Working Process</h3>
            <ol className="relative border-l border-gray-700 ml-3">                  
                <li className="mb-3 ml-5">            
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full -left-2.5 ring-4 ring-black">1</span>
                    <h4 className="flex items-center text-sm font-semibold text-white">Discovery & Planning</h4>
                </li>
                <li className="mb-3 ml-5">
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full -left-2.5 ring-4 ring-black">2</span>
                    <h4 className="text-sm font-semibold text-white">UI/UX Design</h4>
                </li>
                <li className="mb-3 ml-5">
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full -left-2.5 ring-4 ring-black">3</span>
                    <h4 className="text-sm font-semibold text-white">Development</h4>
                </li>
                <li className="ml-5">
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full -left-2.5 ring-4 ring-black">4</span>
                    <h4 className="text-sm font-semibold text-white">Deployment & Launch</h4>
                </li>
            </ol>
        </div>

        <div className="text-center">
             <h3 className="text-xl font-bold text-center mb-2">Get In Touch</h3>
            <div className="flex flex-col items-center space-y-2">
                <QRCode url="https://codetian.vercel.app/" />
                <p className="font-bold text-md text-red-600">Scan to visit our website!</p>
                <div className="text-gray-400 text-xs space-y-1">
                    <p>rohanmandal2208@gmail.com</p>
                    <p>Rohan Mandal: +91 9711657307</p>
                    <p>Yash Yadav: +91 9650762113</p>
                </div>
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-red-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.705-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.646.349-1.086.635-1.336-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.031-2.682-.103-.253-.446-1.27.098-2.64 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.819c.851.004 1.705.115 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.37.202 2.387.1 2.64.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.679.92.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .268.18.578.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
);


export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen p-4 sm:p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pamphlet-side">
                    <PamphletFront />
                </div>
                <div className="pamphlet-side">
                    <PamphletBack />
                </div>
            </div>
        </div>
    </div>
  );
}


import React from 'react';

const BrandHeader = () => {
  return (
    <div className="w-full pb-2 mb-2 flex flex-col items-center">
      <div className="flex items-center justify-center w-[98%] mx-auto pb-2">
        <h1 className="text-5xl md:text-[6.5rem] font-black tracking-tighter text-[#3d2b1f] uppercase font-serif leading-none whitespace-nowrap">
          NASZA GAZETKA
        </h1>
      </div>
      <div className="w-[98%] mx-auto border-y-[2px] border-[#3d2b1f] py-1.5 flex items-center justify-between px-4 text-[10px] md:text-sm font-bold uppercase tracking-[0.1em] text-[#5a4a3a]">
        <div className="flex items-center gap-2">
          <span>📰</span>
          <span className="hidden sm:inline">Niezależne Media Śledcze</span>
        </div>
        <div className="text-center font-serif font-black">
          NIEDZIELA, 1 MARCA 2026
        </div>
        <div className="flex items-center gap-2">
          <span>📄</span>
          <span className="hidden md:inline border-l-2 border-[#3d2b1f] pl-2 ml-1">Wydanie specjalne</span>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;

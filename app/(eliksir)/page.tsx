import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { ElixirModalsProvider } from '@/app/eliksir/ElixirClientComponents';
import ElixirLogin from '@/app/components/ElixirLogin';
import {
  VIDEO_ARREST_METADATA,
  VIDEO_STEFANEK_METADATA,
  KORDYS_IMAGES_URL
} from '@/lib/eliksir-data';

export const metadata: Metadata = {
  title: "Eliksir Wiedźmina – Archiwum Śledcze",
  description: "Portal Niezależnych Mediów Śledczych. Dokumentacja śledztwa w sprawie Janova i Hermanovic.",
};

const BrandHeader = () => {
  return (
    <div className="w-full pb-2 mb-8 flex flex-col items-center">
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

export default function Page() {
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Eliksir Wiedźmina – Śledztwo: Michał Kiciński i tajemnica Janova",
    "description": "Pełna dokumentacja śledztwa: Michał Kiciński, Jarosław Kordys i prokurator Jolanta Świdnicka. Ayahuasca, Janov i tragiczna śmierć uczestniczki.",
    "image": [
      `${KORDYS_IMAGES_URL}/wezwanie/wezwanie_kicinski.png`
    ],
    "datePublished": "2024-03-03",
    "author": [{
      "@type": "Person",
      "name": "Detektyw Polutek",
      "url": "mailto:detektyw.polutek@protonmail.com"
    }]
  };

  const videoArrestSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": VIDEO_ARREST_METADATA.name,
    "description": VIDEO_ARREST_METADATA.description,
    "thumbnailUrl": VIDEO_ARREST_METADATA.thumbnailUrl,
    "uploadDate": VIDEO_ARREST_METADATA.uploadDate,
    "contentUrl": VIDEO_ARREST_METADATA.contentUrl,
  };

  const videoStefanekSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": VIDEO_STEFANEK_METADATA.name,
    "description": VIDEO_STEFANEK_METADATA.description,
    "thumbnailUrl": VIDEO_STEFANEK_METADATA.thumbnailUrl,
    "uploadDate": VIDEO_STEFANEK_METADATA.uploadDate,
    "contentUrl": VIDEO_STEFANEK_METADATA.contentUrl,
  };

  return (
    <ElixirModalsProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoArrestSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStefanekSchema) }}
      />

      <main className="min-h-screen bg-[#fcfbf9] text-[#3d2b1f] selection:bg-[#d4c4a8]/50 font-serif flex flex-col items-center">
        <div className="w-full max-w-5xl border-x-2 border-black bg-[#fcfbf9] min-h-screen flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.02)]">

          <BrandHeader />

          <div className="w-full bg-[#faf6ec] border-b border-[#d4c4a8] py-6 px-4">
             <div className="max-w-md mx-auto">
                <ElixirLogin />
             </div>
          </div>

          <header className="pt-8 pb-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-8 text-[#3d2b1f]">
                <span className="block text-5xl md:text-7xl font-bold leading-none tracking-tight uppercase">
                  Eliksir Wiedźmina
                </span>
                <span className="block text-2xl md:text-4xl text-[#5a4a3a] italic font-medium mt-6 max-w-3xl mx-auto">
                  Mroczna tajemnica twórców CD Projekt
                </span>
              </h1>

              <div className="max-w-2xl mx-auto border-y border-[#d4c4a8] py-12 px-4 bg-[#faf6ec]/30">
                <p className="text-xl md:text-2xl text-[#4a3b2c] leading-relaxed italic mb-8">
                  &quot;Ayahuasca, policyjne naloty i tragedia, o której nie miał się nikt dowiedzieć. Publicznie dostępne akta i rejestry ujawniają, jak twórcy gry Wiedźmin finansowali szamańskie podziemie.&quot;
                </p>
                <div className="flex items-center justify-center gap-4 text-xs font-sans font-bold uppercase tracking-widest text-[#8a7a62]">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Dowody</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4c4a8]"></span>
                    <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Akta</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4c4a8]"></span>
                    <span className="flex items-center gap-1"><ArrowRight className="w-4 h-4" /> Wyroki</span>
                </div>
              </div>
            </div>
          </header>

          <article className="max-w-2xl mx-auto px-4 pb-20 flex-grow w-full">
            <div className="bg-[#faf6ec] border border-[#d4c4a8] p-8 md:p-12 shadow-sm rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#3d2b1f]"></div>

                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#3d2b1f]">
                    <Lock className="w-6 h-6 text-[#722f37]" />
                    Status Archiwum
                </h2>

                <p className="text-[#5a4a3a] leading-relaxed mb-4 font-sans">
                    Pełna dokumentacja śledztwa dziennikarskiego jest obecnie zabezpieczona. Aby uzyskać dostęp do skanów wyroków, zeznań świadków oraz materiałów wideo, należy skorzystać z panelu autoryzacji powyżej.
                </p>

                <div className="mt-8 pt-8 border-t border-[#d4c4a8] text-[11px] text-[#8a7a62] font-sans uppercase tracking-widest leading-loose">
                    <p>BIURO ANALIZ I DOKUMENTACJI • MATERIAŁY POUFNE • © 2026</p>
                </div>
            </div>

            <div className="mt-12 text-center text-[#8a7a62] text-xs font-sans italic">
                Portal Niezależnych Mediów Śledczych. Jeśli nie posiadasz hasła, skontaktuj się z administratorem.
            </div>
          </article>

          <footer className="py-8 border-t border-[#d4c4a8] mx-8 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-[#8a7a62]">
              <span>Polska - Czechy - Peru</span>
              <span>www.eliksir-wiedzmina.pl</span>
          </footer>
        </div>
      </main>
    </ElixirModalsProvider>
  );
}

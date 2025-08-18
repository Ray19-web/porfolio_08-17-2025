import React, { useRef, useEffect, useState } from 'react';
import { Music, Disc3 } from 'lucide-react';
import ako from "../assets/akoNamanMuna.mp3";

export default function MusicLyricsSection() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visible, setVisible] = useState(false); // for fade-in

  const lyrics = `La la la
Kada hakbang sa lupa'y para akong inaalon
At nalulunod sa batikos ng mundo
Sa kung ano lamang ang kaya ko
Pigang-piga na sa mga problemang 'di masolusyonan agad
Parang wala ng bukas
Pwede bang umiwas
Hinahanap ang sarili ngunit 'di na kakayanin
Sa ligaw na dinadaanan ko
Sa'n na 'to patungo
Sa'n na 'ko patungo
Dahan-dahan nating simulan muli ang paghakbang
Dahan-dahang tumingin sa salamin
Upang makita ang ating kagandahan
Dahan-dahang iangat ang mukha
Upang masilayan ang payapang kalangitan
Oo pagod ka na pero 'di ka nag-iisa
Kaya't lumaban ka at sabihing
Ako naman muna
Kada langhap sa hangin pansin ko na lagi na lang usok
Walang malinis halos puro polusyon
Parang ako raw na konsumisyon
Gulong-gulo ang isip sa'n ba lulugar kapag nagkamali
Grabe sila manghusga
Bakit perpekto ba sila
Huminga ka ng malalim at isipin ng mabuti
Ang mga desisyong ilalaan para sa kinabukasan
Nang makapunta sa paroroonan
Kung dahan-dahan nating simulan muli ang paghakbang (muli ang pag-hakbang)
Dahan-dahang tumingin sa salamin
Upang makita ang ating kagandahan
Dahan-dahang iangat ang mukha
Upang masilayan ang payapang kalangitan
Oo pagod ka na pero 'di ka nag-iisa (di ka nag-iisa)
Kaya't lumaban ka at sabihing
Ako naman muna
Ako naman muna
Huwag papalamon sa lungkot
Huwag hahayaang malugmok ang puso mo
Sa ibabato sa 'yo ng iba
Tandaan mong sapat ka
Dahan-dahang tanggalin ang maskara
At hayaang tumulo ang bumabadyang mga luha
Dahan-dahang iangat ang mukha
Upang masilayan ang mga taong ika'y pinapahalagahan
Oo pagod ka na pero 'di ka nag-iisa
Kaya't lumaban ka at sabihing
Ako naman muna
Ako naman muna
  `;

  useEffect(() => {
    setVisible(true); // trigger fade-in on mount

    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => setIsPlaying(false));

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);

      return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  return (
    <div className="flex-1 h-full bg-white rounded-2xl p-4 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <Music className="text-pink-500 size-5" />
        <h3 className="text-md font-semibold font-google-sans-code">Ako Naman muna</h3>
      </div>

      {/* Animated Disc3 + Audio */}
      <div className="flex items-center gap-4 mb-3">
        <Disc3 className={`w-12 h-12 text-blue-500 ${isPlaying ? "animate-spin" : ""}`} />
        <audio ref={audioRef} controls autoPlay className="w-full">
          <source src={ako} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Lyrics with fade-in and pulse effect */}
      <div
        className={`font-google-sans-code bg-base-200 rounded-lg p-2 h-28 overflow-y-auto text-sm leading-relaxed whitespace-pre-wrap
          transition-opacity duration-1000
          ${visible ? "opacity-100" : "opacity-0"}
          ${isPlaying ? "animate-pulse" : ""}
        `}
      >
        {lyrics}
      </div>
    </div>
  );
}

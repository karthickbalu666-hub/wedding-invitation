"use client";

import { useState } from "react";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [dateRevealed, setDateRevealed] = useState(false);

  const openInvitation = () => {
    if (opening) return;

    setOpening(true);

    // Wait for envelope opening animation
    setTimeout(() => {
      setRevealed(true);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-[#eee8dc] flex justify-center">

      {/* =====================================================
          ENVELOPE
      ====================================================== */}

      {!revealed && (
        <section
          onClick={openInvitation}
          className="relative w-full max-w-2xl min-h-screen
          overflow-hidden cursor-pointer
          bg-gradient-to-b from-[#8f1717] via-[#c52b1d] to-[#ff5a19]
          flex items-center justify-center"
        >

          {/* Glow behind seal */}
          <div
            className={`absolute w-80 h-80 rounded-full
            bg-orange-300/40 blur-3xl
            transition-all duration-1000
            ${opening ? "scale-[2.5] opacity-100" : "scale-100 opacity-0"}`}
          />

          {/* Envelope body */}
          <div className="absolute inset-x-5 top-24 bottom-20
            rounded-t-[35px]
            bg-gradient-to-b from-[#e33a20] to-[#ff6a1c]
            shadow-2xl overflow-hidden"
          >

            {/* TOP FLAP */}
            <div
              className={`absolute top-0 left-0 right-0
              h-[48%] z-30 origin-top
              bg-gradient-to-b from-[#b91f1c] to-[#f04a20]
              transition-transform duration-[1600ms]
              ease-in-out
              ${
                opening
                  ? "rotate-x-[-180deg] -translate-y-[15%]"
                  : ""
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformOrigin: "top center",
              }}
            />

            {/* INNER WHITE CARD */}
            <div
              className={`absolute left-[9%] right-[9%]
              top-[25%] bottom-[12%]
              bg-[#fffaf0]
              rounded-sm
              shadow-xl z-10
              transition-all duration-[1500ms]
              ${
                opening
                  ? "translate-y-[-12%] scale-100 opacity-100"
                  : "translate-y-[20%] scale-90 opacity-0"
              }`}
            >
              <div className="h-full flex flex-col
                items-center justify-center text-center"
              >

                <p className="font-serif italic text-3xl text-[#77776d]">
                  K
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <span className="w-8 h-px bg-[#c6a66b]" />
                  <span className="text-[#c6a66b]">♥</span>
                  <span className="w-8 h-px bg-[#c6a66b]" />
                </div>

                <p className="mt-4 font-serif italic text-2xl text-[#77776d]">
                  P
                </p>

              </div>
            </div>

            {/* LOWER ENVELOPE FOLD */}
            <div
              className="absolute bottom-0 left-0 right-0
              h-[52%] z-20
              bg-gradient-to-t from-[#ff4918] to-[#ff7024]"
              style={{
                clipPath: "polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)",
              }}
            />

          </div>


          {/* =================================================
              TAP TO REVEAL
          ================================================== */}

          <div
            className={`relative z-50 flex flex-col
            items-center text-center text-white
            transition-all duration-700
            ${opening ? "opacity-0 scale-125" : "opacity-100"}`}
          >

            <p className="font-serif italic text-3xl">
              Tap to Reveal
            </p>

            {/* Wax Seal */}
            <div
              className="mt-8 w-36 h-36 rounded-full
              bg-[#f5e6c8]
              border-4 border-[#e1cda7]
              shadow-[0_0_40px_rgba(255,230,160,0.6)]
              flex items-center justify-center"
            >

              <div
                className="w-28 h-28 rounded-full
                border border-[#c5a875]
                flex items-center justify-center"
              >

                <span className="font-serif italic
                  text-4xl text-[#9f8558]"
                >
                  K ♥ P
                </span>

              </div>

            </div>

            <p className="mt-8 font-serif italic text-2xl">
              To new beginnings!
            </p>

          </div>


          {/* Opening flash */}
          <div
            className={`absolute inset-0 z-[100]
            bg-white pointer-events-none
            transition-opacity duration-700
            ${opening ? "opacity-80" : "opacity-0"}`}
          />

        </section>
      )}


      {/* =====================================================
          INVITATION AFTER ENVELOPE OPENS
      ====================================================== */}

      {revealed && (
        <div
          className="w-full max-w-2xl bg-[#fffdf8]
          text-center text-[#687064]
          animate-[fadeIn_1.2s_ease-in]"
        >

          {/* INTRO */}
          <section
            className="min-h-screen flex flex-col
            items-center justify-center px-7 py-20"
          >

            <p className="text-xs tracking-[0.4em]
              uppercase text-[#9b8565]"
            >
              With the blessings of our families
            </p>

            <div className="mt-12">
              <p className="font-serif italic text-2xl">
                Two hearts,
              </p>

              <p className="font-serif italic text-2xl">
                one journey,
              </p>

              <p className="font-serif italic text-2xl">
                forever.
              </p>
            </div>


            {/* GROOM */}
            <h1
              className="mt-20 font-serif italic
              text-4xl sm:text-5xl
              text-[#72786d]"
            >
              Karthick Balu B.E
            </h1>


            {/* & */}
            <div className="flex justify-center
              items-center gap-5 my-9"
            >
              <span className="h-px w-16 bg-[#d4c7b4]" />

              <span className="font-serif text-4xl text-[#bb9a5b]">
                &
              </span>

              <span className="h-px w-16 bg-[#d4c7b4]" />
            </div>


            {/* BRIDE */}
            <h1
              className="font-serif italic
              text-4xl sm:text-5xl
              text-[#72786d]"
            >
              Pavithra Perumal B.C.A
            </h1>

            <div className="mt-16 text-[#bb9a5b] text-3xl">
              ♥
            </div>

            <p className="mt-8 text-xs tracking-[0.3em]
              uppercase text-[#9b8565]"
            >
              Scroll to reveal
            </p>

            <div className="mt-6 animate-bounce text-xl">
              ↓
            </div>

          </section>


          {/* =================================================
              SAVE THE DATE
          ================================================== */}

          <section className="px-6 py-20">

            <p className="text-xs tracking-[0.4em]
              uppercase text-[#9b8565]"
            >
              The Date
            </p>

            <h2
              className="mt-5 font-serif italic
              text-5xl text-[#687064]"
            >
              Save the Date
            </h2>

            <p className="mt-5 font-serif italic text-lg">
              Tap below to reveal
            </p>


            <div className="mt-12 grid grid-cols-2 gap-5 px-2">

              {/* RECEPTION */}
              <button
                onClick={() => setDateRevealed(true)}
                className="min-h-48 border border-[#d8ccb9]
                rounded-2xl bg-[#fffdf8]
                shadow-sm transition
                flex flex-col items-center justify-center"
              >

                {!dateRevealed ? (
                  <>
                    <span className="text-xs tracking-[0.3em]">
                      TAP
                    </span>

                    <span className="mt-5 text-3xl text-[#bb9a5b]">
                      ✦
                    </span>

                    <span className="mt-4 font-serif italic text-xl">
                      Reception
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs tracking-[0.2em]">
                      RECEPTION
                    </span>

                    <span className="mt-4 font-serif text-3xl">
                      24
                    </span>

                    <span className="font-serif">
                      October 2026
                    </span>

                    <span className="mt-2 text-sm tracking-[0.2em]">
                      6:00 PM
                    </span>
                  </>
                )}

              </button>


              {/* WEDDING */}
              <button
                onClick={() => setDateRevealed(true)}
                className="min-h-48 border border-[#d8ccb9]
                rounded-2xl bg-[#fffdf8]
                shadow-sm transition
                flex flex-col items-center justify-center"
              >

                {!dateRevealed ? (
                  <>
                    <span className="text-xs tracking-[0.3em]">
                      TAP
                    </span>

                    <span className="mt-5 text-3xl text-[#bb9a5b]">
                      ♥
                    </span>

                    <span className="mt-4 font-serif italic text-xl">
                      Wedding
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs tracking-[0.2em]">
                      WEDDING
                    </span>

                    <span className="mt-4 font-serif text-3xl">
                      25
                    </span>

                    <span className="font-serif">
                      October 2026
                    </span>

                    <span className="mt-2 text-sm tracking-[0.2em]">
                      6:00 AM
                    </span>
                  </>
                )}

              </button>

            </div>

          </section>


          {/* VENUE */}
          <section
            className="mx-6 px-6 py-14
            border border-[#dfd3c1]"
          >

            <p className="text-xs tracking-[0.4em]
              uppercase text-[#9b8565]"
            >
              Venue
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Ayya Koil Mandapam
            </h2>

           <a
  href="https://maps.app.goo.gl/g5xgv4uWbGBPFEwU6?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block border border-[#bb9a5b] px-8 py-3 text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#bb9a5b] hover:text-white"
>
  View Location
</a>

          </section>


          {/* CLOSING */}
          <section className="px-8 pt-20 pb-24">

            <div className="text-[#bb9a5b] text-2xl">
              ♥
            </div>

            <p className="mt-8 font-serif italic text-xl">
              With love,
            </p>

            <p className="mt-3 font-serif text-xl">
              Karthick & Pavithra
            </p>

          </section>

        </div>
      )}

    </main>
  );
}
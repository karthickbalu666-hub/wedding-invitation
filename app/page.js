"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const audioRef = useRef(null);

  /* =====================================================
     OPEN INVITATION + START MUSIC
  ===================================================== */

  const openInvitation = async () => {
    setOpened(true);

    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        setMusicOn(true);
      } catch (error) {
        console.log("Music could not start:", error);
        setMusicOn(false);
      }
    }
  };

  /* =====================================================
     MUSIC PLAY / PAUSE
  ===================================================== */

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setMusicOn(true);
      } catch (error) {
        console.log("Unable to play music:", error);
      }
    } else {
      audioRef.current.pause();
      setMusicOn(false);
    }
  };

  /* =====================================================
     FLOWERS
  ===================================================== */

  const coverFlowers = Array.from(
    { length: 45 },
    (_, i) => i
  );

  const floatingFlowers = Array.from(
    { length: 90 },
    (_, i) => i
  );

  const flowerTypes = [
    "🌸",
    "🌺",
    "🌼",
    "🌷",
  ];

  return (
    <main
      className={`wedding-page ${
        opened ? "page-opened" : ""
      }`}
    >

      {/* =================================================
          WEDDING SONG
      ================================================= */}

      <audio
        ref={audioRef}
        src="/wedding-song.mp3"
        loop
        preload="auto"
      />

      {!opened ? (

        /* =================================================
           OPENING PAGE
        ================================================= */

        <section className="luxury-cover">

          <div className="cover-glow cover-glow-one" />
          <div className="cover-glow cover-glow-two" />

          {/* =================================================
             OPENING FALLING FLOWERS
          ================================================= */}

          <div
            className="cover-petals"
            aria-hidden="true"
          >
            {coverFlowers.map((i) => {
              const left =
                1 + ((i * 17) % 98);

              const size =
                16 + ((i * 7) % 21);

              const delay =
                -((i * 0.43) % 8);

              const duration =
                5.5 + ((i * 2.1) % 5);

              return (
                <span
                  key={i}
                  style={{
                    left: `${left}%`,
                    fontSize: `${size}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                >
                  {flowerTypes[
                    i % flowerTypes.length
                  ]}
                </span>
              );
            })}
          </div>

          {/* =================================================
             OPENING CONTENT
          ================================================= */}

          <div className="cover-frame">

            <span className="opening-star">
              ✦
            </span>

            <p className="cover-top">
              WITH LOVE
            </p>

            <h1 className="opening-names">
              Karthick

              <span>
                &amp;
              </span>

              Pavithra
            </h1>

            {/* =================================================
               NEW OPEN INVITATION BUTTON
            ================================================= */}

            <button
              type="button"
              className="open-invitation-button"
              onClick={openInvitation}
              aria-label="Open Karthick and Pavithra wedding invitation"
            >
              ✨ OPEN INVITATION ✨
            </button>

            <div className="opening-line">
              <span />
              <b>♡</b>
              <span />
            </div>

            <p className="opening-date">
              24 · 25 OCTOBER 2026
            </p>

            <p className="opening-quote">
              Two hearts.
              <br />
              One journey.
              <br />
              Forever.
            </p>

            <div className="opening-heart">
              ♡
            </div>

            {/* =================================================
               ENVELOPE
            ================================================= */}

            <div className="envelope-area">

              <button
                type="button"
                className="luxury-envelope"
                onClick={openInvitation}
                aria-label="Open Karthick and Pavithra wedding invitation"
              >

                <div className="envelope-back">

                  <div className="envelope-texture" />

                  <div className="envelope-flower envelope-flower-left">
                    ❋
                  </div>

                  <div className="envelope-flower envelope-flower-left-small">
                    ✿
                  </div>

                  <div className="envelope-flower envelope-flower-right">
                    ✿
                  </div>

                  <div className="envelope-flower envelope-flower-right-small">
                    ❋
                  </div>

                  <div className="envelope-detail detail-one" />
                  <div className="envelope-detail detail-two" />
                  <div className="envelope-detail detail-three" />
                  <div className="envelope-detail detail-four" />

                </div>

                <div className="envelope-flap" />

                <div className="wax-seal">
                  <span>K</span>
                  <small>♥</small>
                  <span>P</span>
                </div>

              </button>

            </div>

            {/* =================================================
               EXISTING OPEN BUTTON
            ================================================= */}

            <button
              type="button"
              className="tap-open"
              onClick={openInvitation}
            >

              <span className="tap-icon">
                ♡
              </span>

              TAP TO OPEN

            </button>

          </div>

        </section>

      ) : (

        /* =================================================
           INVITATION
        ================================================= */

        <div className="invitation-content">

          {/* =================================================
             FLOATING FLOWERS
          ================================================= */}

          <div
            className="floating-petals"
            aria-hidden="true"
          >

            {floatingFlowers.map((i) => {

              const left =
                1 + ((i * 19) % 98);

              const size =
                16 + ((i * 7) % 21);

              const delay =
                -((i * 0.38) % 9);

              const duration =
                5.5 + ((i * 2.3) % 5);

              return (
                <span
                  key={i}
                  className="petal"
                  style={{
                    left: `${left}%`,
                    fontSize: `${size}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                >
                  {flowerTypes[
                    i % flowerTypes.length
                  ]}
                </span>
              );
            })}

          </div>

          {/* =================================================
             HERO
          ================================================= */}

          <section className="invitation-hero">

            <div className="hero-art">

              <img
                src="/wedding-hero.png"
                alt="Karthick Balu and Pavithra Perumal Wedding Invitation"
              />

            </div>

            <div
              className="hero-shimmer"
              aria-hidden="true"
            />

          </section>

          {/* =================================================
             SPECIAL DAYS
          ================================================= */}

          <section className="events-section">

            <div className="section-heading">

              <p className="eyebrow">
                SAVE THE DATE
              </p>

              <h2>
                Our Special Days
              </h2>

              <div className="heading-heart">
                ♡
              </div>

            </div>

            <div className="event-list">

              {/* RECEPTION */}

              <article className="event-card">

                <div className="event-top-ornament">
                  ✦
                </div>

                <p className="event-type">
                  RECEPTION
                </p>

                <h3>
                  24 October 2026
                </h3>

                <p className="event-day">
                  Saturday
                </p>

                <div className="event-divider" />

                <div className="event-info">

                  <span>
                    TIME
                  </span>

                  <strong>
                    6:00 PM
                  </strong>

                </div>

                <div className="event-info">

                  <span>
                    VENUE
                  </span>

                  <strong>
                    Ayya Koil Mandapam
                  </strong>

                </div>

              </article>

              {/* WEDDING */}

              <article className="event-card featured">

                <div className="event-top-ornament">
                  ♡
                </div>

                <p className="event-type">
                  WEDDING CEREMONY
                </p>

                <h3>
                  25 October 2026
                </h3>

                <p className="event-day">
                  Sunday
                </p>

                <div className="event-divider" />

                <div className="event-info">

                  <span>
                    TIME
                  </span>

                  <strong>
                    6:00 AM
                  </strong>

                </div>

                <div className="event-info">

                  <span>
                    VENUE
                  </span>

                  <strong>
                    Ayya Koil Mandapam
                  </strong>

                </div>

              </article>

            </div>

          </section>

          {/* =================================================
             LOCATION
          ================================================= */}

          <section className="location-section">

            <div className="location-card">

              <div className="corner corner-top-left" />
              <div className="corner corner-top-right" />
              <div className="corner corner-bottom-left" />
              <div className="corner corner-bottom-right" />

              <p className="eyebrow">
                WHERE WE CELEBRATE
              </p>

              <h2>
                Ayya Koil Mandapam
              </h2>

              <div className="location-symbol">
                ⌖
              </div>

              <p className="location-copy">
                Join us for these beautiful moments as we celebrate love,
                togetherness and the beginning of our forever.
              </p>

              <a
                href="https://maps.app.goo.gl/g5xgv4uWbGBPFEwU6?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                VIEW LOCATION
              </a>

            </div>

          </section>

          {/* =================================================
             CLOSING
          ================================================= */}

          <section className="closing-section">

            <div className="closing-frame">

              <span className="closing-star">
                ✦
              </span>

              <p className="eyebrow light">
                WITH LOVE
              </p>

              <h2>

                Karthick

                <span>
                  &amp;
                </span>

                Pavithra

              </h2>

              <div className="closing-line">

                <span />

                <b>
                  ♡
                </b>

                <span />

              </div>

              <p className="closing-date">
                24 · 25 OCTOBER 2026
              </p>

              <p className="closing-text">
                Two hearts.
                <br />
                One journey.
                <br />
                Forever.
              </p>

              <div className="closing-heart">
                ♡
              </div>

            </div>

          </section>

          {/* =================================================
             FOOTER
          ================================================= */}

          <footer className="site-footer">

            <p>
              MADE WITH LOVE
            </p>

            <strong>
              K &amp; P
            </strong>

            <span>
              ♡
            </span>

          </footer>

          {/* =================================================
             MUSIC BUTTON
          ================================================= */}

          <button
            type="button"
            className={`music-button ${
              musicOn ? "playing" : ""
            }`}
            onClick={toggleMusic}
            aria-label={
              musicOn
                ? "Pause music"
                : "Play music"
            }
          >
            {musicOn ? "♫" : "♪"}
          </button>

        </div>

      )}

    </main>
  );
}
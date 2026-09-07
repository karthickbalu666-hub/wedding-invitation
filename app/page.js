"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-10-25T06:00:00");

function getTimeLeft(target) {
  const difference = target.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className={`wedding-page ${opened ? "page-opened" : ""}`}>
      {!opened ? (
        <section className="luxury-cover">
          <div className="cover-glow cover-glow-one" />
          <div className="cover-glow cover-glow-two" />

          <div className="cover-petals" aria-hidden="true">
            <span>✦</span>
            <span>✿</span>
            <span>❋</span>
            <span>✦</span>
            <span>✿</span>
            <span>❋</span>
          </div>

          <div className="cover-frame">
            <p className="cover-top">A SPECIAL INVITATION AWAITS</p>

            <div className="cover-line">
              <span />
              <b>♡</b>
              <span />
            </div>

            <p className="cover-kicker">K &amp; P</p>

            <h1 className="cover-title">
              Two Hearts
              <br />
              <em>One Journey</em>
              <br />
              Forever
            </h1>

            <div className="envelope-area">
              <button
                type="button"
                className="luxury-envelope"
                onClick={() => setOpened(true)}
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

            <button
              type="button"
              className="tap-open"
              onClick={() => setOpened(true)}
            >
              <span className="tap-icon">♡</span>
              TAP TO OPEN
            </button>

            <p className="cover-date">24 · 25 OCTOBER 2026</p>
          </div>
        </section>
      ) : (
        <div className="invitation-content">
          {/* HERO */}
          <section className="invitation-hero">
            <div className="hero-art">
              <img
                src="/wedding-hero.png"
                alt="Karthick and Pavithra wedding invitation with floral arch, lake and swans"
              />
            </div>

            <div className="hero-shimmer" aria-hidden="true" />
          </section>

          {/* STORY */}
          <section className="story-section">
            <div className="section-ornament">✦</div>

            <p className="eyebrow">A BEAUTIFUL CHAPTER BEGINS</p>

            <h2>Our Story</h2>

            <div className="heart-divider">
              <span />
              <b>♡</b>
              <span />
            </div>

            <p className="story-copy">
              Two hearts, one journey and a lifetime of beautiful memories
              waiting to be made.
            </p>

            <p className="story-copy secondary">
              We would be delighted to have you with us as we begin our
              forever.
            </p>
          </section>

          {/* COUNTDOWN */}
          <section className="countdown-section">
            <div className="section-heading-dark">
              <p className="eyebrow light">COUNTING EVERY MOMENT</p>

              <h2>Until We Say “I Do”</h2>

              <div className="heading-heart">♡</div>
            </div>

            <div className="countdown">
              <div className="countdown-item">
                <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
                <span>DAYS</span>
              </div>

              <div className="countdown-item">
                <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
                <span>HOURS</span>
              </div>

              <div className="countdown-item">
                <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
                <span>MINUTES</span>
              </div>

              <div className="countdown-item">
                <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
                <span>SECONDS</span>
              </div>
            </div>
          </section>

          {/* EVENTS */}
          <section className="events-section">
            <div className="section-heading">
              <p className="eyebrow">SAVE THE DATE</p>

              <h2>Our Special Days</h2>

              <div className="heading-heart">♡</div>
            </div>

            <div className="event-list">
              <article className="event-card">
                <div className="event-top-ornament">✦</div>

                <p className="event-type">RECEPTION</p>

                <h3>24 October 2026</h3>

                <p className="event-day">Saturday</p>

                <div className="event-divider" />

                <div className="event-info">
                  <span>TIME</span>
                  <strong>6:00 PM</strong>
                </div>

                <div className="event-info">
                  <span>VENUE</span>
                  <strong>Ayya Koil Mandapam</strong>
                </div>
              </article>

              <article className="event-card featured">
                <div className="event-top-ornament">♡</div>

                <p className="event-type">WEDDING CEREMONY</p>

                <h3>25 October 2026</h3>

                <p className="event-day">Sunday</p>

                <div className="event-divider" />

                <div className="event-info">
                  <span>TIME</span>
                  <strong>6:00 AM</strong>
                </div>

                <div className="event-info">
                  <span>VENUE</span>
                  <strong>Ayya Koil Mandapam</strong>
                </div>
              </article>
            </div>
          </section>

          {/* LOCATION */}
          <section className="location-section">
            <div className="location-card">
              <div className="corner corner-top-left" />
              <div className="corner corner-top-right" />
              <div className="corner corner-bottom-left" />
              <div className="corner corner-bottom-right" />

              <p className="eyebrow">WHERE WE CELEBRATE</p>

              <h2>Ayya Koil Mandapam</h2>

              <div className="location-symbol">⌖</div>

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

          {/* CLOSING */}
          <section className="closing-section">
            <div className="closing-frame">
              <span className="closing-star">✦</span>

              <p className="eyebrow light">WITH LOVE</p>

              <h2>
                Karthick
                <span>&amp;</span>
                Pavithra
              </h2>

              <div className="closing-line">
                <span />
                <b>♡</b>
                <span />
              </div>

              <p className="closing-date">24 · 25 OCTOBER 2026</p>

              <p className="closing-text">
                Two hearts.
                <br />
                One journey.
                <br />
                Forever.
              </p>

              <div className="closing-heart">♡</div>
            </div>
          </section>

          <footer className="site-footer">
            <p>MADE WITH LOVE</p>
            <strong>K &amp; P</strong>
            <span>♡</span>
          </footer>
        </div>
      )}
    </main>
  );
}
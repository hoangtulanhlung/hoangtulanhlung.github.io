<template>
  <div class="relative right-0 h-content-headless-toolbox overflow-hidden">
    <div
      class="about-scroll w-full h-full bg-white overflow-y-scroll overflow-x-hidden"
    >
      <main class="about-page">

        <!-- INTRO -->
        <section class="intro-section">
          <div class="intro-copy">
            <h1>the less than profound thoughts</h1>
            <h2>of nguyen trong khoi</h2>

            <p>
              i have a lot of opinions, and if you get to know me,
              i’ll probably share them even if you didn’t ask.
            </p>

          </div>

          <figure class="photo-frame intro-photo">
            <img
              src="/img/about-me/baby.jpg"
              alt="Baby photo"
            />
          </figure>
        </section>

        <div class="separator"></div>

        <!-- FOOD + DRINK -->
        <section class="thought-row">
          <div class="thought">
            <h3>on food</h3>
            <p>
              i don’t trust people who don’t like Jollibee.
            </p>
          </div>

          <div class="thought">
            <h3>on drink</h3>
            <p>
              pandan milk is the worst drink ever created in the history of mankind.
            </p>
          </div>
        </section>

        <div class="separator"></div>

        <!-- FAMILY -->
        <section class="image-text-section">
          <div class="thought">
            <h3>on family</h3>

            <p>
              well yes, my older sister is crazy.
            </p>

            <p>
              she once went to beat up her friend’s cheating boyfriend
              while she was pregnant.
            </p>
          </div>

          <figure class="photo-frame">
            <img
              src="/img/about-me/childhood.jpg"
              alt="Childhood photo"
            />
            <figcaption>
              before i had this many opinions.
            </figcaption>
          </figure>
        </section>

        <div class="separator"></div>

        <!-- MUSIC + MOVIES -->
        <section class="thought-row">
          <div class="thought">
            <h3>on music</h3>

            <p>
              Phùng Khánh Linh’s first album,
              <em>yesteryear</em>, is miles better than anything
              she’s put out in the past few years.
            </p>
          </div>

          <div class="thought">
            <h3>on movies</h3>

            <p>
              i find the annual mediocrity of Trấn Thành’s movies
              weirdly endearing at this point.
            </p>
          </div>
        </section>

        <div class="separator"></div>

        <!-- RELIGION -->
        <section class="religion-section">
          <h3>on religion</h3>
          <p class="lorde">Lorde.</p>
        </section>

        <div class="separator"></div>

        <!-- EDUCATION -->
        <section class="education-section">
          <div class="thought">
            <h3>on education</h3>

            <p>
              i think 7 a.m. classes are a human rights violation.
            </p>
          </div>

          <figure class="photo-frame wide-photo">
            <img
              src="/img/about-me/ftu.jpg"
              alt="FTU memories"
            />
            <figcaption>
              somehow survived them anyway.
            </figcaption>
          </figure>
        </section>

        <div class="separator"></div>

        <!-- LIFE -->
        <section class="life-section">
          <figure class="photo-frame">
            <img
              src="/img/about-me/robot.jpg"
              alt="Me with a robot"
            />
            <figcaption>
              taking my own advice very seriously.
            </figcaption>
          </figure>

          <div class="thought life-copy">
            <h3>on life</h3>

            <p class="final-line">
              take it easy. nothing is that serious.
            </p>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>

<style scoped>
/* =========================
   TYPOGRAPHY
   ========================= */

.about-page,
.about-page p,
.about-page h1,
.about-page h2,
.about-page h3,
.about-page em,
.about-page figcaption {
  font-family: "Trebuchet MS pixelated", sans-serif !important;
}

.about-page {
  width: calc(100% - 36px);
  max-width: 900px;

  margin: 0 auto;
  padding: 24px 0 38px;

  box-sizing: border-box;

  color: #000;
  font-size: 12px;
  line-height: 1.4;
}

.about-page p {
  margin: 0 0 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
}

.about-page h1 {
  margin: 0 0 2px;

  font-size: 25px;
  line-height: 1.1;
  font-weight: 400;
}

.about-page h2 {
  margin: 0 0 25px;

  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
}

.about-page h3 {
  margin: 0 0 12px;

  font-size: 16px;
  line-height: 1.2;

  font-weight: 400;
  text-decoration: underline;
}

.about-page em {
  font-style: italic;
}

/* =========================
   INTRO
   ========================= */

.intro-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 230px;

  gap: 36px;
  align-items: center;
}

.intro-copy {
  max-width: 560px;
}

/* =========================
   PHOTOS
   ========================= */

.photo-frame {
  margin: 0;
}

.photo-frame img {
  display: block;

  width: 100%;
  height: auto;

  box-sizing: border-box;

  padding: 3px;

  border: 1px solid #808080;
  background: #fff;
}

figcaption {
  margin-top: 5px;

  color: #555;
  font-size: 10px;
  line-height: 1.2;
  font-style: italic;
}

/* =========================
   THOUGHTS
   ========================= */

.thought-row {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 55px;
}

.thought {
  max-width: 390px;
}

/* =========================
   FAMILY
   ========================= */

.image-text-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 270px;

  gap: 45px;
  align-items: center;
}

/* =========================
   RELIGION
   ========================= */

.religion-section {
  min-height: 115px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lorde {
  margin: 0 !important;

  font-size: 22px !important;
}

/* =========================
   EDUCATION
   ========================= */

.education-section .thought {
  margin-bottom: 25px;
}

.wide-photo {
  width: 100%;
}

/* =========================
   LIFE
   ========================= */

.life-section {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);

  gap: 45px;
  align-items: center;
}

.life-copy {
  max-width: 400px;
}

.final-line {
  font-size: 18px !important;
  line-height: 1.35 !important;
}

/* =========================
   SEPARATOR
   ========================= */

.separator {
  height: 1px;

  margin: 30px 0;

  background: #d4d0c8;
}

/* =========================
   SMALL WINDOW
   ========================= */

@media (max-width: 700px) {
  .about-page {
    width: calc(100% - 28px);
    padding-top: 18px;
  }

  .intro-section,
  .thought-row,
  .image-text-section,
  .life-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .intro-photo,
  .image-text-section .photo-frame,
  .life-section .photo-frame {
    width: 100%;
    max-width: 310px;
  }

  .thought {
    max-width: none;
  }

  .about-page h1 {
    font-size: 21px;
  }
}

/* =========================
   ORIGINAL-NOTEPAD-LIKE SCROLLBAR
   ========================= */

.about-scroll::-webkit-scrollbar {
  width: 16px;
}

.about-scroll::-webkit-scrollbar-track {
  background: #f3f3f3;
}

.about-scroll::-webkit-scrollbar-thumb {
  background: #9a9a9a;
  border-radius: 8px;
  border: 3px solid #f3f3f3;
}

.about-scroll::-webkit-scrollbar-button:single-button {
  display: block;

  width: 16px;
  height: 16px;

  background-color: #f3f3f3;
  background-repeat: no-repeat;
  background-position: center;

  border: none;
}

/* ▲ */
.about-scroll::-webkit-scrollbar-button:single-button:vertical:decrement {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6'%3E%3Cpath d='M0 6 L4 0 L8 6 Z' fill='%23808080'/%3E%3C/svg%3E");
}

/* ▼ */
.about-scroll::-webkit-scrollbar-button:single-button:vertical:increment {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6'%3E%3Cpath d='M0 0 L4 6 L8 0 Z' fill='%23808080'/%3E%3C/svg%3E");
}

.about-scroll::-webkit-scrollbar-corner {
  background: #f3f3f3;
}
</style>
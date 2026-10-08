<script setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'

const localeStore = useLocaleStore()

const isVietnamese = computed(() => localeStore.currentLocale === 'vi')

const content = computed(() => {
  if (localeStore.currentLocale === 'vi') {
    return {
      introTitle: 'nguyễn trọng khôi',
      introSubtitle: 'nghĩ gì nói đó',
      intro:
        'tui có rất nhiều ý kiến, và nếu quen tui đủ lâu thì kiểu gì bạn cũng sẽ được nghe, mặc kệ bạn có hỏi hay không luôn',

      foodTitle: 'về đồ ăn',
      food:
        'tui không đội trời chung với những người không thích Jollibee.',

      drinkTitle: 'về đồ uống',
      drink:
        'sâm dứa sữa dở vl.',

      familyTitle: 'về gia đình',
      family1:
        'chị hai tui từng đi đánh ghen giùm nhỏ bạn mình trong lúc bả đang có bầu lun.',

      childhoodCaption:
        'dễ thương k?',

      musicTitle: 'về âm nhạc',
      musicBefore:
        'cái album đầu tay ',
      musicAlbum:
        'yesteryear',
      musicAfter:
        ' của Phùng Khánh Linh hay gấp trăm lần mấy thứ cổ phát hành trong mấy năm gần đây.',

      moviesTitle: 'về phim ảnh',
      movies:
        'giờ mà Trấn Thành ko ra phim Tết nữa chắc tui sẽ buồn lắm lun, dù phim nào cũng dở nha huhu (ý kiến riêng) ',

      religionTitle: 'về tín ngưỡng',
      religion:
        'Lorde.',

      educationTitle: 'về giáo dục',
      education:
        '7 giờ sáng mà bắt vô tiết là một hành vi vi phạm nhân quyền.',

      ftuCaption:
        'nói v chứ cũng tốt nghiệp đc r nè',

      lifeTitle: 'về cuộc đời',
      life:
        'cứ từ từ thôi. có j đâu mà căng.',

      robotCaption:
        'just keep swimming.'
    }
  }

  return {
    introTitle: 'the less than profound thoughts',
    introSubtitle: 'of nguyen trong khoi',
    intro:
      'i have a lot of opinions, and if you get to know me, i’ll probably share them even if you didn’t ask.',

    foodTitle: 'on food',
    food:
      'i don’t trust people who don’t like Jollibee.',

    drinkTitle: 'on drink',
    drink:
      'pandan milk is the worst drink ever created in the history of mankind.',

    familyTitle: 'on family',
    family1:
      'well yes, my older sister is crazy.',
    family2:
      'she once went to beat up her friend’s cheating boyfriend while she was pregnant.',

    childhoodCaption:
      'before i had this many opinions.',

    musicTitle: 'on music',
    musicBefore:
      'Phùng Khánh Linh’s first album, ',
    musicAlbum:
      'yesteryear',
    musicAfter:
      ', is miles better than anything she’s put out in the past few years.',

    moviesTitle: 'on movies',
    movies:
      'i find the annual mediocrity of Trấn Thành’s movies weirdly endearing at this point.',

    religionTitle: 'on religion',
    religion:
      'Lorde.',

    educationTitle: 'on education',
    education:
      'i think 7 a.m. classes are a human rights violation.',

    ftuCaption:
      'somehow survived them anyway.',

    lifeTitle: 'on life',
    life:
      'take it easy. nothing is that serious.',

    robotCaption:
      'taking my own advice very seriously.'
  }
})
</script>

<template>
  <div class="relative right-0 h-content-headless-toolbox overflow-hidden">
    <div
      class="about-scroll w-full h-full bg-white overflow-y-scroll overflow-x-hidden"
    >
      <main
  class="about-page"
  :class="{ 'about-page-vi': isVietnamese }"
>

        <!-- INTRO -->
        <section class="intro-section">
          <div class="intro-copy">
            <h1>{{ content.introTitle }}</h1>
            <h2>{{ content.introSubtitle }}</h2>

            <p>
              {{ content.intro }}
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
            <h3>{{ content.foodTitle }}</h3>
            <p>
              {{ content.food }}
            </p>
          </div>

          <div class="thought">
            <h3>{{ content.drinkTitle }}</h3>
            <p>
              {{ content.drink }}
            </p>
          </div>
        </section>

        <div class="separator"></div>

        <!-- FAMILY -->
        <section class="image-text-section">
          <div class="thought">
            <h3>{{ content.familyTitle }}</h3>

            <p>
              {{ content.family1 }}
            </p>

            <p>
              {{ content.family2 }}
            </p>
          </div>

          <figure class="photo-frame">
            <img
              src="/img/about-me/childhood.jpg"
              alt="Childhood photo"
            />
            <figcaption>
              {{ content.childhoodCaption }}
            </figcaption>
          </figure>
        </section>

        <div class="separator"></div>

        <!-- MUSIC + MOVIES -->
        <section class="thought-row">
          <div class="thought">
            <h3>{{ content.musicTitle }}</h3>

            <p>
              {{ content.musicBefore }}
              <em>{{ content.musicAlbum }}</em>{{ content.musicAfter }}
            </p>
          </div>

          <div class="thought">
            <h3>{{ content.moviesTitle }}</h3>

            <p>
              {{ content.movies }}
            </p>
          </div>
        </section>

        <div class="separator"></div>

        <!-- RELIGION -->
        <section class="religion-section">
          <h3>{{ content.religionTitle }}</h3>
          <p class="lorde">{{ content.religion }}</p>
        </section>

        <div class="separator"></div>

        <!-- EDUCATION -->
        <section class="education-section">
          <div class="thought">
            <h3>{{ content.educationTitle }}</h3>

            <p>
              {{ content.education }}
            </p>
          </div>

          <figure class="photo-frame wide-photo">
            <img
              src="/img/about-me/ftu.jpg"
              alt="FTU memories"
            />
            <figcaption>
              {{ content.ftuCaption }}
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
              {{ content.robotCaption }}
            </figcaption>
          </figure>

          <div class="thought life-copy">
            <h3>{{ content.lifeTitle }}</h3>

            <p class="final-line">
              {{ content.life }}
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

.about-page.about-page-vi,
.about-page.about-page-vi p,
.about-page.about-page-vi h1,
.about-page.about-page-vi h2,
.about-page.about-page-vi h3,
.about-page.about-page-vi em,
.about-page.about-page-vi figcaption {
  font-family: Tahoma, sans-serif !important;
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

.about-scroll::-webkit-scrollbar-button:single-button:vertical:decrement {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6'%3E%3Cpath d='M0 6 L4 0 L8 6 Z' fill='%23808080'/%3E%3C/svg%3E");
}

.about-scroll::-webkit-scrollbar-button:single-button:vertical:increment {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6'%3E%3Cpath d='M0 0 L4 6 L8 0 Z' fill='%23808080'/%3E%3C/svg%3E");
}

.about-scroll::-webkit-scrollbar-corner {
  background: #f3f3f3;
}
</style>
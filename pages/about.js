import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-10 text-center text-vermilion">
        About Me - Yasuhiro Maeda
      </h1>

      {/* スライドショー（縦写真対応） */}
      <div className="max-w-md mx-auto mb-10">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={3000}
        >
          {[
            "IMG_7524.jpeg",
            "IMG_9175.jpeg",
            "IMG_5137.jpeg",
            "IMG_2772.jpeg",
            "IMG_2319.jpeg",
          ].map((img, i) => (
            <div key={i}>
              <img
                src={`/${img}`}
                alt={`Photo ${i + 1}`}
                className="h-[400px] object-contain mx-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-vermilion">Who I Am</h2>
          <p>
            My name is <strong>Yasuhiro Maeda</strong>, born in 1999 in Osaka, Japan.
            I studied Commerce at <strong>Doshisha University</strong> in Kyoto and
            spent one year studying Business at <strong>Aix-Marseille University</strong> in France as an exchange student.
          </p>
          <p>
            After graduating, I worked at <strong>Rakuten Group, Inc.</strong> as an advertising sales consultant, supporting national brands with digital marketing.
          </p>
          <p>
            I am currently living in <strong>Glasgow, Scotland</strong>, working in IT sales for a local company.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-vermilion">My Interests</h2>
          <ul className="list-disc list-inside">
            <li>Traveling the world</li>
            <li>Exploring Japanese cuisine</li>
            <li>Cultural exchange & communication</li>
            <li>Dream: Open a Japanese restaurant abroad</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-vermilion">Why I Started Ask Maeda-san</h2>
          <p>
            I founded Ask Maeda-san to help more people around the world discover and experience the beauty of Japan — from its unique products and food to its culture and people.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center text-vermilion">Follow Me</h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/cooking_japanese_in_the_uk?igsh=dzd6Y2d0ODg5b3Jq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-orange-50 hover:bg-orange-100 text-vermilion text-center font-semibold py-3 px-4 rounded-lg shadow transition duration-300"
            >
              Instagram: @cooking_japanese_in_the_uk
            </a>

            <a
              href="https://www.tiktok.com/@maedayasuhiro0?_t=ZN-8uz0CeFyGeM&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 hover:bg-gray-800 text-white text-center font-semibold py-3 px-4 rounded-lg shadow transition duration-300"
            >
              TikTok: @maedayasuhiro0
            </a>

            <a
              href="https://youtube.com/@yasuhiromaeda_uk?si=uyLihPeQJLFNT_BN"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-100 hover:bg-red-200 text-red-700 text-center font-semibold py-3 px-4 rounded-lg shadow transition duration-300"
            >
              YouTube: @yasuhiromaeda_uk
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Container from "./Container";
import Image from "next/image";
import bannerImg1 from "public/bannerImg/banner1.jpg";
import bannerImg2 from "public/bannerImg/banner2.jpg";
import bannerImg3 from "public/bannerImg/banner3.jpg";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

// import bannerImg4 from 'public/bannerImg/banner4.jpg'

const Banner = () => {
  return (
    <div className="bg-primeColor w-full rounded-bl-3xl rounded-br-3xl relative px-4">
      <Container>
        <div className="text-white grid md:grid-cols-2 gap-20 place-items-center">
          {/* left-side */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold ">
                無料で使えます。
              </h1>
            </FadeIn>

            <FadeIn>
              <p className="text-sm tracking-wide xl:gap-10">
                煩わしいレポート作成作業にさよならを告げませんか？
                「レポートアプリ」があなたの仕事を劇的に効率化します。
                <br />
                高度な技術やデザインは不要。緒缶的なインターフェイスで、
                わずか数分でプロフェッショナルなレポートを作成できます。
                <br />
                事前に設計されたテンプレートを使用して、様々な種類のレポートを簡単に作成できます。
                売り上げ分析、プレゼンテーション、プロジェクト進捗など、あらゆる用途に対応してます。
              </p>
            </FadeIn>

            <FadeIn>
              <div className="w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                <input
                  type="text"
                  placeholder="メールアドレス"
                  className="w-full h-12 border-[1px] border-gray-300 rounded-xl text-base text-gray-600
                placeholder:tracking-wider px-4 outline-none hover:border-primeColor duration-300 focus-visible:border-primeColor"
                />
                <button className="w-full h-12 rounded-xl bg-black text-white font-medium hover:bg-darkBlue duration-300 cursor-pointer ">
                  無料で試す
                </button>
              </div>
            </FadeIn>
          </div>

          {/* right-side */}
          <div className="w-full relative flex justify-center items-center gap-6 ">
            <motion.div
              initial={{ y: 200 }} //初期
              animate={{ y: 0 }} //最後
              transition={{ duration: 1 }}
            >
              <Image
                src={bannerImg1}
                alt="bannerImg1"
                className="w-52 rounded-2xl object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-7">
              <motion.div
                initial={{ y: 300 }} //初期
                animate={{ y: 0 }} //最後
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={bannerImg2}
                  alt="bannerImg2"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }} //初期
                animate={{ y: 0 }} //最後
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={bannerImg3}
                  alt="bannerImg3"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

// place-items-centerクラスは、align-itemsとjustify-itemsの両方をcenterに設定します。

// focus-visibleは、CSSの:focus-visible疑似クラスに基づいています。この疑似クラスは、ユーザーがキーボードを使用して要素にフォーカスしたときにマッチします。これは、マウスやタッチ操作によるフォーカスとは異なり、主にアクセシビリティのための機能です。

// Tailwind CSSのoutline-noneクラスは、HTML要素のアウトライン（通常、フォーカスされたときにブラウザによって自動的に適用される境界線や輪郭線）を削除するために使用されます。このクラスはCSSのoutline: none;プロパティに相当します。

// object-coverは、コンテンツ（通常は画像やビデオ）をコンテナの全体にフィットさせるようにしますが、その際にコンテンツの縦横比を維持します。
// 必要に応じて、コンテンツの一部を切り取ることで、コンテナのサイズに合わせて最適に表示されます。

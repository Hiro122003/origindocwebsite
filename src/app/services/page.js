"use client";

import React from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import FadeIn from "../components/FadeIn";

const ServicesPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6 p-8">
        <FadeIn>
          <Title title="簡単なレポートアプリです。"></Title>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="max-w-2xl">
              シンプルなレポート作成：
              高度な技術やデザインスキルが不要。直感的なインターフェースで、
              わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
            <p className="max-w-2xl">
              データー可視化ツール：
              グラフやチャートを簡単に追加し、データを鮮やかに可視化。
              インサイトを素早く理解しましょう。インサイトを素早く理解しましょう。
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="max-w-2xl">
              シンプルなレポート作成：
              高度な技術やデザインスキルが不要。直感的なインターフェースで、
              わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
            <p className="max-w-2xl">
              データー可視化ツール：
              グラフやチャートを簡単に追加し、データを鮮やかに可視化。
              インサイトを素早く理解しましょう。インサイトを素早く理解しましょう。
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};

export default ServicesPage;

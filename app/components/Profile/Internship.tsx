"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const Internship = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold mt-4">Internship</div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="みずほ工業株式会社">
          <div className="text-xl font-semibold">概要:</div>
          <p>
            高校生という建築にかかわる仕事に関して全く知らなかった段階において、多くの現場を見学し、積算などの業務にも少しであるが経験を積むことができた。
          </p>
          <div className="text-xl mt-5 font-semibold">苦労した点:</div>
          <p>
            初めて、建築にかかわる業務を肌で感じ、多くの人が携わって完成される建築物を作るという大変さを感じ、工程の管理や金額の管理を実際にして苦労した。
          </p>
          <div className="text-xl mt-5 font-semibold">得られたもの:</div>
          <p>
            この経験を通じて、人々が普段使用している建築物には多くの人が携わり、その結晶として成り立っていることを知れたことが一番大きな得られたものである。
          </p>
          <div className="text-xl mt-5 font-semibold">使用技術:</div>
          
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="株式会社五井建築研究所">
          <div className="text-xl font-semibold">概要:</div>
          <p>
            5日間にわたり、五井建築研究所が設計した学校建築の模型を製作するとともに、最後の1日に実際に施工が進行している現場に見学し、監理者として現場で行う業務を見学した。
          </p>
          <div className="text-xl mt-5 font-semibold">苦労した点:</div>
          <p>
            学校で製作する模型とは違い、お客さんのために制作する模型の精密さや締め切りとの兼ね合いを見ながら業務を行うことが一番苦労した点である。
          </p>
          <div className="text-xl mt-5 font-semibold">得られたもの:</div>
          <p>
            苦労した点を解決しながら作業を行っていくことで組織設計事務所で働くことのやりがいを知れたことが一番得られたものである。
          </p>
          <div className="text-xl mt-5 font-semibold">使用技術:</div>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 1" title="金沢計画研究所">
          <div className="text-xl font-semibold">概要:</div>
          <p>
            今迄のインターンでは経験することができなかった３Ⅾモデルの制作を2週間ほど学業と並行しながら行った。
          </p>
          <div className="text-xl mt-5 font-semibold">苦労した点:</div>
          <p>
            SketchUpで３Ⅾモデルを製作したが、新しいツールを使って複雑な屋根を制作したがそのツールを使いこなすまで時間がかかった点が苦労した点である。
          </p>
          <div className="text-xl mt-5 font-semibold">得られたもの:</div>
          <p>
          SketchUpでお客様に提案するためのモデルを制作する時間との兼ね合いを考えながら作業する業務のスピード感を考えて作業する体験をできたことが一番得られたものである。
          </p>
          <div className="text-xl mt-5 font-semibold">使用技術:</div>
          <p>
          SketchUp
          </p>
        </AccordionItem>
        
      </Accordion>
    </div>
  );
};

export default Internship;

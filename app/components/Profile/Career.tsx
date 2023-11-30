"use client";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";

const Career = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold">Career</div>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" className="mt-3">
          <Tab key="graduate" title="大学院">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>
                  金沢工業大学大学院&nbsp;建築学専攻&nbsp;2023年4月〜2025年3月(卒業予定)
                </div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  大学院では建築学専攻の蜂谷俊雄研究室に所属しており、そこで研究をしています。
                  研究内容は、現状建築と自然との関係性のあり方であったり、奥性について研究しています。
                  下の写真が研究室の紹介になります。
                </div>
                <Image
                  alt="Card background"
                  width={300}
                  src="intoroduce.jpg"
                  className="mt-3"
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="university" title="大学">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>
                  金沢工業大学&nbsp;建築学部建築学科&nbsp;建築デザインコース&nbsp;2019年4月〜2023年3月
                </div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  大学では設計や、構造、設備、数学、英語などの幅広い知識を学ぶとともに1・2級建築士の知識を学んだ。
                  <br />
                  また、2つの飲食店でのアルバイトを4年間続けてバイトリーダを経験し、時々溶接や寺業務のバイトなど様々な経験を積んだ。
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="high" title="高校">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>
                  金沢市立工業高等学校&nbsp;建築科&nbsp;2016年4月〜2019年3月
                </div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  高校では建築の基礎を多く学び、部活では写真部で活動して美しい景色を楽しみながら学校生活を過ごした。
                  <Image
                    alt="Card background"
                    width={300}
                    src="/picture.jpg"
                    className="mt-3"
                  />
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="junior" title="趣味">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">趣味</div>
                <div>サッカー、バイク、筋トレ、旅行&nbsp;</div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  中学ではサッカーのクラブチームに所属し、週6日で練習に励んだ。大学に入学してから中型及び大型のバイク免許を取得してバイクを乗りながら風景を楽しむ趣味ができた。
                  筋トレは一番自分の目で見て成果がわかるので一回一回のトレーニングが楽しく、時間があれば取り組んでいる。旅行は建築を学ぶなかで様々な件に弾丸旅行に行く楽しさを知り、コロナ明けからよく旅行に行っている。
                  
                </div>
                <Image
                  alt="Card background"
                  width={300}
                  src="hobby12.png"
                  className="mt-3"
                />
                  
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Career;

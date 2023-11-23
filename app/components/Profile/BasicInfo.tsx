import React from "react";
import { Image } from "@nextui-org/react";

const BasicInfo = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        {/* Profile Section Title */}
        <div className="text-3xl font-bold">Profile</div>

        {/* Profile Content */}
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Profile Image */}
          <Image
            alt="Profile"
            className="object-cover rounded-full" // Adjust the size as needed
            src="/icon.jpg"
            width={630}
          />

          {/* Profile Description */}
          <div className="text-lg leading-relaxed">
            <p>
              &emsp;金沢工業大学大学院建築学専攻1年の小島怜真です。現在、私は
              <a
                className="text-primary hover:underline" // Styling for the link
                href="http://www.li-nlab.org/?page_id=156"
                target="_blank"
                rel="noopener noreferrer"
              >
                意匠設計を基本とする蜂谷俊雄研究室
              </a>
              に所属しています。この研究室では主に設計に関する研究を行っています。
              私は高校から建築を学び始め、建築の面白さに気づき、さらなる建築に関する知識を増やすために大学に進学した。大学では高校以上の建築に関する知識を多く学び、チャレンジ精神をもって
              今までしたことのない設計に挑戦し続けてきた。
            
          
            </p>
            <p>
              &emsp;私の長所は計画性を持って行動し、最後まで努力し続ける点であり、この長所によって高校・大学でも生かして多くの課題に効率よく取り組むことができた。また良い評価を得ることができた。
              計画性をもって最後まで努力し続ける長所によって時間を有効に使うことができ、課題以外にも資格取得に対して勉強する時間も生み出して取り組んだ。
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

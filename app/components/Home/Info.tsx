import React from "react";
import { Image } from "@nextui-org/react";
import { PiStudentBold } from "react-icons/pi";
import { BiMap } from "react-icons/bi";
const Info = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="text-3xl font-bold">Basic Information</div>
        <div className="flex justify-center">
          <div className="max-w-3xl w-full rounded-lg overflow-hidden my-10 p-6 space-y-4">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-full"
                src="/icon.jpg"
                width={250}
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-4xl font-semibold text-foregrand">小島怜真</p>
            </div>

            <div className="mt-6 text-center space-y-2">
              <div className="flex justify-center items-center text-foregrand">
                <BiMap className="text-blue-500" size={25} />{" "}
                <span className="ml-2 text-xl">石川県</span>
              </div>
              <div className="flex justify-center items-center text-foregrand">
                <PiStudentBold className="text-green-500" size={25} />{" "}
                <span className="ml-2 text-xl">金沢工業大学大学院</span>
              </div>

              <hr className="my-6 mt-4" />

              <div className="text-foregrand mb-4">
                <p className="text-lg text-center">
                  はじめまして。金沢工業大学大学院の学生で、建築学専攻の蜂谷俊雄研究室に所属しています。
                  建築設計および意匠設計に興味があり、その設計について研究を行っています。
                  <br />
                  地域社会に貢献しながら設計した建築物が人々にとってシンボルになる建築士を目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import React from "react";

import Link from "next/link";

const Work = () => {
  const list = [
    {
      id: 1,
      title: "カフェ課題(学内2位)",
      img: "/cafeicon123.png",
    },
    {
      id: 2,
      title: "幼稚園課題(学内5位)",
      img: "/childrenicon123.png",
    },
    {
      id: 3,
      title: "ゲストハウス課題(学内1位)",
      img: "/guesthouseicon123.png",
    },
    {
      id: 4,
      title: "シティプラザ課題(学内1位)",
      img: "/cityplazaicon123.png",
    },
    {
      id: 5,
      title: "卒業設計",
      img: "/rakusuikyouivon123.png",
    },
    {
      id: 6,
      title: "大学院設計課題",
      img: "/mojyuruicon123.png",
    },
    
  ];

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-4">
        {list.map((item, index) => (
          <Link href={`/works/${item.id}`} key={index}>
            <Card
              shadow="sm"
              key={index}
              isPressable
              
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-large justify-between">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Work;
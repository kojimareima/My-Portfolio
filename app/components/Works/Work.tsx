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
      title: "価格監査システム",
      img: "/ECPAS.png",
    },
    {
      id: 2,
      title: "Nex: ゲーム専用掲示板",
      img: "/nex.png",
    },
    {
      id: 3,
      title: "ECサイト構築",
      img: "/ECsite.png",
    },
    {
      id: 4,
      title: "Weather Remind Tool",
      img: "/WhetherRemind.png",
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
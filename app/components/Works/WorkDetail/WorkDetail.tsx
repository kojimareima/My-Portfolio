"use client";
import {
  Card,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import data from "@/app/components/Works/WorkDetail/WorkDetail.json";

interface ImageModalProps {
  image: string;
}

const WorkDetail = ({ params }: { params: { id: string } }) => {
  const filteredData = data.filter((item) => item.id === params.id);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  const ImageModal: React.FC<ImageModalProps> = ({ image }) => (
    <Modal isOpen={isOpen} onClose={onOpenChange} backdrop="blur" size="4xl">
      <ModalContent>
        <ModalBody>
          <Image
            shadow="sm"
            radius="lg"
            width="98%"
            alt={work.name}
            className="w-full object-cover"
            src={image}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  const handleCardClick = (image: string) => {
    setSelectedImage(image);
    onOpen();
  };

  const renderActiveModal = () => {
    if (selectedImage) {
      return <ImageModal image={selectedImage} />;
    }
    return null;
  };

  if (filteredData.length === 0) {
    return <div>指定されたIDの作品が見つかりません。</div>;
  }

  const work = filteredData[0];

  return (
    <div className="m-4">
      <div>
        <div className="text-3xl mt-4 font-semibold">{work.name}</div>
        <div>{work.description}</div>
      </div>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 mt-4">
        {work.images.map((image, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => handleCardClick(image)}
          >
            <Image
              removeWrapper
              alt={work.name}
              src={image}
              className="w-full h-full"
            />
          </Card>
        ))}
      </div>
      {renderActiveModal()}
    </div>
  );
};

export default WorkDetail;

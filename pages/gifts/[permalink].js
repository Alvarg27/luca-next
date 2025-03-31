import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { RiArrowLeftLine } from "react-icons/ri";
import { FaWineBottle, FaGlassWhiskey } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";
import gifts from '@/data/gifts';
import Form from "@/components/Form/Form";

const GiftPage = () => {
  const router = useRouter();
  const [gift, setGift] = useState(null);

  useEffect(() => {
    if (!router?.query?.permalink) {
      return;
    }
    
    const result = gifts.find((x) => x.permalink === router.query.permalink);
    
    if (!result) {
      console.log("Gift not found");
      router.push("/404");
      return;
    }
    
    setGift(result);
  }, [router.query]);

  if (!gift) {
    return (
      <div className="pt-[70px] flex justify-center items-center h-screen">
        <div className="animate-pulse">Cargando...</div>
      </div>
    );
  }

  // Check if there's a missing image
  const hasImage = gift.file && gift.file.length > 0;

  return (
    <div className="pt-[70px] mx-auto mb-10 relative w-full">
      <div className="max-w-[1200px] mx-auto w-full rounded-2xl relative">
        <div className="h-[400px] relative bg-gray-200 rounded-2xl">
          {hasImage ? (
            <Image 
              src={gift.file} 
              alt={gift.title} 
              fill 
              className="object-cover rounded-2xl"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-gray-500 font-alga">Imagen no disponible</p>
            </div>
          )}
          <div
            onClick={() => router.push(`/Gifts`)}
            className="z-[3] h-[40px] px-2 cursor-pointer rounded-full absolute top-2 left-2 text-sm flex items-center justify-center shadow-md text-gray-500 bg-gray-200"
          >
            <RiArrowLeftLine />
            <p>Volver</p>
          </div>
        </div>
      </div>
      
      <div className="w-[95%] max-w-[1200px] mx-auto mt-8">
        <div className="w-full flex flex-col">
          <div className="w-full md:px-6 flex flex-col justify-center">
            <h1 className="text-4xl font-monument">{gift.title}</h1>
            
            {gift.description && (
              <div className="mt-4">
                <p className="font-alga text-gray-500 text-xl">
                  {gift.description}
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Characteristics Section */}
              {gift.characteristics && gift.characteristics.length > 0 && (
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-monument mb-4">Características</h2>
                  <ul className="list-disc pl-5 font-alga text-gray-600 text-xl space-y-2">
                    {gift.characteristics.map((char, index) => (
                      <li key={index}>{char}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Options Section */}
              {gift.options && Object.keys(gift.options).length > 0 && (
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-monument mb-4">Opciones</h2>
                  
                  {/* Bottle Options */}
                  {gift.options.bottle && gift.options.bottle.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <FaWineBottle className="text-teal-500 mr-2" />
                        <h3 className="text-xl font-monument">Opciones de Botella</h3>
                      </div>
                      <ul className="list-disc pl-5 font-alga text-gray-600 text-xl space-y-1">
                        {gift.options.bottle.map((bottle, index) => (
                          <li key={index}>{bottle}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Snack Options */}
                  {gift.options.snack && gift.options.snack.length > 0 && (
                    <div>
                      <div className="flex items-center mb-2">
                        <GiPopcorn className="text-teal-500 mr-2" />
                        <h3 className="text-xl font-monument">Opciones de Snacks</h3>
                      </div>
                      <ul className="list-disc pl-5 font-alga text-gray-600 text-xl space-y-1">
                        {gift.options.snack.map((snack, index) => (
                          <li key={index}>{snack}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Any other option types can be added here with similar pattern */}
                </div>
              )}
            </div>
            <div className="mt-10 lg:mx-72">
            <Form/>
            </div>
            
            {/* Call to Action Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftPage;
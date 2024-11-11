import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className="font-one pt-[120px] pb-6  text-white">
      <div className="font-two pb-6">
        <p
          className="text-4xl container md:text-6xl lg:text-8xl text-white text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          The Menu
        </p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 text-2xl text-[#Faa500]">
        {/* Panzerotteria Section */}
        <div data-aos="fade-right">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">PANZEROTTERIA</p>
            <Image
              src="/zxc.png"
              alt="Panzerotteria Icon"
              width={70}
              height={70}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Classico</p>
              <p>2,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Classico No Lattosio</p>
              <p>2,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Capperi e Pepe</p>
              <p>3,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Carne</p>
              <p>3,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Panza Burger</p>
              <p>4,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Braciola</p>
              <p>4,50 €</p>
            </div>
          </div>
        </div>

        {/* I Classici Section */}
        <div data-aos="fade-left">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">I Classici</p>
            <Image
              src="/hoddog.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Hot Dog</p>
              <p>3,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Cotoletta di Pollo</p>
              <p>6,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Porchetta</p>
              <p>7,00 €</p>
            </div>
          </div>
        </div>

        {/* Rosticceria Section */}
        <div data-aos="fade-right">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">ROSTICCERIA</p>
            <Image
              src="/sect_two111.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            {/* Add each item in the Rosticceria section here */}
            <div className="flex justify-between text-white">
              <p>Crocche di Patate</p>
              <p>1,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Arancino</p>
              <p>1.50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Flauto di Wurstel</p>
              <p>2.50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Nuggets 6 pz</p>
              <p>3.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Sgagliozze 10 pz</p>
              <p>3.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Pop Chicken 10 pz</p>
              <p>3.50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Medallion</p>
              <p>5.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Alette di Pollo 6 p.m</p>
              <p>5.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Cono di Polpette</p>
              <p>6.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Cono Fritto di Mare</p>
              <p>11.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Box Sfiziosita</p>
              <p>11.00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Patatine Fritte</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Vaschetta</p>
              <p>2.50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Cono grande</p>
              <p>5.00 €</p>
            </div>
          </div>
        </div>

        {/* Hamburgeria Section */}
        <div data-aos="fade-left">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">Hamburgeria</p>
            <Image
              src="/hamburger.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Miami</p>
              <p>7,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>San Francisco</p>
              <p>8,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Las Vegas</p>
              <p>8,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Vegano</p>
              <p>9,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Chicago</p>
              <p>11,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>New York</p>
              <p>12,00 €</p>
            </div>
          </div>
        </div>

        {/* Insalate Section */}
        <div data-aos="fade-right">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">Insalate</p>
            <Image
              src="/asdasd.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Classica</p>
              <p>5,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Italiana</p>
              <p>7,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Bufala</p>
              <p>8,50 €</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">Piadineria</p>
            <Image
              src="/steaktaco-1-1.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Classica</p>
              <p>6,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Tirolese</p>
              <p>6,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Pollo</p>
              <p>7,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Bresaola</p>
              <p>7,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Pugliese</p>
              <p>7,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Hamburgher</p>
              <p>7,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Porchetta</p>
              <p>8,00 €</p>
            </div>
          </div>
        </div>

        {/* Bevande Section */}
        <div data-aos="fade-right">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">Bevande</p>
            <Image
              src="/pivo.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Acqua Naturale/Frizzante</p>
              <p>1,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Chino</p>
              <p>1,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Lemon Soda</p>
              <p>1,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Aranciata</p>
              <p>2,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Coca Cola</p>
              <p>2,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Sprite</p>
              <p>2,00 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>The Limone/Pesca</p>
              <p>2,00 €</p>
            </div>
            {/* Add remaining items for Bevande */}
          </div>
        </div>

        {/* Birra Section */}
        <div data-aos="fade-left">
          <div className="flex items-center justify-between mb-6">
            <p className="text-5xl font-bold text-[#Faa500]">Birra</p>
            <Image
              src="/pivo.png"
              alt="Panzerotteria Icon"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Peroni</p>
              <p>1,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Nastro Azzurro</p>
              <p>2,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Heineken</p>
              <p>2,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Corona</p>
              <p>3,50 €</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Tennet&#39;s</p>
              <p>3,50 €</p>
            </div>
            {/* Add remaining items for Birra */}
          </div>
        </div>
      </div>
    </div>
  );
}

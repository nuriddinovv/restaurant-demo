import React from "react";
import Card from "../../components/Card";
import { menuInterface } from "../../components/interface";

export default function Menu() {
  const menuData: menuInterface[] = [
    {
      title: "TRANCIO DI PIZZA - A DeMà",
      price: "23",
      desc: "A delicious variety of pizza baked in large rectangular trays originally from Rome, Italy.",
      drinks: true,
    },
    {
      title: "SLICE PIZZA WITH GOURMET TOPPINGS",
      price: "25-35",
      desc: "A delicious variety of pizza baked in large rectangular trays originally from Rome, Italy.",
      drinks: true,
    },
    {
      title: "PARMIGIANA DI MELANSANA - EGGPLANT PARMIGIANA",
      price: "30",
      desc: "A pasta-less Vegetarian lasagna made with thin slices of eggplant instead of pasta. This dish is undoubtedly a low-carb option layered with tomato sauce, fresh basil, and topped with Italian cheese.",
      drinks: true,
    },
    {
      title: "SPEZZATIΝΟ DI CARNE MEAT STEW",
      price: "35",
      desc: "This hearty Italian beef stew dish is enriched with the flavours of rosemary, sage and savoury pancetta.",
      drinks: true,
    },
    {
      title: "ARANCINI",
      price: "28",
      desc: "Italian favourite dish consists of small rice balls stuffed with a savoury filling, coated in breadcrumbs, and fried.",
      drinks: false,
    },
    {
      title: "RAGU DI BRACIOLA",
      price: "35",
      desc: "Ragu has a tomato- based sauce beef and is often slow-simmered with aromatic herbs served on Italian bread.",
      drinks: false,
    },
    {
      title: "PANZEROTTO AL FORNO",
      price: "28",
      desc: "As an alternative to fried panzerotti, baked panzerotti are delicious yeast dough bundles filled with mozzarella fior di latte, tomato sauce and oregano.",
      drinks: false,
    },
    {
      title: "PANZEROTT O FRITTY",
      price: "28",
      desc: "A savory which resembles a small calzone, both in shape and dough used for its preparation. A fried turnover rather than an oven-baked pastry filled with Italian sauce and cheese.",
      drinks: true,
    },
    {
      title: "BUCATINI AL FORNO",
      price: "32",
      desc: "The Neapolitan pie is prepared with a baking dish filled with sliced aubergines and.",
      drinks: true,
    },
    {
      title: "FOCACCIA BARESE",
      price: "20",
      desc: "Focaccia made with mashed potatoes has a very tender texture and a subtle and delicious taste topped with olives and cherry tomatoes.",
      drinks: true,
    },
    {
      title: "LASAGNA AL FORNO",
      price: "35",
      desc: "In Italian, 'Pasta al Forno' means pasta from the oven and is a simplified version of the Italian classic everyone knows as Lasagna.",
      drinks: true,
    },
    {
      title: "GNOCCHI AL FORNO",
      price: "35",
      desc: "This gnocchi al forno is made from soft pillowy gnocchi, roasted cherry tomato sauce, gooey melted mozzarella and nutty parmesan baked together until the cheese oozes and the sauce sizzles.",
      drinks: true,
    },
    {
      title: "ORECCHIETTE CON LA BRACIOLA",
      price: "35",
      desc: 'The orecchiette with chops ragù is one of the most popular and famous dishes of the Bari culinary tradition. The chops (in dialect "brasciole") is slow- cooked rolls of beef with a filling of parsley, garlic, and pecorino, in tomato sauce.',
      drinks: true,
    },
  ];

  return (
    <div className="">
      <div
        className="font-two bg-gray-200 pt-[120px] pb-6"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url("/menuText.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className=" text-4xl md:text-6xl lg:text-9xl text-white">The Menu</p>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/bgMenu.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=""
      >
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 container">
          {menuData.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              price={item.price}
              desc={item.desc}
              drinks={item.drinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

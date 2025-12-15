import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "gula-pasir",
    name: "Gula Pasir",
    category: "Sembako",
    description: "Gula pasir putih dan kuning berkualitas, tersedia dalam kemasan sak 50kg dan 25kg.",
    image: "/images/products/gula-pasir.png",
    rating: 5,
    priceList: [
      {
        groupName: "GULA 50KG",
        items: [
          { name: "Gula Pasir GMP Putih", price: "Rp. 530.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir GMP Kuning", price: "Rp. 510.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir SUJ Putih", price: "Rp. 510.000.-/ Sak 50 Kg" },
          { name: "Gula Pasir Gulaku Putih", price: "Rp. 530.000.-/ Sak 50 Kg" },
          { name: "Gula MSI Medan Putih", price: "Rp. 495.000.-/ Sak 50 Kg" },
        ]
      },
      {
        groupName: "GULA 25KG",
        items: [
          { name: "Gula Pasir GMP Putih", price: "Rp. 330.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir GMP Kuning", price: "Rp. 320.000.-/ Sak 25 Kg" },
          { name: "Gula Pasir Gulaku Putih", price: "Rp. 330.000.-/ Sak 25 Kg" },
        ]
      }
    ]
  },
  {
    id: "beras-premium",
    name: "Beras Premium",
    category: "Beras",
    description: "Beras kualitas premium, medium, pulen, dan wangi dari berbagai merek terpercaya.",
    image: "/images/products/beras.png",
    rating: 5,
    priceList: [
      {
        groupName: "Merek Beras (50KG)",
        items: [
          { name: "Beras Gucimas Solo", price: "Rp 488.750" },
          { name: "Beras IR Cap Jago Pelung", price: "Rp 500.000" },
          { name: "Beras Cap Topi Koki", price: "Rp 540.000" },
          { name: "Beras Setra Ramos BMW Cianjur", price: "Rp 550.000" },
          { name: "Beras Pandan Wangi", price: "Rp 475.000" },
        ]
      },
      {
        groupName: "Merek Beras (25KG)",
        items: [
          { name: "Beras Cap Duren", price: "Rp 195.000" },
          { name: "Beras Cap Raja Udang", price: "Rp 200.000" },
          { name: "Beras Cap Rojo Lele", price: "Rp 180.000" },
        ]
      },
       {
        groupName: "Merek Beras (5KG)",
        items: [
          { name: "Beras Cap Bunga Medium", price: "Rp. 47.300" },
          { name: "Beras Sania", price: "Rp. 58.200" },
          { name: "Beras Raja Udang", price: "Rp. 52.000" },
        ]
      }
    ]
  },
  {
    id: "minyak-goreng",
    name: "Minyak Goreng",
    category: "Minyak",
    description: "Minyak goreng berbagai merek terpercaya (Bimoli, Sunco, Tropical, dll) dengan harga grosir.",
    image: "/images/products/minyak.png",
    rating: 5,
    priceList: [
      {
        groupName: "Minyak Bimoli",
        items: [
          { name: "Bimoli Botol 1 Liter (Isi 12)", price: "Rp. 140.500/Karton" },
          { name: "Bimoli Klasik Pouch 2 Liter (Isi 6)", price: "Rp. 150.777/Karton" },
          { name: "Bimoli Jerigen 18 Liter", price: "Rp. 230.000" },
        ]
      },
      {
        groupName: "Minyak Sunco",
        items: [
          { name: "Sunco Pouch 1 Liter (Isi 12)", price: "Rp. 135.500/Karton" },
          { name: "Sunco Pouch 2 Liter (Isi 6)", price: "Rp. 133.800/Karton" },
        ]
      },
      {
        groupName: "Minyak Kita",
        items: [
          { name: "Minyak Kita 1 Liter (Isi 12)", price: "Rp. 130.000/Dus" },
          { name: "Minyak Kita 2 Liter (Isi 6)", price: "Rp. 132.000/Dus" },
        ]
      }
    ]
  },
  {
    id: "tepung-terigu",
    name: "Tepung Terigu",
    category: "Tepung",
    description: "Tepung terigu untuk roti, kue, gorengan, dan kebutuhan usaha kuliner.",
    image: "/images/products/tepung.png",
    rating: 5,
    priceList: [
      {
        groupName: "Tepung Karungan",
        items: [
          { name: "Pita Merah / Karung", price: "Rp. 135.000" },
          { name: "Segitiga Biru / Karung", price: "Rp. 132.000" },
          { name: "Cakra Kembar / Karung", price: "Rp. 145.000" },
        ]
      },
      {
        groupName: "Tepung Kemasan 1kg",
        items: [
          { name: "Segitiga Biru 1kg", price: "Rp. 9.900/Kg" },
          { name: "Cakra Kembar 1kg", price: "Rp. 9.100/Kg" },
        ]
      }
    ]
  },
  {
    id: "mie-instan-sedap",
    name: "Mie Sedap Instan",
    category: "Mie",
    description: "Mie Sedaap berbagai varian rasa dengan harga grosir per dus.",
    image: "/images/products/sedap.png",
    rating: 5,
    priceList: [
 
      {
        groupName: "Mie Sedaap",
        items: [
          { name: "Mie Sedaap Goreng", price: "Rp. 78.500 / Karton" },
          { name: "Mie Sedaap Soto", price: "Rp. 64.000 / Karton" },
        ]
      }
    ]
  },
    {
    id: "gas-lpg",
    name: "Gas LPG",
    category: "Gas",
    description: "Gas LPG 3 kg, 5.5 kg, dan 12 kg untuk agen dan pangkalan.",
    image: "/images/products/gas.png",
    rating: 5,
    priceList: [
      {
        groupName: "Tabung Gas 3KG",
        items: [
          { name: "12 Biji", price: "Rp 1.000.000" },
          { name: "50 Biji", price: "Rp 4.000.000" },
          { name: "100 Biji", price: "Rp 8.000.000" },
        ]
      },
      {
        groupName: "Tabung Gas 12KG",
        items: [
          { name: "5 Biji", price: "Rp 1.000.000" },
          { name: "11 Biji", price: "Rp 2.000.000" },
        ]
      }
    ]
  },
  {
    id: "kopi-sachet",
    name: "Kopi Sachet",
    category: "Minuman",
    description: "Kopi sachet Good Day, Kapal Api, ABC, Indocafe lengkap.",
    image: "/images/products/kopi-sachet.png",
    rating: 5,
    priceList: [
        {
            groupName: "Kopi Sachet",
            items: [
                { name: "Good Day Mocafrio (12 Renteng)", price: "Rp. 189.000" },
                { name: "Kapal Api Spesial Mix (12 Pak)", price: "Rp. 106.500" },
                { name: "Kopi ABC Susu (12 Renteng)", price: "Rp. 109.500" }
            ]
        }
    ]
  },
   {
    id: "teh-kemasan",
    name: "Teh Kemasan",
    category: "Minuman",
    description: "Teh celup dan serbuk berbagai merek (Sosro, SariWangi, 2 Tang, Poci).",
    image: "/images/products/teh.png",
    rating: 5,
    priceList: [
        {
            groupName: "Teh",
            items: [
                { name: "Teh Celup Sosro Kotak Merah 30", price: "Rp 339.000 (100 Dus)" },
                { name: "Teh Sari Wangi TB 5", price: "Rp 177.000 (24 Lusin)" },
                { name: "Teh Poci Asli/Vanila", price: "Rp. 136.000 (50 Dus)" }
            ]
        }
    ]
  },
  {
    id: "gula-kemasan",
    name: "Gula Kemasan 1KG",
    category: "Gula",
    description: "Gula pasir kemasan 1KG berbagai merek (Rose Brand, Gulaku, Sania, dll).",
    image: "/images/products/gula.png",
    rating: 5,
    priceList: [
         {
            groupName: "Gula Kemasan 1KG (Per Karton)",
            items: [
                { name: "ROSE BRAND (20 Pack)", price: "Rp. 220.000" },
                { name: "GULAKU PREMIUM (24 Pack)", price: "Rp. 267.000" },
                { name: "SANIA (24 Pack)", price: "Rp. 220.000" },
                 { name: "GMP GUNUNG MADU (24 Pack)", price: "Rp. 235.000" }
            ]
        }
    ]
  },
 {
    id: "mie-instan-indomie",
    name: "Indomie Mie Instan",
    category: "Mie",
    description: "Indomie berbagai varian rasa dengan harga grosir per dus.",
    image: "/images/products/indomie.png",
    rating: 5,
    priceList: [
      {
        groupName: "Indomie",
        items: [
          { name: "Indomie Ayam Bawang", price: "Rp. 75.000 / DUS" },
          { name: "Indomie Soto Mie", price: "Rp. 78.000 / DUS" },
          { name: "Indomie Goreng", price: "Rp. 75.000 / DUS" },
        ]
      },
    ]
  },
];
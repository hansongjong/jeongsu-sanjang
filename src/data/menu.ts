export interface MenuItem {
  id: string;
  nameKo: string;
  nameEn: string;
  price?: string;
  descriptionKo: string;
  descriptionEn: string;
  image?: string;
  isSignature?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "ganjang-gejang",
    nameKo: "간장게장",
    nameEn: "Soy-Marinated Raw Crab",
    descriptionKo: "짭조름하고 고소한 밥도둑, 신선한 꽃게를 전통 간장 양념에 숙성",
    descriptionEn: "Fresh raw crab marinated in rich soy sauce. A beloved Korean delicacy known as 'rice thief' for its irresistible taste.",
    isSignature: true,
  },
  {
    id: "yangnyeom-gejang",
    nameKo: "양념게장",
    nameEn: "Spicy Marinated Raw Crab",
    descriptionKo: "매콤달콤 중독성 있는 맛, 특제 양념으로 버무린 꽃게",
    descriptionEn: "Raw crab in sweet and spicy red pepper sauce. Addictively delicious with the perfect balance of heat and sweetness.",
    isSignature: true,
  },
  {
    id: "saengseon-gui",
    nameKo: "생선구이",
    nameEn: "Grilled Fish",
    descriptionKo: "겉은 바삭 속은 촉촉, 매일 신선한 생선을 직화로 구워냅니다",
    descriptionEn: "Perfectly grilled fresh fish - crispy on the outside, tender and moist inside. Grilled daily over open flame.",
    isSignature: true,
  },
  {
    id: "kkotge-tang",
    nameKo: "꽃게탕",
    nameEn: "Blue Crab Stew",
    price: "110,000원 (3~4인)",
    descriptionKo: "바다향 가득, 시원하고 칼칼한 꽃게탕. 신선한 꽃게로 끓여낸 진한 국물",
    descriptionEn: "Hearty crab stew for 3-4 people. Rich, spicy broth packed with fresh blue crab and ocean flavors.",
    isSignature: true,
  },
  {
    id: "jeongsik",
    nameKo: "한상 정식",
    nameEn: "Full Korean Table Set",
    descriptionKo: "푸짐한 집밥 스타일, 정갈한 밑반찬과 함께하는 든든한 한상",
    descriptionEn: "Complete Korean meal with an array of homemade side dishes. Experience authentic home-style Korean dining.",
  },
];

export const reviews = {
  ko: [
    { text: "음식이 맛있어요", count: 36 },
    { text: "재료가 신선해요", count: 21 },
    { text: "가성비 좋아요", count: 19 },
    { text: "양이 많아요", count: 15 },
    { text: "인테리어 멋져요", count: 13 },
    { text: "친절해요", count: 11 },
    { text: "주차 편해요", count: 9 },
    { text: "특별한 메뉴 있어요", count: 9 },
  ],
  en: [
    { text: "Delicious Korean food", count: 36 },
    { text: "Fresh ingredients", count: 21 },
    { text: "Great value", count: 19 },
    { text: "Large portions", count: 15 },
    { text: "Nice interior", count: 13 },
    { text: "Friendly service", count: 11 },
    { text: "Easy parking", count: 9 },
    { text: "Special menu available", count: 9 },
  ],
};

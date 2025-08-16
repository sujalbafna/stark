export interface Product {
  id: string;
  name: string;
  fullName: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  icon: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  ingredients: Array<{
    name: string;
    benefit: string;
  }>;
  keyBenefits: string[];
  starIngredients: string[];
  bestFor: string;
  mrp: number;
}

export const products: Product[] = [
  {
    id: 'multani-mitti',
    name: 'Multani Mitti',
    fullName: 'Stark Multani Mitti Soap Powder',
    description: 'A 100% natural, eco-friendly clay that deeply cleanses, controls oil, brightens, and keeps skin youthful.',
    detailedDescription: 'Our Multani Mitti variant harnesses the ancient power of Fuller\'s Earth combined with modern herbal actives. This natural clay has been used for centuries in Ayurvedic skincare for its exceptional ability to draw out toxins and impurities while maintaining skin\'s natural moisture balance with Aloe Vera and Coconut Milk.',
    benefits: ['Clear Pores','Oil Control','Skin Tightening'],
    icon: 'Leaf',
    color: 'bg-green-500',
    gradientFrom: 'from-green-400',
    gradientTo: 'to-emerald-500',
    image: '/Multani Mitti.png',
    bestFor: 'Deep cleansing & glowing skin',
    mrp: 299,
    starIngredients: ['Multani Mitti', 'Licorice Root', 'Kojic Acid', 'Vitamin C', 'Vitamin E', 'Vitamin B3'],
    ingredients: [
      {
        name: 'Multani Mitti (Fuller\'s Earth)',
        benefit: 'Deep cleanses pores and absorbs excess oil naturally'
      },
      {
        name: 'Licorice Root',
        benefit: 'Brightens skin and reduces dark spots naturally'
      },
      {
        name: 'Kojic Acid',
        benefit: 'Helps reduce pigmentation and even skin tone'
      },
      {
        name: 'Vitamin C',
        benefit: 'Powerful antioxidant that brightens and protects skin'
      },
      {
        name: 'Vitamin E',
        benefit: 'Nourishes and moisturizes skin deeply'
      },
      {
        name: 'Vitamin B3 (Niacinamide)',
        benefit: 'Improves skin texture and reduces pore appearance'
      },
      {
        name: 'Aloe Vera',
        benefit: 'Soothes and hydrates the skin naturally'
      },
      {
        name: 'Coconut Milk',
        benefit: 'Provides deep moisturization and nourishment'
      }
    ],
    keyBenefits: [
      'Removes dirt, oil & impurities',
      'Brightens dull skin & reduces tan',
      'Hydrates with Aloe Vera & Coconut Milk',
      'Deep cleanses pores naturally',
      'Suitable for oily and combination skin',
      'No harsh chemicals or sulfates'
    ]
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    fullName: 'Stark Beetroot Soap Powder',
    description: 'Packed with natural beetroot extracts, it brightens, nourishes, hydrates, and restores youthful, glowing skin naturally.',
    detailedDescription: 'Infused with the natural goodness of beetroot extract, this variant is packed with antioxidants, vitamins, and minerals that help brighten your complexion and give you that coveted natural glow. The natural betalains in beetroot help fight free radicals and promote healthy skin cell regeneration.',
    benefits: ['Brightening', 'Anti-Aging', 'Natural Glow'],
    icon: 'Sparkles',
    color: 'bg-pink-500',
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-rose-500',
    image: '/Beetroot.png',
    bestFor: 'Radiant & youthful skin',
    mrp: 299,
    starIngredients: ['Beetroot Extract', 'Glycerin', 'Coconut Milk', 'Aloe Vera', 'Vitamin C', 'Vitamin E', 'Vitamin B3'],
    ingredients: [
      {
        name: 'Beetroot Extract',
        benefit: 'Rich in antioxidants and natural betalains for skin brightening'
      },
      {
        name: 'Glycerin',
        benefit: 'Provides deep hydration and maintains skin moisture'
      },
      {
        name: 'Coconut Milk',
        benefit: 'Nourishes and softens skin naturally'
      },
      {
        name: 'Aloe Vera',
        benefit: 'Soothes and calms irritated skin'
      },
      {
        name: 'Vitamin C',
        benefit: 'Brightens skin and boosts collagen production'
      },
      {
        name: 'Vitamin E',
        benefit: 'Protects skin from environmental damage'
      },
      {
        name: 'Vitamin B3 (Niacinamide)',
        benefit: 'Improves skin elasticity and reduces fine lines'
      }
    ],
    keyBenefits: [
      'Brightens skin naturally with Beetroot antioxidants',
      'Improves skin tone & reduces pigmentation',
      'Nourishes with Vitamin C & Vitamin E',
      'Promotes healthy skin cell renewal',
      'Evens out skin tone naturally',
      'Anti-aging properties for youthful skin'
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee',
    fullName: 'Stark Coffee Soap Powder',
    description: 'Infused with coffee richness, it gently exfoliates, removes impurities, controls oil, and reveals refreshed glowing skin.',
    detailedDescription: 'Wake up your skin with our invigorating Coffee variant. The natural caffeine content helps stimulate blood circulation while the fine coffee grounds provide gentle exfoliation. This energizing blend helps reduce the appearance of cellulite, tightens skin, and leaves you feeling refreshed and revitalized.',
    benefits: ['Exfoliation', 'Circulation', 'Refreshing'],
    icon: 'Coffee',
    color: 'bg-amber-600',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-500',
    image: '/Coffee.png',
    bestFor: 'Exfoliation & refreshing skin',
    mrp: 299,
    starIngredients: ['Coffee Powder', 'Coconut Milk', 'Aloe Vera', 'Vitamin E', 'Glycerin'],
    ingredients: [
      {
        name: 'Coffee Powder',
        benefit: 'Natural exfoliation and caffeine boost for circulation'
      },
      {
        name: 'Coconut Milk',
        benefit: 'Deep moisturization and skin nourishment'
      },
      {
        name: 'Aloe Vera',
        benefit: 'Soothes skin after exfoliation'
      },
      {
        name: 'Vitamin E',
        benefit: 'Antioxidant protection and skin repair'
      },
      {
        name: 'Glycerin',
        benefit: 'Maintains skin hydration and softness'
      }
    ],
    keyBenefits: [
      'Gently exfoliates dead skin cells',
      'Reduces dullness & promotes circulation',
      'Leaves skin smooth, soft & energized',
      'Boosts skin glow with natural caffeine',
      'Improves blood circulation',
      'Helps reduce cellulite appearance'
    ]
  }
];
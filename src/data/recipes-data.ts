export type Ingredient = {
  id: string;
  name: string;
  amount: string;
};

export type Step = {
  id: string;
  title: string;
  instruction: string;
  duration: number;
  tip?: string;
};

export type Nutrition = {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
};

export type StageTag = "Stage 1" | "Stage 2" | "Stage 3";

export type Recipe = {
  id: number;
  name: string;
  stage: string;
  tag: StageTag;
  time: number;
  image: string;
  description: string;
  allergens: string[];
  servings: number;
  nutrition: Nutrition;
  ingredients: Ingredient[];
  steps: Step[];
};

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: "Sweet Potato Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400&q=80",
    description:
      "A silky, naturally sweet purée that's perfect for your baby's very first tastes. Sweet potato is rich in beta-carotene and easy on tiny tummies.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 45, protein: "1g", carbs: "10g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "sweet potato, peeled & cubed", amount: "200g" },
      {
        id: "i2",
        name: "breast milk or formula (to thin)",
        amount: "2–3 tbsp",
      },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the sweet potato",
        instruction:
          "Place sweet potato cubes in a steamer basket over boiling water. Cover and steam until completely tender — a fork should slide in with zero resistance.",
        duration: 420,
        tip: "Steaming preserves more nutrients than boiling.",
      },
      {
        id: "s2",
        title: "Blend until silky",
        instruction:
          "Transfer the cooked sweet potato to a blender or use a stick blender. Blend on high, adding breast milk or formula a tablespoon at a time until you reach a smooth, lump-free consistency.",
        duration: 60,
        tip: "For Stage 1 babies, the smoother the better.",
      },
      {
        id: "s3",
        title: "Cool & serve",
        instruction:
          "Spoon a small portion into your baby's bowl. Test the temperature on your wrist — it should feel lukewarm. Serve immediately or store in ice-cube trays for up to 48 hours.",
        duration: 300,
        tip: "Freeze leftovers in ice-cube portions for easy future meals.",
      },
    ],
  },
  {
    id: 2,
    name: "Banana & Avocado Mash",
    stage: "6 months+",
    tag: "Stage 1",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&q=80",
    description:
      "No cooking needed! Avocado's healthy fats support brain development while banana adds natural sweetness. A perfect quick meal.",
    allergens: [],
    servings: 2,
    nutrition: { calories: 90, protein: "1g", carbs: "12g", fat: "5g" },
    ingredients: [
      { id: "i1", name: "Ripe avocado (half)", amount: "½" },
      { id: "i2", name: "Ripe banana (small)", amount: "½" },
      { id: "i3", name: "Breast milk or formula (optional)", amount: "1 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Prep your fruit",
        instruction:
          "Scoop the avocado flesh into a bowl. Peel and break the banana into chunks and add it alongside the avocado.",
        duration: 60,
        tip: "Use very ripe fruit — darker bananas mash more smoothly.",
      },
      {
        id: "s2",
        title: "Mash together",
        instruction:
          "Using a fork, mash everything together until you reach your desired consistency. For younger babies, mash until completely smooth. For babies exploring texture, a slightly lumpy mash is fine.",
        duration: 60,
        tip: "Add a splash of milk if the mixture is too thick.",
      },
      {
        id: "s3",
        title: "Serve immediately",
        instruction:
          "Serve straight away as avocado browns quickly. Do not store leftovers — this recipe is best made fresh each time.",
        duration: 30,
        tip: "Make only what you need; avocado oxidises fast.",
      },
    ],
  },
  {
    id: 3,
    name: "Butternut Squash & Apple",
    stage: "6 months+",
    tag: "Stage 1",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&q=80",
    description:
      "The gentle sweetness of apple lifts this squash purée into something truly delicious. A great introduction to combining flavours.",
    allergens: [],
    servings: 6,
    nutrition: { calories: 38, protein: "0.8g", carbs: "9g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "Butternut squash, peeled & cubed", amount: "250g" },
      { id: "i2", name: "Eating apple, peeled & sliced", amount: "1 medium" },
      { id: "i3", name: "Water", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Prep the veg & fruit",
        instruction:
          "Peel and cube the butternut squash into even 2cm pieces. Peel, core and slice the apple. Even sizing means everything cooks at the same rate.",
        duration: 300,
        tip: "A Y-peeler makes squash prep much easier.",
      },
      {
        id: "s2",
        title: "Simmer gently",
        instruction:
          "Place squash, apple and water in a small saucepan. Cover with a lid and cook over a medium-low heat, stirring occasionally, until the squash is completely soft.",
        duration: 720,
        tip: "Keep the heat gentle — you want to steam-cook, not boil dry.",
      },
      {
        id: "s3",
        title: "Blend smooth",
        instruction:
          "Pour everything into a blender including any remaining liquid and blend until very smooth. Add a little extra water or cooled boiled water if needed to reach the right consistency.",
        duration: 60,
        tip: "Retain the cooking water — it's packed with vitamins.",
      },
    ],
  },
  {
    id: 4,
    name: "Pea & Mint Purée",
    stage: "7 months+",
    tag: "Stage 1",
    time: 10,
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&q=80",
    description:
      "Bright, fresh and utterly green. Frozen peas are nutritional powerhouses and mint makes this taste beautifully grown-up.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 35, protein: "3g", carbs: "5g", fat: "0.4g" },
    ingredients: [
      { id: "i1", name: "Frozen peas", amount: "150g" },
      { id: "i2", name: "Fresh mint leaves", amount: "4 leaves" },
      { id: "i3", name: "Cooled boiled water", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the peas",
        instruction:
          "Place frozen peas in a small saucepan with just enough boiling water to cover. Simmer for 3 minutes only — you want them vibrant green, not grey.",
        duration: 180,
        tip: "Don't overcook. Green = fresh = more nutrients.",
      },
      {
        id: "s2",
        title: "Blend with mint",
        instruction:
          "Drain the peas and transfer to a blender with the mint leaves and 2 tablespoons of cooled boiled water. Blend until very smooth.",
        duration: 60,
        tip: "Pass through a fine sieve for an ultra-smooth texture.",
      },
      {
        id: "s3",
        title: "Sieve & serve",
        instruction:
          "For very young babies, push the purée through a fine mesh sieve to remove any remaining skins. Serve at room temperature or gently warmed.",
        duration: 120,
        tip: "Older babies (8m+) may enjoy a slightly coarser texture.",
      },
    ],
  },
  {
    id: 5,
    name: "Carrot & Ginger Soup Purée",
    stage: "8 months+",
    tag: "Stage 2",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    description:
      "A warming, aromatic purée that gently introduces your baby to spice. Ginger has natural digestive benefits and adds a comforting depth.",
    allergens: [],
    servings: 6,
    nutrition: { calories: 42, protein: "1g", carbs: "9g", fat: "0.5g" },
    ingredients: [
      { id: "i1", name: "Carrots, peeled & sliced", amount: "300g" },
      { id: "i2", name: "Fresh ginger, grated", amount: "½ tsp" },
      { id: "i3", name: "Olive oil", amount: "1 tsp" },
      { id: "i4", name: "Low-salt vegetable stock", amount: "200ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Sauté the ginger",
        instruction:
          "Warm the olive oil in a saucepan over a medium heat. Add the grated ginger and cook for 1 minute, stirring, until fragrant. This blooms the flavour.",
        duration: 60,
        tip: "Don't let the ginger brown — keep it moving.",
      },
      {
        id: "s2",
        title: "Cook the carrots",
        instruction:
          "Add the sliced carrots and vegetable stock. Bring to a gentle boil, then reduce heat, cover and simmer until carrots are completely tender.",
        duration: 900,
        tip: "Use a no-added-salt baby stock or make your own.",
      },
      {
        id: "s3",
        title: "Blend & adjust",
        instruction:
          "Blend everything until completely smooth. If too thick, add a little extra cooled boiled water. Taste and ensure it's not too spicy — it should be subtle and warming.",
        duration: 60,
        tip: "For Stage 2 babies you can leave a little texture.",
      },
    ],
  },
  {
    id: 6,
    name: "Lentil & Spinach Dhal",
    stage: "8 months+",
    tag: "Stage 2",
    time: 30,
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description:
      "Protein-packed and iron-rich, this gentle dhal is brilliant for plant-based weaning. Mild spices make it flavourful without the heat.",
    allergens: [],
    servings: 8,
    nutrition: { calories: 78, protein: "5g", carbs: "12g", fat: "1g" },
    ingredients: [
      { id: "i1", name: "Red lentils, rinsed", amount: "100g" },
      { id: "i2", name: "Baby spinach", amount: "40g" },
      { id: "i3", name: "Ground cumin", amount: "¼ tsp" },
      { id: "i4", name: "Ground coriander", amount: "¼ tsp" },
      { id: "i5", name: "Coconut milk", amount: "100ml" },
      { id: "i6", name: "Water", amount: "250ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Toast the spices",
        instruction:
          "In a dry saucepan over medium heat, toast the cumin and coriander for 30 seconds until fragrant. This step unlocks the flavour compounds in the spices.",
        duration: 30,
        tip: "Watch carefully — spices burn very quickly.",
      },
      {
        id: "s2",
        title: "Cook the lentils",
        instruction:
          "Add the rinsed lentils, coconut milk and water. Bring to a boil, skimming any foam, then reduce heat and simmer uncovered, stirring occasionally, until lentils are completely soft and mushy.",
        duration: 1200,
        tip: "Red lentils need no soaking and cook quickly — perfect for weaning.",
      },
      {
        id: "s3",
        title: "Wilt in the spinach",
        instruction:
          "Stir in the spinach and cook for a further 2 minutes until wilted completely into the dhal.",
        duration: 120,
        tip: "Spinach and lentils together create an iron-rich combination.",
      },
      {
        id: "s4",
        title: "Blend or mash",
        instruction:
          "For younger babies, blend until smooth. For 10m+ babies, mash with a fork to leave a chunky texture that encourages chewing development.",
        duration: 60,
        tip: "Serve with soft rice or as a dip with toast fingers.",
      },
    ],
  },
];

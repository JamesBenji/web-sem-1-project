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
          "In a dry saucepan over medium heat, toast the cumin and coriander for 30 seconds until fragrant.",
        duration: 30,
        tip: "Watch carefully — spices burn very quickly.",
      },
      {
        id: "s2",
        title: "Cook the lentils",
        instruction:
          "Add the rinsed lentils, coconut milk and water. Bring to a boil, then reduce heat and simmer until lentils are completely soft.",
        duration: 1200,
        tip: "Red lentils need no soaking and cook quickly.",
      },
      {
        id: "s3",
        title: "Wilt in the spinach",
        instruction:
          "Stir in the spinach and cook for 2 minutes until wilted completely into the dhal.",
        duration: 120,
        tip: "Spinach and lentils together create an iron-rich combination.",
      },
      {
        id: "s4",
        title: "Blend or mash",
        instruction:
          "For younger babies, blend until smooth. For 10m+ babies, mash with a fork to leave a chunky texture.",
        duration: 60,
        tip: "Serve with soft rice or as a dip with toast fingers.",
      },
    ],
  },

  {
    id: 11,
    name: "Parsnip & Pear Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1737210235283-7675f83efc59?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Parsnip has a natural sweetness that pairs beautifully with ripe pear. An unusual but delightful combination that babies tend to adore.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 48, protein: "0.9g", carbs: "11g", fat: "0.2g" },
    ingredients: [
      { id: "i1", name: "Parsnip, peeled & chopped", amount: "150g" },
      { id: "i2", name: "Ripe pear, peeled & cored", amount: "1 medium" },
      { id: "i3", name: "Water", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the parsnip",
        instruction:
          "Steam parsnip for 10 minutes until tender. Add the pear for the final 3 minutes just to soften it slightly.",
        duration: 780,
        tip: "Parsnip takes longer than most root vegetables — be patient.",
      },
      {
        id: "s2",
        title: "Blend together",
        instruction:
          "Blend parsnip and pear with a little water until completely smooth.",
        duration: 60,
      },
    ],
  },
  {
    id: 12,
    name: "Baby Porridge with Banana",
    stage: "6 months+",
    tag: "Stage 1",
    time: 10,
    image:
      "https://images.unsplash.com/photo-1555078604-b2379f0e964a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A warm, filling breakfast that introduces your baby to oats — a great source of slow-release energy to keep them going all morning.",
    allergens: ["gluten", "milk"],
    servings: 1,
    nutrition: { calories: 95, protein: "3g", carbs: "16g", fat: "2g" },
    ingredients: [
      {
        id: "i1",
        name: "Baby oats or finely ground porridge oats",
        amount: "3 tbsp",
      },
      { id: "i2", name: "Breast milk, formula or whole milk", amount: "100ml" },
      { id: "i3", name: "Ripe banana, mashed", amount: "¼" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the porridge",
        instruction:
          "Combine oats and milk in a small saucepan. Cook over low heat, stirring constantly, for 3–4 minutes until thick and creamy.",
        duration: 240,
        tip: "Keep stirring to prevent the bottom from catching.",
      },
      {
        id: "s2",
        title: "Stir in banana",
        instruction:
          "Remove from heat and stir in the mashed banana. Allow to cool slightly before serving.",
        duration: 120,
        tip: "The banana sweetens naturally — no sugar needed.",
      },
    ],
  },
  {
    id: 13,
    name: "Chicken & Vegetable Purée",
    stage: "7 months+",
    tag: "Stage 1",
    time: 30,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80",
    description:
      "A protein-rich first meat purée that introduces your baby to chicken in the gentlest way possible, paired with familiar vegetables.",
    allergens: [],
    servings: 5,
    nutrition: { calories: 65, protein: "7g", carbs: "6g", fat: "1.5g" },
    ingredients: [
      { id: "i1", name: "Chicken breast, diced", amount: "80g" },
      { id: "i2", name: "Carrot, peeled & sliced", amount: "80g" },
      { id: "i3", name: "Sweet potato, peeled & cubed", amount: "80g" },
      { id: "i4", name: "Low-salt chicken stock", amount: "150ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Simmer everything together",
        instruction:
          "Place chicken, carrot, sweet potato and stock in a saucepan. Bring to a gentle boil, then reduce heat and simmer for 20 minutes until chicken is cooked through and vegetables are tender.",
        duration: 1200,
        tip: "Ensure chicken reaches 75°C internally before blending.",
      },
      {
        id: "s2",
        title: "Blend until smooth",
        instruction:
          "Transfer everything including the stock to a blender and blend until completely smooth.",
        duration: 60,
        tip: "Add extra cooled boiled water if the purée is too thick.",
      },
    ],
  },
  {
    id: 14,
    name: "Cauliflower Cheese Purée",
    stage: "7 months+",
    tag: "Stage 1",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1578859318509-62790b079366?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A classic British flavour combination that works wonderfully as a baby purée. Creamy, mild and comforting.",
    allergens: ["milk"],
    servings: 4,
    nutrition: { calories: 60, protein: "4g", carbs: "5g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Cauliflower florets", amount: "200g" },
      { id: "i2", name: "Mild cheddar, grated", amount: "25g" },
      { id: "i3", name: "Whole milk", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the cauliflower",
        instruction:
          "Steam cauliflower florets for 10–12 minutes until very tender.",
        duration: 720,
      },
      {
        id: "s2",
        title: "Blend with cheese and milk",
        instruction:
          "Transfer to a blender, add grated cheddar and milk, and blend until completely smooth and creamy.",
        duration: 60,
        tip: "The warmth of the cauliflower melts the cheese perfectly.",
      },
    ],
  },
  {
    id: 15,
    name: "Blueberry & Oat Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 10,
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&q=80",
    description:
      "Antioxidant-rich blueberries combined with oats make a powerhouse breakfast that's as nutritious as it is delicious.",
    allergens: ["gluten"],
    servings: 2,
    nutrition: { calories: 75, protein: "2g", carbs: "14g", fat: "1g" },
    ingredients: [
      { id: "i1", name: "Fresh or frozen blueberries", amount: "80g" },
      { id: "i2", name: "Baby oats", amount: "2 tbsp" },
      { id: "i3", name: "Water", amount: "80ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the oats",
        instruction:
          "Bring water to a simmer, add oats and cook for 3 minutes, stirring continuously.",
        duration: 180,
      },
      {
        id: "s2",
        title: "Add blueberries",
        instruction:
          "Stir in blueberries and cook for a further 2 minutes until they burst and soften. Blend or mash to desired consistency.",
        duration: 120,
        tip: "Frozen blueberries work just as well as fresh.",
      },
    ],
  },
  {
    id: 16,
    name: "Salmon & Sweet Potato Mash",
    stage: "8 months+",
    tag: "Stage 2",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1665594051407-7385d281ad76?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Omega-3 rich salmon paired with creamy sweet potato is one of the best things you can feed a developing brain. A real nutritional hero.",
    allergens: ["fish"],
    servings: 3,
    nutrition: { calories: 110, protein: "9g", carbs: "12g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Salmon fillet, skinless", amount: "80g" },
      { id: "i2", name: "Sweet potato, peeled & cubed", amount: "150g" },
      { id: "i3", name: "Breast milk or whole milk", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the sweet potato",
        instruction:
          "Steam sweet potato for 12 minutes until completely tender.",
        duration: 720,
      },
      {
        id: "s2",
        title: "Poach the salmon",
        instruction:
          "Place salmon in a small pan and cover with water. Bring to a gentle simmer and poach for 5–6 minutes until cooked through. Remove any bones carefully.",
        duration: 360,
        tip: "Always check twice for bones — even 'boneless' fillets can have some.",
      },
      {
        id: "s3",
        title: "Mash together",
        instruction:
          "Mash sweet potato with milk until smooth, then flake in the salmon and mix together. Leave some texture for Stage 2 babies.",
        duration: 120,
      },
    ],
  },
  {
    id: 17,
    name: "Tomato & Lentil Soup",
    stage: "8 months+",
    tag: "Stage 2",
    time: 30,
    image:
      "https://images.unsplash.com/photo-1722239312531-486bbfd50f18?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A warming, iron-rich soup that introduces babies to tomatoes and legumes. Smooth enough for younger palates, hearty enough for older ones.",
    allergens: [],
    servings: 6,
    nutrition: { calories: 68, protein: "4g", carbs: "11g", fat: "0.5g" },
    ingredients: [
      { id: "i1", name: "Red lentils, rinsed", amount: "80g" },
      { id: "i2", name: "Chopped tomatoes (tin)", amount: "200g" },
      { id: "i3", name: "Onion, finely diced", amount: "½ small" },
      { id: "i4", name: "Low-salt vegetable stock", amount: "300ml" },
      { id: "i5", name: "Olive oil", amount: "1 tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Soften the onion",
        instruction:
          "Warm olive oil in a saucepan. Add diced onion and cook over low heat for 5 minutes until completely soft and translucent.",
        duration: 300,
        tip: "Don't rush this step — soft onion is key to a smooth purée.",
      },
      {
        id: "s2",
        title: "Add lentils and tomatoes",
        instruction:
          "Add lentils, tomatoes and stock. Bring to a boil then simmer for 20 minutes until lentils are completely soft.",
        duration: 1200,
      },
      {
        id: "s3",
        title: "Blend until smooth",
        instruction:
          "Blend until smooth. Pass through a sieve if needed for very young babies.",
        duration: 60,
      },
    ],
  },
  {
    id: 9,
    name: "Courgette & Potato Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1679844784189-3883de9550fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Potato gives this purée a creamy, filling base while courgette adds mild flavour and extra nutrients. A comforting everyday staple.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 50, protein: "1.5g", carbs: "11g", fat: "0.2g" },
    ingredients: [
      { id: "i1", name: "Potato, peeled & cubed", amount: "150g" },
      { id: "i2", name: "Courgette, chopped", amount: "100g" },
      { id: "i3", name: "Cooled boiled water", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam together",
        instruction:
          "Place potato and courgette in a steamer over boiling water. Steam for 12–15 minutes until both are completely tender.",
        duration: 840,
        tip: "Cut potato into smaller pieces than courgette as it takes longer.",
      },
      {
        id: "s2",
        title: "Blend smooth",
        instruction:
          "Transfer to a blender with a little cooled boiled water and blend until silky smooth.",
        duration: 60,
      },
    ],
  },
  {
    id: 10,
    name: "Mango & Banana Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1675169594067-2034fb964223?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Tropical and vibrant — this no-cook purée is a wonderful introduction to fruit. Mango is loaded with vitamin C and babies almost always love it.",
    allergens: [],
    servings: 2,
    nutrition: { calories: 70, protein: "0.8g", carbs: "17g", fat: "0.3g" },
    ingredients: [
      { id: "i1", name: "Ripe mango, peeled & cubed", amount: "100g" },
      { id: "i2", name: "Ripe banana", amount: "½" },
    ],
    steps: [
      {
        id: "s1",
        title: "Blend together",
        instruction:
          "Place mango and banana in a blender and blend until completely smooth. No cooking needed.",
        duration: 60 * 5,
        tip: "Use very ripe mango for the sweetest, smoothest result.",
      },
    ],
  },
  {
    id: 18,
    name: "Beef & Root Vegetable Stew",
    stage: "9 months+",
    tag: "Stage 2",
    time: 45,
    image:
      "https://images.unsplash.com/photo-1552298013-de2af4b94854?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A slow-cooked stew that's rich in iron and protein. Perfect for babies who are ready for more complex flavours and textures.",
    allergens: [],
    servings: 6,
    nutrition: { calories: 95, protein: "9g", carbs: "10g", fat: "2.5g" },
    ingredients: [
      { id: "i1", name: "Lean beef mince", amount: "100g" },
      { id: "i2", name: "Carrot, diced", amount: "80g" },
      { id: "i3", name: "Parsnip, diced", amount: "60g" },
      { id: "i4", name: "Potato, diced", amount: "80g" },
      { id: "i5", name: "Low-salt beef stock", amount: "250ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Brown the mince",
        instruction:
          "Cook the beef mince in a dry pan over medium heat, breaking it up, until no longer pink.",
        duration: 300,
      },
      {
        id: "s2",
        title: "Add vegetables and stock",
        instruction:
          "Add all the diced vegetables and stock. Bring to a boil, then reduce heat and simmer for 30 minutes until everything is very tender.",
        duration: 1800,
        tip: "The longer it simmers, the more the flavours develop.",
      },
      {
        id: "s3",
        title: "Mash or blend",
        instruction:
          "For younger babies blend until smooth. For older babies, mash to a chunky texture to encourage chewing.",
        duration: 60,
      },
    ],
  },
  {
    id: 19,
    name: "Courgette & Ricotta Pasta",
    stage: "10 months+",
    tag: "Stage 3",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    description:
      "Tiny pasta shapes tossed with creamy ricotta and soft courgette make a wonderful self-feeding meal for babies who are ready to explore.",
    allergens: ["gluten", "milk", "eggs"],
    servings: 2,
    nutrition: { calories: 145, protein: "7g", carbs: "20g", fat: "4g" },
    ingredients: [
      {
        id: "i1",
        name: "Small pasta shapes (stelline or orzo)",
        amount: "50g",
      },
      { id: "i2", name: "Courgette, finely grated", amount: "80g" },
      { id: "i3", name: "Ricotta cheese", amount: "40g" },
      { id: "i4", name: "Olive oil", amount: "1 tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the pasta",
        instruction:
          "Cook pasta in unsalted boiling water for 1–2 minutes longer than package instructions — you want it very soft.",
        duration: 600,
        tip: "Soft pasta is easier for babies to manage.",
      },
      {
        id: "s2",
        title: "Sauté the courgette",
        instruction:
          "While pasta cooks, warm olive oil and gently cook grated courgette for 3–4 minutes until soft.",
        duration: 240,
      },
      {
        id: "s3",
        title: "Combine and serve",
        instruction:
          "Drain pasta, reserving a little cooking water. Toss pasta with courgette, ricotta and a splash of pasta water until creamy.",
        duration: 60,
        tip: "Serve at a warm — not hot — temperature.",
      },
    ],
  },
  {
    id: 20,
    name: "Mango & Coconut Rice Pudding",
    stage: "9 months+",
    tag: "Stage 2",
    time: 30,
    image:
      "https://images.unsplash.com/photo-1590055619273-44b5b6ce52e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A creamy, tropical-inspired pudding using coconut milk and fresh mango. A lovely treat that feels special without any added sugar.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 120, protein: "2g", carbs: "22g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Short-grain pudding rice", amount: "50g" },
      { id: "i2", name: "Coconut milk", amount: "150ml" },
      { id: "i3", name: "Water", amount: "100ml" },
      { id: "i4", name: "Ripe mango, puréed", amount: "80g" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the rice",
        instruction:
          "Combine rice, coconut milk and water in a saucepan. Cook over low heat, stirring frequently, for 25 minutes until rice is very soft and pudding is creamy.",
        duration: 1500,
        tip: "Keep the heat low and stir often to prevent sticking.",
      },
      {
        id: "s2",
        title: "Serve with mango",
        instruction:
          "Spoon rice pudding into a bowl and swirl through the mango purée. Serve warm or at room temperature.",
        duration: 60,
      },
    ],
  },
  {
    id: 21,
    name: "Spinach & Potato Purée",
    stage: "7 months+",
    tag: "Stage 1",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
    description:
      "Iron-rich spinach blended with creamy potato is a brilliant way to pack in greens without any fuss. The potato keeps it mild and familiar.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 52, protein: "2g", carbs: "10g", fat: "0.3g" },
    ingredients: [
      { id: "i1", name: "Potato, peeled & cubed", amount: "150g" },
      { id: "i2", name: "Baby spinach", amount: "60g" },
      { id: "i3", name: "Cooled boiled water", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the potato",
        instruction:
          "Steam potato cubes for 12–15 minutes until completely tender.",
        duration: 840,
      },
      {
        id: "s2",
        title: "Wilt the spinach",
        instruction:
          "Place spinach in a colander and pour boiling water over it to wilt. Squeeze out excess water.",
        duration: 60,
        tip: "Squeezing out water prevents a watery purée.",
      },
      {
        id: "s3",
        title: "Blend together",
        instruction:
          "Blend potato and spinach with cooled boiled water until smooth and vibrant green.",
        duration: 60,
      },
    ],
  },
  {
    id: 22,
    name: "Pear & Raspberry Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1736752346246-61f4daedfde0?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The tartness of raspberry cuts through sweet pear to create a beautifully balanced fruit purée. Rich in vitamin C and antioxidants.",
    allergens: [],
    servings: 3,
    nutrition: { calories: 35, protein: "0.5g", carbs: "8g", fat: "0.2g" },
    ingredients: [
      { id: "i1", name: "Ripe pear, peeled & chopped", amount: "1 large" },
      { id: "i2", name: "Fresh or frozen raspberries", amount: "50g" },
    ],
    steps: [
      {
        id: "s1",
        title: "Soften the pear",
        instruction: "Steam or simmer pear pieces for 5–6 minutes until soft.",
        duration: 360,
      },
      {
        id: "s2",
        title: "Blend with raspberries",
        instruction:
          "Blend pear and raw raspberries together until smooth. Pass through a fine sieve to remove raspberry seeds.",
        duration: 120,
        tip: "Sieving is essential — raspberry seeds are too tough for babies.",
      },
    ],
  },
  {
    id: 23,
    name: "Turkey & Sweet Corn Mash",
    stage: "8 months+",
    tag: "Stage 2",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&q=80",
    description:
      "Lean turkey is an excellent low-fat protein source for growing babies. Combined with sweet corn and potato, it makes a satisfying meal.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 88, protein: "8g", carbs: "11g", fat: "1.5g" },
    ingredients: [
      { id: "i1", name: "Turkey breast mince", amount: "80g" },
      { id: "i2", name: "Frozen sweet corn", amount: "60g" },
      { id: "i3", name: "Potato, peeled & cubed", amount: "100g" },
      { id: "i4", name: "Low-salt chicken stock", amount: "150ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook everything together",
        instruction:
          "Place all ingredients in a saucepan. Bring to a boil, then simmer for 20 minutes until turkey is cooked through and potato is tender.",
        duration: 1200,
        tip: "Break up the turkey mince as it cooks.",
      },
      {
        id: "s2",
        title: "Blend or mash",
        instruction:
          "Blend until smooth for younger babies. For older babies, mash roughly to leave soft texture.",
        duration: 60,
      },
    ],
  },
  {
    id: 24,
    name: "Beetroot & Apple Purée",
    stage: "7 months+",
    tag: "Stage 1",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=400&q=80",
    description:
      "Strikingly pink and wonderfully nutritious, this earthy-sweet combination is packed with folate and vitamin C.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 42, protein: "1g", carbs: "10g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "Raw beetroot, peeled & cubed", amount: "120g" },
      { id: "i2", name: "Eating apple, peeled & chopped", amount: "1 medium" },
      { id: "i3", name: "Water", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the beetroot",
        instruction:
          "Steam beetroot for 20 minutes until completely tender. Add apple for the final 5 minutes.",
        duration: 1200,
        tip: "Wear gloves — beetroot stains everything!",
      },
      {
        id: "s2",
        title: "Blend together",
        instruction:
          "Blend beetroot and apple with water until completely smooth and vibrant.",
        duration: 60,
      },
    ],
  },
  {
    id: 25,
    name: "Corn & Courgette Fritters",
    stage: "10 months+",
    tag: "Stage 3",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1607095597425-6f61dee8ab7e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Soft, golden fritters that are perfect for little hands to pick up. A brilliant finger food that makes self-feeding fun and nutritious.",
    allergens: ["gluten", "eggs", "milk"],
    servings: 8,
    nutrition: { calories: 65, protein: "3g", carbs: "9g", fat: "2g" },
    ingredients: [
      { id: "i1", name: "Courgette, grated & squeezed dry", amount: "100g" },
      { id: "i2", name: "Frozen sweet corn, thawed", amount: "60g" },
      { id: "i3", name: "Egg", amount: "1 large" },
      { id: "i4", name: "Self-raising flour", amount: "3 tbsp" },
      { id: "i5", name: "Mild cheddar, grated", amount: "20g" },
      { id: "i6", name: "Olive oil for frying", amount: "1 tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Mix the batter",
        instruction:
          "Combine courgette, corn, egg, flour and cheese in a bowl. Mix until just combined.",
        duration: 120,
        tip: "Squeeze courgette really well to avoid soggy fritters.",
      },
      {
        id: "s2",
        title: "Fry the fritters",
        instruction:
          "Heat oil in a frying pan. Drop tablespoons of batter and cook for 2–3 minutes per side until golden.",
        duration: 300,
        tip: "Keep heat medium — too hot and they burn before cooking through.",
      },
      {
        id: "s3",
        title: "Cool and serve",
        instruction:
          "Allow to cool to a safe temperature before offering to your baby. Cut into strips for easy gripping.",
        duration: 180,
      },
    ],
  },
  {
    id: 26,
    name: "Chicken & Sweetcorn Risotto",
    stage: "10 months+",
    tag: "Stage 3",
    time: 35,
    image:
      "https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A creamy, comforting risotto that the whole family can enjoy together. Soft enough for babies, satisfying enough for grown-ups.",
    allergens: ["milk"],
    servings: 4,
    nutrition: { calories: 165, protein: "12g", carbs: "24g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Arborio rice", amount: "100g" },
      { id: "i2", name: "Chicken breast, finely diced", amount: "100g" },
      { id: "i3", name: "Frozen sweet corn", amount: "60g" },
      { id: "i4", name: "Low-salt chicken stock, warm", amount: "500ml" },
      { id: "i5", name: "Parmesan, finely grated", amount: "20g" },
      { id: "i6", name: "Olive oil", amount: "1 tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the chicken",
        instruction:
          "Warm oil in a wide pan. Cook diced chicken for 4–5 minutes until cooked through. Set aside.",
        duration: 300,
      },
      {
        id: "s2",
        title: "Toast the rice",
        instruction:
          "Add rice to the same pan and stir for 1 minute until the edges look translucent.",
        duration: 60,
      },
      {
        id: "s3",
        title: "Add stock gradually",
        instruction:
          "Add warm stock a ladleful at a time, stirring continuously, allowing each addition to absorb before adding more. Continue for 20 minutes.",
        duration: 1200,
        tip: "Patience is the key to creamy risotto.",
      },
      {
        id: "s4",
        title: "Finish and serve",
        instruction:
          "Stir in chicken, sweet corn and parmesan. Cook for 2 more minutes until heated through and creamy.",
        duration: 120,
      },
    ],
  },
  {
    id: 27,
    name: "Peach & Yoghurt Blend",
    stage: "7 months+",
    tag: "Stage 1",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Full-fat yoghurt provides calcium and protein while ripe peach delivers natural sweetness. A quick, no-cook breakfast or snack.",
    allergens: ["milk"],
    servings: 1,
    nutrition: { calories: 65, protein: "3g", carbs: "11g", fat: "1.5g" },
    ingredients: [
      { id: "i1", name: "Ripe peach, peeled & stoned", amount: "1 medium" },
      { id: "i2", name: "Full-fat plain yoghurt", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Blend or mash",
        instruction:
          "Blend or mash peach until smooth. Stir into the yoghurt and serve immediately.",
        duration: 60,
        tip: "Use a very ripe peach for the best flavour and texture.",
      },
    ],
  },
  {
    id: 28,
    name: "Fish Pie Purée",
    stage: "9 months+",
    tag: "Stage 2",
    time: 30,
    image:
      "https://images.unsplash.com/photo-1733210438444-652db87a57b0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "All the comfort of a classic fish pie in baby-friendly form. White fish, sweet potato and a creamy sauce make a wonderfully nutritious meal.",
    allergens: ["fish", "milk"],
    servings: 5,
    nutrition: { calories: 98, protein: "10g", carbs: "12g", fat: "2g" },
    ingredients: [
      { id: "i1", name: "White fish fillet (cod or haddock)", amount: "100g" },
      { id: "i2", name: "Sweet potato, peeled & cubed", amount: "150g" },
      { id: "i3", name: "Whole milk", amount: "80ml" },
      { id: "i4", name: "Butter", amount: "5g" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the sweet potato",
        instruction:
          "Steam sweet potato for 12 minutes until completely tender.",
        duration: 720,
      },
      {
        id: "s2",
        title: "Poach the fish",
        instruction:
          "Poach fish in milk for 5–6 minutes until it flakes easily. Reserve the poaching milk. Remove all bones carefully.",
        duration: 360,
        tip: "The milk picks up lovely flavour from the fish — don't discard it.",
      },
      {
        id: "s3",
        title: "Mash and combine",
        instruction:
          "Mash sweet potato with butter and some of the reserved milk. Flake in the fish and mix gently.",
        duration: 120,
      },
    ],
  },
  {
    id: 29,
    name: "Aubergine & Chickpea Purée",
    stage: "8 months+",
    tag: "Stage 2",
    time: 35,
    image:
      "https://images.unsplash.com/photo-1625477811132-8480c94cd010?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A Middle Eastern-inspired purée that introduces babies to bold, satisfying flavours early. Rich in plant protein and fibre.",
    allergens: [],
    servings: 5,
    nutrition: { calories: 72, protein: "4g", carbs: "10g", fat: "2g" },
    ingredients: [
      { id: "i1", name: "Aubergine", amount: "1 medium" },
      { id: "i2", name: "Cooked chickpeas, rinsed", amount: "80g" },
      { id: "i3", name: "Olive oil", amount: "1 tsp" },
      { id: "i4", name: "Lemon juice", amount: "½ tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Roast the aubergine",
        instruction:
          "Halve aubergine, brush with oil and roast at 200°C for 25 minutes until completely soft and collapsed.",
        duration: 1500,
        tip: "Scoring the flesh before roasting helps it cook faster.",
      },
      {
        id: "s2",
        title: "Scoop and blend",
        instruction:
          "Scoop out the aubergine flesh and blend with chickpeas, remaining olive oil and lemon juice until smooth.",
        duration: 60,
      },
    ],
  },
  {
    id: 30,
    name: "Lamb & Mint Stew",
    stage: "9 months+",
    tag: "Stage 2",
    time: 50,
    image:
      "https://images.unsplash.com/photo-1657517579655-57e2156c6271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Slow-cooked lamb with mint and vegetables is a deeply nutritious, iron-rich meal. The slow cooking makes the meat wonderfully tender.",
    allergens: [],
    servings: 6,
    nutrition: { calories: 105, protein: "10g", carbs: "9g", fat: "3.5g" },
    ingredients: [
      { id: "i1", name: "Lean lamb mince", amount: "100g" },
      { id: "i2", name: "Courgette, diced", amount: "80g" },
      { id: "i3", name: "Carrot, diced", amount: "80g" },
      { id: "i4", name: "Fresh mint, chopped", amount: "4 leaves" },
      { id: "i5", name: "Low-salt lamb or vegetable stock", amount: "200ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Brown the lamb",
        instruction:
          "Cook lamb mince in a dry pan until browned all over, breaking it up as it cooks.",
        duration: 300,
      },
      {
        id: "s2",
        title: "Add vegetables and stock",
        instruction:
          "Add carrot, courgette and stock. Simmer gently for 35 minutes until everything is very tender.",
        duration: 2100,
      },
      {
        id: "s3",
        title: "Add mint and blend",
        instruction:
          "Stir in fresh mint. Blend to desired consistency — smooth for younger babies, mashed for older ones.",
        duration: 60,
      },
    ],
  },
  {
    id: 31,
    name: "Strawberry & Banana Smoothie Bowl",
    stage: "9 months+",
    tag: "Stage 2",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1640126219893-6c869dbe9bd0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A thick, vibrant fruit bowl that doubles as a meal or a snack. Full of vitamin C and naturally sweet with no added sugar.",
    allergens: ["milk"],
    servings: 1,
    nutrition: { calories: 80, protein: "3g", carbs: "15g", fat: "1g" },
    ingredients: [
      { id: "i1", name: "Fresh strawberries, hulled", amount: "80g" },
      { id: "i2", name: "Ripe banana", amount: "½" },
      { id: "i3", name: "Full-fat plain yoghurt", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Blend together",
        instruction:
          "Blend strawberries, banana and yoghurt until smooth and thick. Pour into a bowl and serve with a soft spoon.",
        duration: 60 * 5,
        tip: "Serve immediately — the colour fades quickly.",
      },
    ],
  },
  {
    id: 32,
    name: "Egg & Soldiers",
    stage: "10 months+",
    tag: "Stage 3",
    time: 10,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
    description:
      "A British classic — soft-boiled egg with toast fingers for dipping. A wonderful fine motor skill activity and a nutritious, protein-rich breakfast.",
    allergens: ["eggs", "gluten"],
    servings: 1,
    nutrition: { calories: 115, protein: "7g", carbs: "12g", fat: "4g" },
    ingredients: [
      { id: "i1", name: "Egg (British Lion stamped)", amount: "1 large" },
      { id: "i2", name: "Slice of bread", amount: "1 slice" },
      { id: "i3", name: "Unsalted butter", amount: "½ tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Boil the egg",
        instruction:
          "Place egg in a small saucepan of cold water. Bring to a boil and cook for exactly 5 minutes for a runny yolk.",
        duration: 300,
        tip: "Lion-stamped eggs are safe for babies to eat with a runny yolk.",
      },
      {
        id: "s2",
        title: "Make the soldiers",
        instruction:
          "Toast the bread, spread very lightly with butter and cut into fingers narrow enough for little hands to hold.",
        duration: 120,
      },
    ],
  },
  {
    id: 33,
    name: "Roasted Red Pepper & Tomato Soup",
    stage: "8 months+",
    tag: "Stage 2",
    time: 40,
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    description:
      "Roasting the vegetables concentrates their natural sweetness. This vibrant soup is packed with vitamin C and lycopene.",
    allergens: [],
    servings: 6,
    nutrition: { calories: 45, protein: "1.2g", carbs: "9g", fat: "0.8g" },
    ingredients: [
      { id: "i1", name: "Red peppers", amount: "2 large" },
      { id: "i2", name: "Ripe tomatoes", amount: "300g" },
      { id: "i3", name: "Onion, halved", amount: "½" },
      { id: "i4", name: "Olive oil", amount: "1 tsp" },
      { id: "i5", name: "Low-salt vegetable stock", amount: "200ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Roast the vegetables",
        instruction:
          "Place peppers, tomatoes and onion on a tray, drizzle with oil and roast at 200°C for 25–30 minutes until soft and slightly charred.",
        duration: 1800,
        tip: "The char adds depth of flavour — don't worry if edges darken.",
      },
      {
        id: "s2",
        title: "Blend with stock",
        instruction:
          "Transfer roasted vegetables and any juices to a blender. Add stock and blend until completely smooth.",
        duration: 60,
      },
    ],
  },
  {
    id: 34,
    name: "Mini Vegetable Omelette",
    stage: "10 months+",
    tag: "Stage 3",
    time: 10,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
    description:
      "A simple folded omelette packed with hidden vegetables. Easy to cut into strips for self-feeding and packed with protein and iron.",
    allergens: ["eggs", "milk"],
    servings: 1,
    nutrition: { calories: 110, protein: "8g", carbs: "3g", fat: "7g" },
    ingredients: [
      { id: "i1", name: "Eggs", amount: "2 large" },
      { id: "i2", name: "Frozen peas, thawed", amount: "2 tbsp" },
      { id: "i3", name: "Grated mild cheddar", amount: "1 tbsp" },
      { id: "i4", name: "Olive oil", amount: "½ tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Whisk the eggs",
        instruction: "Whisk eggs in a bowl until smooth.",
        duration: 30,
      },
      {
        id: "s2",
        title: "Cook the omelette",
        instruction:
          "Warm oil in a small pan over low heat. Pour in eggs and scatter over peas and cheese. Cook gently until just set — about 3 minutes.",
        duration: 180,
        tip: "Low and slow is the key to a soft omelette.",
      },
      {
        id: "s3",
        title: "Cool and cut",
        instruction:
          "Allow to cool to a safe temperature, then cut into strips or small squares for self-feeding.",
        duration: 120,
      },
    ],
  },
  {
    id: 35,
    name: "Plum & Cinnamon Compote",
    stage: "7 months+",
    tag: "Stage 1",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1564004936662-f0154af4e450?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Plums cooked with a hint of cinnamon make a warming, fragrant purée. Excellent stirred into yoghurt or porridge.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 30, protein: "0.4g", carbs: "7g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "Ripe plums, stoned & halved", amount: "200g" },
      { id: "i2", name: "Ground cinnamon", amount: "pinch" },
      { id: "i3", name: "Water", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Simmer the plums",
        instruction:
          "Place plums, cinnamon and water in a saucepan. Cook over medium heat for 8–10 minutes until plums are completely soft.",
        duration: 600,
      },
      {
        id: "s2",
        title: "Blend and serve",
        instruction:
          "Blend until smooth. Serve alone, or stir into yoghurt or porridge.",
        duration: 60,
      },
    ],
  },
  {
    id: 36,
    name: "Mini Sweet Potato Pancakes",
    stage: "10 months+",
    tag: "Stage 3",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    description:
      "Naturally sweet and vibrantly orange, these soft pancakes are perfect for little hands. Great as breakfast or a snack on the go.",
    allergens: ["gluten", "eggs", "milk"],
    servings: 8,
    nutrition: { calories: 55, protein: "2g", carbs: "9g", fat: "1.5g" },
    ingredients: [
      { id: "i1", name: "Sweet potato purée (cooked)", amount: "80g" },
      { id: "i2", name: "Egg", amount: "1 large" },
      { id: "i3", name: "Plain flour", amount: "4 tbsp" },
      { id: "i4", name: "Whole milk", amount: "3 tbsp" },
      { id: "i5", name: "Olive oil for frying", amount: "1 tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Make the batter",
        instruction:
          "Whisk together sweet potato, egg, flour and milk until smooth.",
        duration: 120,
      },
      {
        id: "s2",
        title: "Cook the pancakes",
        instruction:
          "Heat oil in a pan. Drop tablespoons of batter and cook for 2 minutes per side until golden and cooked through.",
        duration: 300,
        tip: "Keep them small — about 5cm — for easy self-feeding.",
      },
      {
        id: "s3",
        title: "Cool and serve",
        instruction:
          "Cool to a safe temperature. Serve as finger food or with a dollop of yoghurt.",
        duration: 120,
      },
    ],
  },
  {
    id: 37,
    name: "Broccoli & Pea Pasta",
    stage: "10 months+",
    tag: "Stage 3",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1646568109040-27893ba7d9fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A quick, vibrant green pasta that's as nutritious as it looks. The pea and broccoli sauce clings beautifully to small pasta shapes.",
    allergens: ["gluten", "milk"],
    servings: 2,
    nutrition: { calories: 138, protein: "6g", carbs: "22g", fat: "2.5g" },
    ingredients: [
      { id: "i1", name: "Small pasta shapes", amount: "50g" },
      { id: "i2", name: "Broccoli florets", amount: "60g" },
      { id: "i3", name: "Frozen peas", amount: "50g" },
      { id: "i4", name: "Cream cheese", amount: "1 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook pasta and vegetables",
        instruction:
          "Cook pasta in unsalted boiling water. Add broccoli for the last 5 minutes and peas for the last 2 minutes.",
        duration: 600,
      },
      {
        id: "s2",
        title: "Make the sauce",
        instruction:
          "Reserve a few tablespoons of pasta water. Drain and blend broccoli and peas with cream cheese and pasta water to make a sauce.",
        duration: 60,
      },
      {
        id: "s3",
        title: "Combine and serve",
        instruction:
          "Toss pasta with the green sauce until well coated. Serve warm.",
        duration: 60,
      },
    ],
  },
  {
    id: 38,
    name: "Melon & Cucumber Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&q=80",
    description:
      "Cooling, hydrating and refreshing — this no-cook purée is perfect for hot days or babies who need extra hydration.",
    allergens: [],
    servings: 2,
    nutrition: { calories: 22, protein: "0.5g", carbs: "5g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "Honeydew or cantaloupe melon", amount: "100g" },
      { id: "i2", name: "Cucumber, peeled & deseeded", amount: "40g" },
    ],
    steps: [
      {
        id: "s1",
        title: "Blend together",
        instruction:
          "Blend melon and cucumber together until completely smooth. No cooking required.",
        duration: 60,
        tip: "Chill the ingredients first for an extra-refreshing purée.",
      },
    ],
  },
  {
    id: 39,
    name: "Avocado & Cream Cheese Toast Strips",
    stage: "10 months+",
    tag: "Stage 3",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1695088223408-cd5ae3b2b7fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A quick, nutrient-dense finger food that combines healthy fats from avocado with calcium-rich cream cheese on soft toast.",
    allergens: ["gluten", "milk"],
    servings: 1,
    nutrition: { calories: 130, protein: "4g", carbs: "13g", fat: "7g" },
    ingredients: [
      { id: "i1", name: "Slice of soft bread", amount: "1 slice" },
      { id: "i2", name: "Ripe avocado, mashed", amount: "¼" },
      { id: "i3", name: "Cream cheese", amount: "1 tsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Prepare the toast",
        instruction:
          "Toast bread until just golden — not too crispy. Allow to cool slightly.",
        duration: 90,
      },
      {
        id: "s2",
        title: "Spread and cut",
        instruction:
          "Spread cream cheese on the toast, then top with mashed avocado. Cut into strips for easy self-feeding.",
        duration: 60,
      },
    ],
  },
  {
    id: 40,
    name: "Butterbean & Rosemary Purée",
    stage: "8 months+",
    tag: "Stage 2",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1707616954324-99c89a78a20d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Silky smooth butterbeans blended with a hint of rosemary make a surprisingly elegant purée that introduces babies to legumes and herbs.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 82, protein: "5g", carbs: "13g", fat: "0.5g" },
    ingredients: [
      { id: "i1", name: "Tinned butterbeans, rinsed", amount: "200g" },
      { id: "i2", name: "Fresh rosemary sprig", amount: "1 small" },
      { id: "i3", name: "Olive oil", amount: "1 tsp" },
      { id: "i4", name: "Cooled boiled water", amount: "4 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Warm with rosemary",
        instruction:
          "Gently heat olive oil with the rosemary sprig for 1 minute. Remove rosemary.",
        duration: 60,
        tip: "Infusing the oil transfers the rosemary flavour gently.",
      },
      {
        id: "s2",
        title: "Blend smooth",
        instruction:
          "Blend butterbeans with infused oil and water until completely smooth and creamy.",
        duration: 60,
      },
    ],
  },
  {
    id: 41,
    name: "Coconut Milk & Banana Porridge",
    stage: "7 months+",
    tag: "Stage 1",
    time: 10,
    image:
      "https://images.unsplash.com/photo-1593190466793-abd98e45ea34?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Oats cooked in coconut milk give this porridge a tropical creaminess that's completely irresistible. A dairy-free breakfast option.",
    allergens: ["gluten"],
    servings: 1,
    nutrition: { calories: 145, protein: "3g", carbs: "22g", fat: "5g" },
    ingredients: [
      { id: "i1", name: "Baby oats", amount: "3 tbsp" },
      { id: "i2", name: "Coconut milk", amount: "100ml" },
      { id: "i3", name: "Ripe banana, mashed", amount: "¼" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the oats",
        instruction:
          "Combine oats and coconut milk in a saucepan. Cook over low heat, stirring, for 3–4 minutes until thick and creamy.",
        duration: 240,
      },
      {
        id: "s2",
        title: "Stir in banana",
        instruction: "Stir in mashed banana and serve warm.",
        duration: 30,
      },
    ],
  },
  {
    id: 42,
    name: "Corn Chowder",
    stage: "9 months+",
    tag: "Stage 2",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400&q=80",
    description:
      "A thick, creamy chowder full of sweet corn flavour. Comforting for babies and satisfying enough to share with the whole family.",
    allergens: ["milk"],
    servings: 4,
    nutrition: { calories: 90, protein: "3g", carbs: "16g", fat: "2g" },
    ingredients: [
      { id: "i1", name: "Frozen sweet corn", amount: "150g" },
      { id: "i2", name: "Potato, peeled & diced", amount: "100g" },
      { id: "i3", name: "Whole milk", amount: "150ml" },
      { id: "i4", name: "Low-salt vegetable stock", amount: "150ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook potato",
        instruction: "Simmer potato in stock for 10 minutes until tender.",
        duration: 600,
      },
      {
        id: "s2",
        title: "Add corn and milk",
        instruction: "Add sweet corn and milk. Simmer for 5 more minutes.",
        duration: 300,
      },
      {
        id: "s3",
        title: "Blend partially",
        instruction:
          "Blend half the soup until smooth, then stir back into the chunky half for a creamy texture with some pieces.",
        duration: 60,
        tip: "This partial blending gives great texture for older babies.",
      },
    ],
  },
  {
    id: 43,
    name: "Green Bean & Potato Mash",
    stage: "7 months+",
    tag: "Stage 1",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1726514733355-02fe48ae6795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A simple, verdant mash that introduces green beans alongside familiar potato. Clean flavours that let the vegetables speak for themselves.",
    allergens: [],
    servings: 3,
    nutrition: { calories: 48, protein: "1.5g", carbs: "10g", fat: "0.2g" },
    ingredients: [
      { id: "i1", name: "Green beans, trimmed", amount: "80g" },
      { id: "i2", name: "Potato, peeled & cubed", amount: "120g" },
      { id: "i3", name: "Cooled boiled water", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam together",
        instruction:
          "Steam potato for 10 minutes, add green beans for the final 5 minutes until both are very tender.",
        duration: 900,
      },
      {
        id: "s2",
        title: "Blend smooth",
        instruction: "Blend with a little water until smooth.",
        duration: 60,
      },
    ],
  },
  {
    id: 44,
    name: "Pork & Apple Casserole",
    stage: "9 months+",
    tag: "Stage 2",
    time: 45,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    description:
      "Pork and apple is a timeless combination. This gentle casserole is slow-cooked until meltingly tender with a naturally sweet sauce.",
    allergens: [],
    servings: 5,
    nutrition: { calories: 98, protein: "9g", carbs: "8g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Lean pork mince", amount: "100g" },
      { id: "i2", name: "Eating apple, peeled & diced", amount: "1 medium" },
      { id: "i3", name: "Carrot, diced", amount: "80g" },
      { id: "i4", name: "Low-salt pork or chicken stock", amount: "200ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Brown the pork",
        instruction: "Cook pork mince in a dry pan until browned all over.",
        duration: 300,
      },
      {
        id: "s2",
        title: "Add apple, carrot and stock",
        instruction:
          "Add apple, carrot and stock. Simmer gently for 30 minutes until everything is very tender.",
        duration: 1800,
        tip: "The apple breaks down and thickens the sauce naturally.",
      },
      {
        id: "s3",
        title: "Blend or mash",
        instruction:
          "Blend to desired consistency depending on your baby's stage.",
        duration: 60,
      },
    ],
  },
  {
    id: 45,
    name: "Banana & Chia Seed Pudding",
    stage: "9 months+",
    tag: "Stage 2",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1702728052103-69473aa7ed77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Chia seeds soaked overnight with banana and milk create a thick, pudding-like breakfast rich in omega-3 and fibre.",
    allergens: ["milk"],
    servings: 1,
    nutrition: { calories: 115, protein: "4g", carbs: "16g", fat: "4g" },
    ingredients: [
      { id: "i1", name: "Chia seeds", amount: "1 tbsp" },
      { id: "i2", name: "Full-fat milk or formula", amount: "80ml" },
      { id: "i3", name: "Ripe banana, mashed", amount: "½" },
    ],
    steps: [
      {
        id: "s1",
        title: "Mix and refrigerate overnight",
        instruction:
          "Stir chia seeds into milk. Cover and refrigerate overnight — the seeds will absorb the milk and swell.",
        duration: 60,
        tip: "Make this the night before for an effortless morning.",
      },
      {
        id: "s2",
        title: "Serve with banana",
        instruction:
          "Stir in mashed banana and serve cold or at room temperature.",
        duration: 30,
      },
    ],
  },
  {
    id: 46,
    name: "Leek & Potato Soup",
    stage: "8 months+",
    tag: "Stage 2",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1616501268826-ee9731c915d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A classic vichyssoise-style soup that's wonderfully creamy without any cream. Leek adds a gentle onion flavour that babies often love.",
    allergens: [],
    servings: 5,
    nutrition: { calories: 55, protein: "1.5g", carbs: "11g", fat: "0.5g" },
    ingredients: [
      {
        id: "i1",
        name: "Leek, thinly sliced (white part only)",
        amount: "100g",
      },
      { id: "i2", name: "Potato, peeled & cubed", amount: "150g" },
      { id: "i3", name: "Olive oil", amount: "1 tsp" },
      { id: "i4", name: "Low-salt vegetable stock", amount: "300ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Soften the leek",
        instruction:
          "Warm oil in a pan. Cook leek over low heat for 5 minutes until completely soft.",
        duration: 300,
        tip: "The white part is milder — avoid the dark green tops for babies.",
      },
      {
        id: "s2",
        title: "Simmer with potato and stock",
        instruction:
          "Add potato and stock. Simmer for 15 minutes until potato is completely tender.",
        duration: 900,
      },
      {
        id: "s3",
        title: "Blend until silky",
        instruction: "Blend until very smooth.",
        duration: 60,
      },
    ],
  },
  {
    id: 47,
    name: "Soft Baked Banana Fingers",
    stage: "10 months+",
    tag: "Stage 3",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1768701545045-57e97e2d479c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Three-ingredient banana fingers that are naturally sweet, soft and perfectly sized for little hands. No sugar, no fuss.",
    allergens: ["gluten", "eggs"],
    servings: 6,
    nutrition: { calories: 45, protein: "1.5g", carbs: "8g", fat: "0.8g" },
    ingredients: [
      { id: "i1", name: "Ripe banana, mashed", amount: "1 large" },
      { id: "i2", name: "Egg", amount: "1 large" },
      { id: "i3", name: "Baby oats or plain flour", amount: "3 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Mix the batter",
        instruction:
          "Mash banana, whisk in the egg and stir in oats. Mix until just combined.",
        duration: 60,
      },
      {
        id: "s2",
        title: "Bake",
        instruction:
          "Spoon into finger shapes on a lined baking tray. Bake at 180°C for 12 minutes until golden and set.",
        duration: 720,
        tip: "They firm up more as they cool — don't overbake.",
      },
      {
        id: "s3",
        title: "Cool completely",
        instruction:
          "Cool fully before serving. Store in an airtight container for up to 2 days.",
        duration: 300,
      },
    ],
  },
  {
    id: 48,
    name: "Kiwi & Spinach Purée",
    stage: "8 months+",
    tag: "Stage 2",
    time: 5,
    image:
      "https://images.unsplash.com/photo-1709904666777-456c34e9b357?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A bold, tangy purée that packs an enormous vitamin C punch. The kiwi masks the spinach completely — perfect for green-vegetable avoiders.",
    allergens: [],
    servings: 2,
    nutrition: { calories: 38, protein: "1.2g", carbs: "8g", fat: "0.3g" },
    ingredients: [
      { id: "i1", name: "Ripe kiwi, peeled", amount: "2 medium" },
      { id: "i2", name: "Baby spinach", amount: "20g" },
    ],
    steps: [
      {
        id: "s1",
        title: "Blend together",
        instruction:
          "Blend kiwi and spinach together until completely smooth. No cooking required.",
        duration: 60,
        tip: "Very ripe kiwi is sweeter and easier to blend.",
      },
    ],
  },
  {
    id: 49,
    name: "Quinoa & Vegetable Bowl",
    stage: "9 months+",
    tag: "Stage 2",
    time: 25,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    description:
      "Quinoa is a complete protein — rare in plant foods — making this a nutritionally exceptional meal. Soft enough for babies, filling enough for the family.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 95, protein: "5g", carbs: "16g", fat: "1.5g" },
    ingredients: [
      { id: "i1", name: "Quinoa, rinsed", amount: "60g" },
      { id: "i2", name: "Carrot, finely diced", amount: "60g" },
      { id: "i3", name: "Courgette, finely diced", amount: "60g" },
      { id: "i4", name: "Low-salt vegetable stock", amount: "200ml" },
    ],
    steps: [
      {
        id: "s1",
        title: "Cook the quinoa",
        instruction:
          "Combine quinoa and stock in a saucepan. Bring to a boil, then simmer covered for 15 minutes until liquid is absorbed and quinoa is fluffy.",
        duration: 900,
        tip: "Rinse quinoa well to remove any bitterness.",
      },
      {
        id: "s2",
        title: "Steam the vegetables",
        instruction:
          "Steam carrot and courgette until completely tender — about 8 minutes.",
        duration: 480,
      },
      {
        id: "s3",
        title: "Combine and serve",
        instruction:
          "Stir vegetables into quinoa. Mash or blend for younger babies, serve as-is for older babies exploring texture.",
        duration: 60,
      },
    ],
  },
  {
    id: 50,
    name: "Soft Polenta with Roasted Cherry Tomatoes",
    stage: "10 months+",
    tag: "Stage 3",
    time: 20,
    image:
      "https://images.unsplash.com/photo-1676547480642-3e056a4137e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Creamy polenta is an underrated baby food — silky, filling and endlessly versatile. Paired with sweet roasted tomatoes it makes a meal that feels genuinely special.",
    allergens: ["milk"],
    servings: 3,
    nutrition: { calories: 110, protein: "3g", carbs: "18g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Fine polenta (quick-cook)", amount: "50g" },
      { id: "i2", name: "Whole milk", amount: "200ml" },
      { id: "i3", name: "Water", amount: "100ml" },
      { id: "i4", name: "Cherry tomatoes", amount: "100g" },
      { id: "i5", name: "Olive oil", amount: "1 tsp" },
      { id: "i6", name: "Parmesan, finely grated", amount: "10g" },
    ],
    steps: [
      {
        id: "s1",
        title: "Roast the tomatoes",
        instruction:
          "Halve tomatoes, toss with olive oil and roast at 180°C for 15 minutes until soft and slightly caramelised.",
        duration: 900,
      },
      {
        id: "s2",
        title: "Cook the polenta",
        instruction:
          "Bring milk and water to a gentle simmer. Whisk in polenta and cook, stirring constantly, for 5 minutes until thick and creamy.",
        duration: 300,
        tip: "Keep stirring — polenta sticks quickly if left alone.",
      },
      {
        id: "s3",
        title: "Finish and serve",
        instruction:
          "Stir parmesan into the polenta. Spoon into a bowl and top with the roasted tomatoes.",
        duration: 60,
      },
    ],
  },
  {
    id: 1,
    name: "Sweet Potato Purée",
    stage: "6 months+",
    tag: "Stage 1",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1708771862265-f54741c65a89?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A silky, naturally sweet purée that's perfect for your baby's very first tastes. Sweet potato is rich in beta-carotene and easy on tiny tummies.",
    allergens: [],
    servings: 4,
    nutrition: { calories: 45, protein: "1g", carbs: "10g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "Sweet potato, peeled & cubed", amount: "200g" },
      {
        id: "i2",
        name: "Breast milk or formula (to thin)",
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
          "Transfer the cooked sweet potato to a blender. Blend on high, adding breast milk or formula a tablespoon at a time until smooth and lump-free.",
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
          "Using a fork, mash everything together until you reach your desired consistency. For younger babies, mash until completely smooth.",
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
          "Peel and cube the butternut squash into even 2cm pieces. Peel, core and slice the apple.",
        duration: 300,
        tip: "A Y-peeler makes squash prep much easier.",
      },
      {
        id: "s2",
        title: "Simmer gently",
        instruction:
          "Place squash, apple and water in a small saucepan. Cover and cook over medium-low heat until the squash is completely soft.",
        duration: 720,
        tip: "Keep the heat gentle — you want to steam-cook, not boil dry.",
      },
      {
        id: "s3",
        title: "Blend smooth",
        instruction:
          "Pour everything into a blender including any remaining liquid and blend until very smooth.",
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
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&q=80https://images.unsplash.com/photo-1662469843203-b63638ace131?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1662469843203-b63638ace131?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          "Place frozen peas in a saucepan with boiling water. Simmer for 3 minutes — you want them vibrant green, not grey.",
        duration: 180,
        tip: "Don't overcook. Green = fresh = more nutrients.",
      },
      {
        id: "s2",
        title: "Blend with mint",
        instruction:
          "Drain the peas and transfer to a blender with the mint leaves and water. Blend until very smooth.",
        duration: 60,
        tip: "Pass through a fine sieve for an ultra-smooth texture.",
      },
      {
        id: "s3",
        title: "Sieve & serve",
        instruction:
          "For very young babies, push through a fine mesh sieve to remove any remaining skins. Serve at room temperature or gently warmed.",
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
      "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          "Warm olive oil in a saucepan over medium heat. Add grated ginger and cook for 1 minute, stirring, until fragrant.",
        duration: 60,
        tip: "Don't let the ginger brown — keep it moving.",
      },
      {
        id: "s2",
        title: "Cook the carrots",
        instruction:
          "Add the sliced carrots and stock. Bring to a gentle boil, then reduce heat, cover and simmer until carrots are completely tender.",
        duration: 900,
        tip: "Use a no-added-salt baby stock or make your own.",
      },
      {
        id: "s3",
        title: "Blend & adjust",
        instruction:
          "Blend everything until completely smooth. If too thick, add a little extra cooled boiled water.",
        duration: 60,
        tip: "For Stage 2 babies you can leave a little texture.",
      },
    ],
  },

  {
    id: 7,
    name: "Broccoli & Cheese Mash",
    stage: "7 months+",
    tag: "Stage 1",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1583953609873-cd64920721ce?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Mild cheddar transforms simple steamed broccoli into something babies genuinely enjoy. A great way to introduce green vegetables.",
    allergens: ["milk"],
    servings: 3,
    nutrition: { calories: 55, protein: "3g", carbs: "4g", fat: "3g" },
    ingredients: [
      { id: "i1", name: "Broccoli florets", amount: "150g" },
      { id: "i2", name: "Mild cheddar, grated", amount: "20g" },
      { id: "i3", name: "Breast milk or formula", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Steam the broccoli",
        instruction:
          "Steam broccoli florets for 6–8 minutes until completely tender.",
        duration: 480,
        tip: "Overcooking slightly is fine here — you want it very soft.",
      },
      {
        id: "s2",
        title: "Mash with cheese",
        instruction:
          "Transfer to a bowl and mash well. Add the grated cheddar and milk and continue mashing until combined and creamy.",
        duration: 120,
        tip: "The heat of the broccoli will melt the cheese beautifully.",
      },
    ],
  },
  {
    id: 8,
    name: "Apple & Pear Compote",
    stage: "6 months+",
    tag: "Stage 1",
    time: 15,
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
    description:
      "A gently cooked fruit purée that works as a first breakfast or a sweet finish to a savoury meal. Naturally sweet with no added sugar.",
    allergens: [],
    servings: 5,
    nutrition: { calories: 40, protein: "0.3g", carbs: "10g", fat: "0.1g" },
    ingredients: [
      { id: "i1", name: "Eating apple, peeled & chopped", amount: "1 large" },
      { id: "i2", name: "Ripe pear, peeled & chopped", amount: "1 large" },
      { id: "i3", name: "Water", amount: "2 tbsp" },
    ],
    steps: [
      {
        id: "s1",
        title: "Simmer the fruit",
        instruction:
          "Place apple, pear and water in a saucepan. Cover and cook over low heat for 8–10 minutes until completely soft.",
        duration: 600,
        tip: "Stir occasionally to prevent sticking.",
      },
      {
        id: "s2",
        title: "Blend or mash",
        instruction:
          "Blend until smooth for young babies, or mash with a fork for a slightly textured compote for older babies.",
        duration: 60,
      },
    ],
  },
];

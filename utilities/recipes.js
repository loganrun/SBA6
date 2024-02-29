

const recipes = [
    {
      "user_id": 1,
      "id": 1,
      "title": "Lorem Ipsum Salad",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/shrimp_salad.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 2,
      "id": 2,
      "title": "Lorem Ipsum Soup",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/beef_stew.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 3,
      "id": 3,
      "title": "Lorem Ipsum Pasta",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/shrimp_pasta.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 1,
      "id": 4,
      "title": "Lorem Ipsum Pizza",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/real_pizza.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 2,
      "id": 5,
      "title": "Lorem Ipsum Burger",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/burgers.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 3,
      "id": 6,
      "title": "Lorem Ipsum Sandwich",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/sandwich.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 1,
      "id": 7,
      "title": "Lorem Ipsum Tacos",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/shrimp_tacos.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 2,
      "id": 8,
      "title": "Lorem Ipsum Stir Fry",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/veg-stir.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 3,
      "id": 9,
      "title": "Lorem Ipsum Sushi",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/sushi.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 1,
      "id": 10,
      "title": "Lorem Ipsum Curry",
      "ingredients": ["Lorem ipsum", "Dolor sit amet", "Consectetur adipiscing elit"],
      "images": "../images/curry.jpg",
      "directions": "1. Lorem ipsum dolor sit amet.\n2. Consectetur adipiscing elit.\n3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "user_id": 2,
      "id": 11,
      "title": "Spaghetti Carbonara",
      "ingredients": ["200g spaghetti", "2 large eggs", "100g pancetta", "50g grated Parmesan cheese", "Salt and black pepper"],
      "images": "../images/caberna_pasta.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 3,
      "id": 12,
      "title": "Chicken Alfredo Pasta",
      "ingredients": ["250g fettuccine pasta", "2 chicken breasts", "200ml heavy cream", "50g butter", "2 cloves garlic", "50g grated Parmesan cheese", "Salt and black pepper"],
      "images": "../images/more-pasta.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 1,
      "id": 13,
      "title": "Classic Margherita Pizza",
      "ingredients": ["Pizza dough", "200g mozzarella cheese", "100g tomato sauce", "Fresh basil leaves", "Olive oil"],
      "images": "../images/fofo_pizza.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 2,
      "id": 14,
      "title": "Beef Tacos",
      "ingredients": ["300g ground beef", "6 taco shells", "1 tomato", "1 onion", "Lettuce", "50g shredded cheddar cheese", "Sour cream", "Taco seasoning"],
      "images": "../images/beef_tacos.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 3,
      "id": 15,
      "title": "Chocolate Chip Cookies",
      "ingredients": ["200g all-purpose flour", "100g butter", "100g brown sugar", "1 egg", "100g chocolate chips", "1 tsp vanilla extract"],
      "images": "../images/cookies.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 1,
      "id": 16,
      "title": "Caesar Salad",
      "ingredients": ["1 head romaine lettuce", "50g croutons", "25g grated Parmesan cheese", "Caesar dressing"],
      "images": "../images/ceaser_salad.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 2,
      "id": 17,
      "title": "Vegetable Stir Fry",
      "ingredients": ["Assorted vegetables (bell peppers, broccoli, carrots, etc.)", "150g tofu", "2 tbsp soy sauce", "1 tbsp sesame oil", "2 cloves garlic", "1 tsp ginger"],
      "images": "../images/veg_stirfry.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    },
    {
      "user_id": 2,
      "id": 18,
      "title": "Pancakes",
      "ingredients": ["200g all-purpose flour", "2 eggs", "200ml milk", "2 tbsp sugar", "1 tsp baking powder", "Butter", "Maple syrup"],
      "images": "../images/pancakes.jpg",
      "directions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget leo ac massa tempor ultricies et id odio."
    }
  ]

  module.exports = recipes;
  
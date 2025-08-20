import macbookImage from '../assets/images/mackos.jpg';

const products = [
  {
    id: 1,
    title: "MacBook Pro M2",
    category: "Laptops",
    brand: "Apple",
    description: "Latest model with high performance and sleek design.",
    price: 1299.99,
    specifications: {
      processor: "M2 Chip",
      ram: "16GB",
      storage: "512GB SSD"
    },
    imageUrl: macbookImage,
    inStock: true,
    rating: 4.8,
    reviews: []
  },
    {
        id: 2,
        title: "Galaxy S21",
        category: "Smartphones",
        brand: "Samsung",
        description: "Flagship smartphone with stunning display and camera.",
        price: 799.99,
        specifications: {
        processor: "Exynos 2100",
        ram: "8GB",
        storage: "128GB"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.5,
        reviews: []
    },
    {
        id: 3,
        title: "Sony WH-1000XM4",
        category: "Audio",
        brand: "Sony",
        description: "Industry-leading noise-canceling headphones.",
        price: 349.99,
        specifications: {
        batteryLife: "30 hours",
        connectivity: "Bluetooth 5.0"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.7,
        reviews: []
    },
    {
        id: 4,
        title: "LG OLED TV",
        category: "TVs",
        brand: "LG",
        description: "Stunning 4K OLED display with smart features.",
        price: 1499.99,
        specifications: {
        screenSize: "55 inches",
        resolution: "4K"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.6,
        reviews: []
    },
    {
        id: 5,
        title: "Dell XPS 13",
        category: "Laptops",
        brand: "Dell",
        description: "Compact and powerful laptop with InfinityEdge display.",
        price: 999.99,
        specifications: {
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.5,
        reviews: []
    },
    {
        id: 6,
        title: "Apple AirPods Pro",
        category: "Audio",
        brand: "Apple",
        description: "Wireless earbuds with active noise cancellation.",
        price: 249.99,
        specifications: {
        batteryLife: "4.5 hours",
        connectivity: "Bluetooth 5.0"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.8,
        reviews: []
    },
    {
        id: 7,
        title: "Samsung Galaxy Buds Pro",
        category: "Audio",
        brand: "Samsung",
        description: "Premium wireless earbuds with great sound quality.",
        price: 199.99,
        specifications: {
            batteryLife: "5 hours",
            connectivity: "Bluetooth 5.0"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.6,
        reviews: []
    },
    {
        id: 8,
        title: "LG Gram 17",
        category: "Laptops",
        brand: "LG",
        description: "Lightweight laptop with a large display.",
        price: 1799.99,
        specifications: {
            processor: "Intel Core i7",
            ram: "16GB",
            storage: "1TB SSD"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.4,
        reviews: []
    },
    {
        id: 9,
        title: "Sony A7 III",
        category: "Cameras",
        brand: "Sony",
        description: "Full-frame mirrorless camera with excellent low-light performance.",
        price: 1999.99,
        specifications: {
            sensorType: "Full-frame",
            resolution: "24.2 MP"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.9,
        reviews: []
    },
    {
        id: 10,
        title: "Apple Watch Series 7",
        category: "Wearables",
        brand: "Apple",
        description: "Smartwatch with fitness tracking and health monitoring.",
        price: 399.99,
        specifications: {
            batteryLife: "18 hours",
            connectivity: "Bluetooth 5.0"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.7,
        reviews: []
    },
    {
        id: 11,
        title: "LG UltraGear Monitor",
        category: "Monitors",
        brand: "LG",
        description: "High refresh rate gaming monitor with G-Sync support.",
        price: 599.99,
        specifications: {
            screenSize: "27 inches",
            resolution: "1440p"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.5,
        reviews: []
    },
    {
        id: 12,
        title: "Dell UltraSharp Monitor",
        category: "Monitors",
        brand: "Dell",
        description: "Professional-grade monitor with excellent color accuracy.",
        price: 799.99,
        specifications: {
            screenSize: "32 inches",
            resolution: "4K"
        },
        imageUrl: macbookImage,
        inStock: true,
        rating: 4.6,
        reviews: []
    }
];

export const categories = ["Laptops", "Smartphones", "Audio", "Accessories", "TVs"];
export const brands = ["Apple", "Samsung", "Sony", "LG", "Dell"];

export default products;
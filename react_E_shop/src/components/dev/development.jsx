import React from "react";

const Development = () => {
    return (
        <div>
            <pre>
                {`// 
GET /products

url: /products?page=2&limit=20

Query Parameters type:
- page: number (ទំព័រដែលត្រូវការ, default = 1)
- limit: number (ចំនួន products ក្នុងមួយទំព័រ, default = 10)

Response:
 {
  "products": [
    {
      "id": 232,
      "name": "Wireless Headphones",
      "price": 99.99,
      "description": "High-quality wireless headphones with noise-cancellation and long battery life.",
      "type": "electronics",
      "imageUrl": "https://example.com/images/wireless-headphones.jpg"
    },
    {
      "id": 233,
      "name": "Running Shoes",
      "price": 79.99,
      "description": "Comfortable and durable running shoes suitable for all terrains.",
      "type": "footwear",
      "imageUrl": "https://example.com/images/running-shoes.jpg"
    },
    {
      "id": 234,
      "name": "Smartwatch",
      "price": 199.99,
      "description": "Feature-packed smartwatch with fitness tracking, heart rate monitoring, and notifications.",
      "type": "electronics",
      "imageUrl": "https://example.com/images/smartwatch.jpg"
    },
    ...
  ]
  
,
  "totalPages": 1,
  "currentPage": 1
}



GET /products/search

  url: /products/search?value=shirt&page=2&limit=20

Query Parameters type:
- value: string (ពាក្យគន្លឹះសម្រាប់ស្វែងរក)
- page: number
- limit: number

Response: (ទម្រង់ដូចគ្នានឹង All Products)


GET /products/filter

Query Parameters type:
- type: string (ប្រភេទ product ដែលត្រូវការ filter)
- page: number
- limit: number

Response: (ទម្រង់ដូចគ្នានឹង All Products)



// 

GET /products/{id}

Parameters type:
- id: number (path parameter)

Response:
[{
  "id": 235,
  "name": "4K Ultra HD Smart TV",
  "price": 499.99,
  "description": "Experience stunning visuals with this 55-inch 4K Ultra HD Smart TV, featuring HDR support and voice control.",
  "type": "electronics",
  "imageUrl": "https://example.com/images/4k-smart-tv.jpg",
  "stock": 50,
  "ratings": 4.7,
  "reviews": [
    {
      "id": 1,
      "userId": 101,
      "rating": 5
    },
    {
      "id": 2,
      "userId": 102,
      "rating": 4
    },
    {
      "id": 3,
      "userId": 103,
      "rating": 5
    },...
  ]
}

]
"
      `}
            </pre>
        </div>
    );
};

export default Development;

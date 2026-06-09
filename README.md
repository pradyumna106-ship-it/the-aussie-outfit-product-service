# the-aussie-outfit-product-service

A lightweight Node.js product service for The Aussie Outfit — provides product data, search, and CRUD operations for e-commerce use. Built with Express.js and MongoDB for microservice architecture.

## Features

- Product listing and detailed product information
- Brand and category management
- Product variants handling (sizes, colors, etc.)
- Create, Read, Update, Delete (CRUD) operations for products, brands, and categories
- Search and filtering capabilities
- CORS support for cross-origin requests
- File upload support for product images
- REST API suitable for microservice architecture

## Tech Stack

- **Language:** Node.js (ES Modules)
- **Framework:** Express.js 5.2.1
- **Database:** MongoDB (using Mongoose 9.6.1)
- **Build Tool:** npm
- **Package Manager:** npm with package-lock.json
- **File Upload:** Multer 2.1.1
- **Development:** Nodemon for hot-reload, Vitest for testing
- **Deployment:** Vercel, Docker

## Getting Started

### Prerequisites

- Node.js 20+ (see Dockerfile for version)
- MongoDB instance
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/pradyumna106-ship-it/the-aussie-outfit-product-service.git
   cd the-aussie-outfit-product-service
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure environment

   Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=5007
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the service

   **Development mode:**
   ```bash
   npm run dev
   ```

   **Production mode:**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:5007`

## API Endpoints

### Products

- `GET /products` — list all products
- `GET /products/:id` — get product details by ID
- `POST /products` — create a new product (with file upload support)
- `PUT /products/:id` — update a product
- `DELETE /products/:id` — delete a product

### Brands

- `GET /brands` — list all brands
- `POST /brands` — create a new brand
- `PUT /brands/:id` — update a brand
- `DELETE /brands/:id` — delete a brand

### Categories

- `GET /categories` — list all categories
- `GET /categories/:id` — get category details
- `POST /categories` — create a new category
- `PUT /categories/:id` — update a category
- `DELETE /categories/:id` — delete a category
- `GET /categories/:id/products` — get products in a category

### Static Files

- `GET /uploads/*` — access uploaded product images

## Project Structure

```
src/
├── index.js                 # Application entry point
├── app.js                   # Express app configuration
├── config/
│   ├── database.js         # MongoDB connection configuration
│   └── constant.js         # Application constants
├── models/
│   ├── product.js          # Product schema
│   ├── brand.js            # Brand schema
│   ├── category.js         # Category schema
│   └── productVariant.js   # Product variant schema
├── route/
│   ├── product.js          # Product routes
│   ├── brand.js            # Brand routes
│   └── catrgory.js         # Category routes (note: filename has typo)
└── controller/
    ├── product.js          # Product business logic
    ├── brand.js            # Brand business logic
    └── category.js         # Category business logic
```

## CORS Configuration

The service is configured with CORS to allow requests from:

- Origin: `http://localhost:5173`
- Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
- Headers: Content-Type
- Credentials: Enabled

Update the CORS configuration in `src/app.js` for production use.

## Testing

Run unit and integration tests:

```bash
npm test
```

Watch mode for development:

```bash
npm run test:watch
```

## Docker Deployment

The project includes a Dockerfile for containerization:

```bash
docker build -t aussie-outfit-product-service .
docker run -p 5007:5007 aussie-outfit-product-service
```

## Vercel Deployment

The project is configured for Vercel deployment via `vercel.json`. Deploy with:

```bash
vercel deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC - See package.json for details

## Contact

For issues or feature requests, open an issue in this repository or contact the development team.

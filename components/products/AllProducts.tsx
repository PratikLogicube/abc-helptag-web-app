import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Helmet Emergency Blood Group Sticker",
    variants: "A+, B+, AB+, O+, A-, B-, AB-, O-",
    price: "Rs.299",
    originalPrice: "599",
    badge: "Best Seller",
    badgeColor: "bg-green-500",
    image: "/placeholder-helmet-sticker.jpg", // Placeholder for the image
  },
  {
    id: 2,
    title: "Bike Emergency Medical ID Sticker",
    description: "Bigger in size",
    price: "Rs.329",
    originalPrice: "649",
    image: "/placeholder-bike-sticker.jpg", // Placeholder for the image
  },
  {
    id: 3,
    title: "Car Emergency Sticker",
    description: "Bigger reverse sticking",
    price: "Rs.349",
    originalPrice: "699",
    badge: "Sale",
    badgeColor: "bg-red-500",
    image: "/placeholder-car-sticker.jpg", // Placeholder for the image
  },
];

const AllProducts = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-6 text-center mt-4">
          All Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md p-4 z-10"
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute z-0 top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              )}
              {/* Product Image Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              {/* Product Details */}
              <h3 className="text-lg font-semibold text-black mb-2">
                {product.title}
              </h3>
              {product.variants && (
                <p className="text-sm text-gray-600 font-light mb-2">
                  {product.variants}
                </p>
              )}
              {product.description && (
                <p className="text-sm text-gray-600 font-light mb-2">
                  {product.description}
                </p>
              )}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-base font-semibold text-black">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              </div>
              {/* View Product Button */}
              <Link href={`/products/${product.id}`}>
                <button className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white text-sm font-semibold py-2 rounded-md hover:from-purple-600 hover:to-red-600">
                  View product →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

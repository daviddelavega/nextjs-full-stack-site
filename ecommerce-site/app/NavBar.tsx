import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/products"
              className="hover:text-black"
            >
              Products
            </Link>
          </div>
          <div>
            <Link
              href="/cart"
              className="hover:text-black"
            >
              Cart
            </Link>
          </div>
          <div>
            <Link
              href="/checkout"
              className="hover:text-black"
            >
              Checkout
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

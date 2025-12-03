export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} SeedCo. All rights reserved.
      </div>
    </footer>
  );
}

const navigations = [
  { name: "Solution", href: "" },
  { name: "Pricing", href: "" },
  { name: "Products", href: "" },
  { name: "Resources", href: "" },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between m-8 text-sm font-primary">
      <div className="flex items-center gap-8 font-semibold">
        <img className="w-10" src="/icon.png" />
        {navigations.map((navigation) => (
          <div key={navigation.name} className="flex items-center gap-2">
            <div className="flex items-center">{navigation.name}</div>
            {navigation.name == "Products" && (
              <span className="w-1 h-1 p-1.5 bg-red-400 rounded-full"></span>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="font-bold">Sign in</button>
        <button className="bg-[#e2e6eb] rounded-full px-5 py-3 font-bold">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

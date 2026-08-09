import { FaGooglePlay } from "react-icons/fa";

interface AppStore {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const appStores: AppStore[] = [
  {
    name: "Google Play",
    icon: <FaGooglePlay className="h-4 w-4 text-white" style={{ filter: "brightness(1.2)" }} />,
    href: "#",
  },
];

export function AppStores() {
  return (
    <div className="flex flex-wrap gap-3">
      {appStores.map((store) => (
        <a
          key={store.name}
          href={store.href}
          className={`flex items-center gap-2 rounded px-4 py-2 text-white hover:opacity-90 transition ${
            store.name === "App Store" ? "bg-black" : "bg-black"
          }`}
        >
          {store.icon}
          <span className="text-xs font-semibold">{store.name}</span>
        </a>
      ))}
    </div>
  );
}

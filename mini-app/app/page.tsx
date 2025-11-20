import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <img className="size-[512px]" src="/logo.png" alt="App Logo" width={512} height={512} />
      <span className="text-muted-foreground">{description}</span>
    </main>
  );
}

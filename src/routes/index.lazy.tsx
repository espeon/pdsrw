import { SmartSearchBar } from "@/components/smartSearchBar";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { AtSign, Star } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <main className="min-h-screen relative max-w-[100vw]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center md:min-h-[80vh]">
          {/* Header section */}
          <AtSign className="text-blue-500 mb-4" height={64} width={64} />
          <div className="text-center space-y-4 mb-4">
            <p className="text-xl text-muted-foreground md:max-w-[600px] mx-auto">
              Enter a user, collection, or repo to get started.
            </p>
          </div>
          {/* Search section */}
          <div className="w-full max-w-xl mx-auto">
            <SmartSearchBar />
          </div>
          <div className="flex justify-center items-center gap-x-2 mt-4">
            <div className="flex flex-row gap-x-1 text-muted-foreground">
              <Star /> Try:
            </div>
            <div className="md:flex md:flex-row space-y-1 md:space-x-1 md:space-y-0">
              <Link href="/at:/danabra.mov" className="text-blue-500">
                <div className="bg-muted text-muted-foreground rounded-full px-2">
                  at://danabra.mov
                </div>
              </Link>
              <Link
                href="/at://kot.pink/app.bsky.feed.post"
                className="text-blue-500"
              >
                <div className="bg-muted text-muted-foreground rounded-full px-2">
                  at://kot.pink/app.bsky.feed.post
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

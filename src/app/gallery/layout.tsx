import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import "@/styles/gallery.css";

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#050505] relative">
            <Header />
            {/* <BackgroundBeams className="opacity-40" /> */}
            <div className="relative z-10">
                <GalleryHero />
                {children}
            </div>
            <Footer />
        </div>
    );
}

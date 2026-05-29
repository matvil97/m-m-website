import HeroCarousel from "@/components/HeroCarousel";
import InviteSection from "@/components/InviteSection";
import DonationCounter from "@/components/DonationCounter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2d2420]">
      <HeroCarousel />
      <InviteSection />
      <DonationCounter />
    </main>
  );
}
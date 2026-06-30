import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMemberBySlug, getFromLabel, getRoleLabel } from "@/lib/weddingParty";
import DemandePage from "./DemandePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Mariage Matthieu & Melly" };
  return {
    title: `${member.name} — Demande officielle · Matthieu & Melly`,
    description: `${getFromLabel(member.from)} t'a réservé un rôle très spécial.`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();
  return <DemandePage member={member} />;
}

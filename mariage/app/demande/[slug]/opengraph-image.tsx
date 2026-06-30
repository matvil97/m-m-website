import { ImageResponse } from "next/og";
import { getMemberBySlug, getRoleLabel, getFromLabel } from "@/lib/weddingParty";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  const name      = member?.name     ?? "";
  const roleLabel = member ? getRoleLabel(member.role, member.from) : "";
  const fromLabel = member ? getFromLabel(member.from) : "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F2",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Cadre bordeaux */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "2px solid #6B2737",
            borderRadius: 24,
          }}
        />

        {/* Coin décoratif haut-gauche */}
        <div style={{ position: "absolute", top: 55, left: 55, color: "#D9C4A8", fontSize: 28, display: "flex" }}>✦</div>
        <div style={{ position: "absolute", top: 55, right: 55, color: "#D9C4A8", fontSize: 28, display: "flex" }}>✦</div>
        <div style={{ position: "absolute", bottom: 55, left: 55, color: "#D9C4A8", fontSize: 28, display: "flex" }}>✦</div>
        <div style={{ position: "absolute", bottom: 55, right: 55, color: "#D9C4A8", fontSize: 28, display: "flex" }}>✦</div>

        {/* Contenu centré */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Étiquette */}
          <p
            style={{
              color: "#6B2737",
              fontSize: 20,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 24,
            }}
          >
            Demande officielle · {fromLabel}
          </p>

          {/* Anneau */}
          <div style={{ fontSize: 48, marginBottom: 24, display: "flex" }}>💍</div>

          {/* Prénom */}
          <h1
            style={{
              color: "#2A1518",
              fontSize: 96,
              fontWeight: 300,
              margin: 0,
              marginBottom: 12,
              lineHeight: 1,
            }}
          >
            {name},
          </h1>

          {/* Rôle */}
          <p
            style={{
              color: "#4A1020",
              fontSize: 38,
              fontWeight: 300,
              margin: 0,
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            veux-tu être {roleLabel} ?
          </p>

          {/* Séparateur */}
          <div
            style={{
              width: 80,
              height: 2,
              background: "#D9C4A8",
              marginBottom: 32,
            }}
          />

          {/* Signature */}
          <p
            style={{
              color: "#6B2737",
              fontSize: 36,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Matthieu & Melly
          </p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

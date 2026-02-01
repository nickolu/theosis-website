import { generateMusicAlbumSchema } from "@/lib/structured-data";

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateMusicAlbumSchema()),
        }}
      />
      {children}
    </>
  );
}

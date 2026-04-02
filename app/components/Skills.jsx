'use client';

import CircularGallery from "./CircularGallery";

export default function Skills() {
  const skills = [
    { name: 'React', image: 'https://cdn.simpleicons.org/react' },
    { name: 'Next.js', image: 'https://cdn.simpleicons.org/nextjs' },
    { name: 'Tailwind CSS', image: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'JavaScript', image: 'https://cdn.simpleicons.org/javascript' },
    { name: 'HTML & CSS', image: 'https://cdn.simpleicons.org/html5' },
    { name: 'Laravel', image: 'https://cdn.simpleicons.org/laravel' },
  ];

  const galleryItems = skills.map(skill => ({
    text: skill.name,
    image: skill.image
  }));

  return (
    <div className="w-full py-16 md:py-24">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Keahlian Saya
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          Beberapa teknologi dan tools yang saya gunakan dalam mengembangkan website dan aplikasi
        </p>
      </div>

      {/* CircularGallery - Full Width */}
      <div className="w-screen h-96 md:h-96">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 24px sans-serif"
          scrollSpeed={2}
          scrollEase={0.05}
          autoRotate={true}
          autoRotateSpeed={0.3}
          disableInteraction={true}
        />
      </div>
    </div>
  );
}

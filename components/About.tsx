export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          About Me
        </h2>
        {/* First Paragraph */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Hello! I'm David, a passionate developer based in Portugal. I enjoy
          creating things that live on the internet, whether that be websites,
          applications, or anything in between.
        </p>
        {/* Second Paragraph */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          My interest in web development started back in 2015 when I decided to
          try editing custom Tumblr themes — turns out hacking together a custom
          reblog button taught me a lot about HTML & CSS!
        </p>
        {/* Third Paragraph */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Fast-forward to today, and I've had the privilege of working at a
          start-up, a huge corporation, and a student-led design studio. My main
          focus these days is building accessible, inclusive products and
          digital experiences.
        </p>
      </div>
    </section>
  );
}

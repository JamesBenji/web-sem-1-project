import babyImg from "../assets/images/happy-baby-1.jpg";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950 selection:bg-brand-200">
      <main
        className="mx-auto max-w-5xl px-5 pb-14 pt-24 sm:px-8 md:px-10 lg:px-12 lg:pb-16 lg:pt-28"
        id="main-content"
      >
        <section 
          className="space-y-12 rounded-4xl bg-brand-100/20 p-6 sm:p-10 lg:p-12 shadow-sm"
          aria-labelledby="main-heading"
        >
          <header className="space-y-4 text-center">
            <h1 
              id="main-heading"
              className="text-3xl font-black leading-tight tracking-tight text-brand-950 sm:text-4xl lg:text-5xl"
            >
              About Tiny Spoon
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-brand-900 sm:text-lg">
              Supporting parents with simple, healthy, and joyful recipes for
              little ones.
            </p>
          </header>

          <hr className="border-brand-300" aria-hidden="true" />

          {/* Mission Section */}
          <section className="grid gap-10 md:grid-cols-2 md:items-center" aria-labelledby="mission-heading">
            <article className="space-y-4">
              <h2 id="mission-heading" className="text-2xl font-bold text-brand-950">Our Mission</h2>
              {/* Using brand-900 instead of 700 to guarantee contrast pass */}
              <p className="text-sm leading-relaxed text-brand-900 sm:text-base">
                At Tiny Spoon, we believe that healthy eating begins with the
                very first bite. We’re a group of friends who came together with
                one shared goal: to make feeding babies and toddlers simple,
                joyful, and nourishing.
              </p>
              <p className="text-sm leading-relaxed text-brand-900 sm:text-base">
                Every recipe is made with real ingredients, inspired by global
                flavors, and guided by nutrition principles that support your
                child’s growth.
              </p>
            </article>

            <figure className="overflow-hidden rounded-3xl border border-brand-200 bg-white p-2 shadow-xl">
              <img
                src={babyImg}
                alt="A baby smiling while being fed a spoonful of fresh vegetable puree"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
                width="600"
                height="450"
              />
              <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-widest text-brand-800">
                Healthy meals made with love.
              </figcaption>
            </figure>
          </section>

          {/* Values Section */}
          <section className="space-y-8" aria-labelledby="values-heading">
            <h2 id="values-heading" className="text-center text-2xl font-bold text-brand-950">
              Our Values
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Simplicity", desc: "Recipes anyone can make — even on busy days." },
                { title: "Nutrition", desc: "Every recipe supports your child’s growth." },
                { title: "Joy", desc: "Food should be fun, colorful, and full of love." },
                { title: "Trust", desc: "Honest guidance and real ingredients — always." },
              ].map((value, index) => (
                <article
                  key={index}
                  className="rounded-2xl border border-brand-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-800 leading-snug">{value.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Trust Section */}
          <section className="rounded-3xl border border-brand-200 bg-white p-8 shadow-inner" aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="text-xl font-bold text-brand-950 mb-6 text-center">
              Why Parents Love Tiny Spoon
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Clear, step-by-step recipes",
                "Beginner-friendly instructions",
                "Healthy ingredients you can trust",
                "Designed with busy parents in mind",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-brand-900 sm:text-base">
                  <span className="mr-3 flex-shrink-0 text-brand-800 font-black" aria-hidden="true">✓</span> 
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <footer className="flex justify-center pt-6">
            <a
              href="/recipes"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-950 px-10 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-black focus:ring-4 focus:ring-brand-400 focus:outline-none"
              aria-label="Explore our full list of baby recipes"
            >
              Explore Recipes
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
};
import { NavBar } from "../components/layout/NavBar";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950">
      <NavBar />

      <main 
        className="mx-auto max-w-5xl px-5 pb-14 pt-24 sm:px-8 md:px-10 lg:px-12 lg:pb-16 lg:pt-28" 
        id="main-content"
      >
        <section className="space-y-12 rounded-[2rem] bg-brand-100/15 p-6 sm:p-10 lg:p-12">
          
          {/* Header Section */}
          <header className="space-y-4 text-center">
            <h1 className="text-3xl font-black leading-[1.04] tracking-tight text-brand-950 sm:text-4xl lg:text-[2.75rem]">
              About Tiny Spoon
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-brand-700 sm:text-lg">
              Supporting parents with simple, healthy, and joyful recipes for little ones.
            </p>
          </header>

          <hr className="border-brand-200" />

          {/* Intro Section - Flex layout to match modern look */}
          <section className="grid gap-10 md:grid-cols-2 md:items-center">
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-900">Our Mission</h2>
              <p className="text-sm leading-relaxed text-brand-700 sm:text-base">
                At Tiny Spoon, we believe that healthy eating begins with the very first bite. 
                We’re a group of friends who came together with one shared goal: to make feeding 
                babies and toddlers simple, joyful, and nourishing.
              </p>
              <p className="text-sm leading-relaxed text-brand-700 sm:text-base">
                Every recipe is made with real ingredients, inspired by global flavors, and guided 
                by nutrition principles that support your child’s growth.
              </p>
            </article>

            <figure className="overflow-hidden rounded-3xl border border-brand-200 bg-white p-2 shadow-xl shadow-brand-100">
              <img
                src="/images/about-baby.jpg"
                alt="Parent feeding a baby healthy homemade food"
                className="rounded-2xl w-full object-cover"
              />
              <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-wider text-brand-500">
                Healthy meals made with love.
              </figcaption>
            </figure>
          </section>

          {/* Values Section - Grid matching the "form card" style */}
          <section className="space-y-8">
            <h2 className="text-center text-2xl font-bold text-brand-900">Our Values</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Simplicity", desc: "Recipes anyone can make — even on busy days." },
                { title: "Nutrition", desc: "Every recipe supports your child’s growth." },
                { title: "Joy", desc: "Food should be fun, colorful, and full of love." },
                { title: "Trust", desc: "Honest guidance and real ingredients — always." }
              ].map((value, index) => (
                <article key={index} className="rounded-2xl border border-brand-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-800">{value.title}</h3>
                  <p className="mt-2 text-sm text-brand-600">{value.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Client-Centric Section */}
          <section className="rounded-3xl border border-brand-200 bg-gradient-to-b from-white to-brand-50 p-8 shadow-lg">
            <h2 className="text-xl font-bold text-brand-950 mb-4 text-center">Why Parents Love Tiny Spoon</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Clear, step-by-step recipes",
                "Beginner-friendly instructions",
                "Healthy ingredients you can trust",
                "Designed with busy parents in mind"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-brand-700">
                  <span className="mr-2 text-brand-500">✔</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Section */}
          <footer className="flex justify-center pt-6">
            <a 
              href="/recipes" 
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white bg-brand-900 px-8 text-xs font-bold uppercase tracking-[0.14em] text-brand-50 transition hover:bg-brand-700 shadow-xl"
            >
              Explore Recipes
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
};
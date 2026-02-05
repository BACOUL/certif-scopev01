"use client";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import Section10 from "./sections/Section10";
import Section11 from "./sections/Section11";
import Section12 from "./sections/Section12";

export default function MethodologyPage() {
  return (
    <section
      id="methodology"
      data-section="methodology"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER — IDENTICAL TO ALL SECONDARY PAGES */}
      <header className="mb-14">
        <p
          data-i18n="methodology.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Attestation CO₂e — Méthodologie
        </p>

        <h1
          data-i18n="methodology.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Vue d’ensemble de la méthodologie
        </h1>

        <p
          data-i18n="methodology.subtitle"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Méthodologie scientifique et déterministe derrière l’Attestation CO₂e,
          incluant le modèle spend-based, les facteurs d’émission, la logique de
          calcul, les cycles de mise à jour et les limites de validation
          institutionnelle.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE OF CONTENTS — CANONICAL & LOCKED */}
      <nav
        aria-label="Sections de la méthodologie"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li>
            <a href="#s1" className="hover:text-[#15B097] transition">
              Portée &amp; objectif de la méthodologie
            </a>
          </li>
          <li>
            <a href="#s2" className="hover:text-[#15B097] transition">
              Fondements théoriques
            </a>
          </li>
          <li>
            <a href="#s3" className="hover:text-[#15B097] transition">
              Modèle mathématique
            </a>
          </li>
          <li>
            <a href="#s4" className="hover:text-[#15B097] transition">
              Définitions des catégories &amp; limites
            </a>
          </li>
          <li>
            <a href="#s5" className="hover:text-[#15B097] transition">
              Règles de normalisation des entrées
            </a>
          </li>
          <li>
            <a href="#s6" className="hover:text-[#15B097] transition">
              Chaîne de transformation
            </a>
          </li>
          <li>
            <a href="#s7" className="hover:text-[#15B097] transition">
              Logique d’affectation des facteurs d’émission
            </a>
          </li>
          <li>
            <a href="#s8" className="hover:text-[#15B097] transition">
              Flux de calcul &amp; structure des formules
            </a>
          </li>
          <li>
            <a href="#s9" className="hover:text-[#15B097] transition">
              Contrôles internes &amp; garde-fous de calcul
            </a>
          </li>
          <li>
            <a href="#s10" className="hover:text-[#15B097] transition">
              Versionnage des facteurs &amp; modèle de mise à jour
            </a>
          </li>
          <li>
            <a href="#s11" className="hover:text-[#15B097] transition">
              Cycle de mise à jour du dataset &amp; validation institutionnelle
            </a>
          </li>
          <li>
            <a href="#s12" className="hover:text-[#15B097] transition">
              Données, confidentialité &amp; conformité RGPD
            </a>
          </li>
        </ol>
      </nav>

      {/* CONTENT — CANONICAL WIDTH & ORDER */}
      <div className="max-w-4xl mx-auto space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";

export function AuditForm({ locale }: { locale: "en" | "ar" }) {
  const isAr = locale === "ar";
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [problem, setProblem] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = isAr
      ? `مرحبًا عمرو، أريد جلسة تشخيص مجانية لمسار النمو.\n\nالاسم: ${name}\nالموقع: ${website || "غير متوفر"}\nالمشكلة الحالية: ${problem}`
      : `Hi Amr, I want to request a free growth audit session.\n\nName: ${name}\nWebsite: ${website || "Not provided"}\nCurrent problem: ${problem}`;

    const whatsappUrl = new URL("https://wa.me/966540355029");
    whatsappUrl.searchParams.set("text", message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-start shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-slate-700">{isAr ? "الاسم" : "Name"}</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
            placeholder={isAr ? "اكتب اسمك" : "Your name"}
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">{isAr ? "الموقع الإلكتروني" : "Website"}</span>
          <input
            required
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
            placeholder="https://"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-black text-slate-700">{isAr ? "ما المشكلة الحالية؟" : "Current problem"}</span>
        <textarea
          required
          name="problem"
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
          className="mt-2 min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
          placeholder={
            isAr
              ? "مثال: الليدز كثيرة لكن الجودة ضعيفة / التتبع غير واضح / لا نعرف مصدر المبيعات"
              : "Example: lead quality is weak / tracking is unclear / we cannot see which campaigns drive sales"
          }
        />
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-blue-600"
      >
        {isAr ? "إرسال الطلب عبر واتساب" : "Send via WhatsApp"}
      </button>
    </form>
  );
}

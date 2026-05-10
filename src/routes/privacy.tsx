import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/sublify/SiteShell";
import { SectionTOC, type TOCItem } from "@/components/sublify/SectionTOC";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Sublify" },
      { name: "description", content: "Sublify privacy policy." },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS: TOCItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "data-storage-and-security", label: "Data Storage & Security" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "what-we-do-not-do", label: "What We Do Not Do" },
  { id: "notifications", label: "Notifications" },
  { id: "user-control-and-data-deletion", label: "User Control & Deletion" },
  { id: "changes-to-this-privacy-policy", label: "Changes to This Policy" },
];

function PrivacyPage() {
  return (
    <SiteShell>
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:px-20 lg:py-20">
        <article className="lg:col-span-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Last Updated: May 2026
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase leading-[1.05] tracking-[0.02em] sm:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                01 · Introduction
              </h2>
              <p className="mt-3">
                Sublify is designed to help users manage subscriptions and recurring expenses
                efficiently. We value your privacy and are committed to protecting your personal
                information. We do not sell user data or use personal information for advertising
                purposes.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                02 · Information We Collect
              </h2>
              <p className="mt-3">
                To provide the core functionality of Sublify, we collect limited information,
                including:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <span className="text-foreground">Account Information:</span> Name and email
                  address, securely stored through Supabase for account access and data
                  synchronization.
                </li>
                <li>
                  <span className="text-foreground">Subscription Information:</span> Subscription
                  names, billing amounts, billing dates, and related records that you choose to
                  store in the app.
                </li>
                <li>
                  <span className="text-foreground">Preferences:</span> Settings such as selected
                  currency, app theme, and notification preferences.
                </li>
              </ul>
            </section>

            <section id="data-storage-and-security" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                03 · Data Storage and Security
              </h2>
              <p className="mt-3">
                Your data is stored using a combination of local device storage and secure cloud
                infrastructure.
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <span className="text-foreground">Local Storage:</span> A cached version of your
                  data may remain on your device to improve app performance and offline access.
                </li>
                <li>
                  <span className="text-foreground">Cloud Storage:</span> Data is securely stored
                  using Supabase and PostgreSQL infrastructure.
                </li>
                <li>
                  <span className="text-foreground">Security Measures:</span> Industry-standard
                  security practices, including Row Level Security (RLS), are used to ensure that
                  only authorized users can access their data.
                </li>
              </ul>
            </section>

            <section id="third-party-services" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                04 · Third-Party Services
              </h2>
              <p className="mt-3">
                Sublify uses trusted third-party services to support certain features:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <span className="text-foreground">Supabase</span> — Provides authentication,
                  database, and backend infrastructure.
                </li>
                <li>
                  <span className="text-foreground">Logo Providers</span> — Used to retrieve
                  publicly available company logos when users add subscription services.
                </li>
                <li>
                  <span className="text-foreground">AI Features</span> — If AI-powered analysis
                  features are used, anonymized subscription data (such as service names and
                  costs) may be processed to generate insights. Personal identifiers such as name
                  or email address are not shared during this process.
                </li>
              </ul>
            </section>

            <section id="what-we-do-not-do" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                05 · What We Do Not Do
              </h2>
              <p className="mt-3">Sublify does not:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>Sell personal information to third parties.</li>
                <li>Use invasive advertising trackers or tracking pixels.</li>
                <li>Request unnecessary device permissions.</li>
                <li>Share financial or subscription data with advertisers.</li>
              </ul>
            </section>

            <section id="notifications" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                06 · Notifications
              </h2>
              <p className="mt-3">
                The app may request permission to send notifications for reminders related to
                subscription renewals, trial expirations, or payment dates. Notifications can be
                disabled at any time in your device settings.
              </p>
            </section>

            <section id="user-control-and-data-deletion" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                07 · User Control and Data Deletion
              </h2>
              <p className="mt-3">Users maintain full control over their data.</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <span className="text-foreground">Access:</span> Users can review and manage
                  stored subscription data within the app.
                </li>
                <li>
                  <span className="text-foreground">Deletion:</span> Users can permanently delete
                  subscription records at any time.
                </li>
                <li>
                  <span className="text-foreground">Account Removal:</span> Users may delete their
                  account, after which associated personal data will be permanently removed from
                  our systems, subject to any legal obligations.
                </li>
              </ul>
            </section>

            <section id="changes-to-this-privacy-policy" className="scroll-mt-24">
              <h2 className="text-base font-semibold uppercase tracking-wider text-foreground">
                08 · Changes to This Privacy Policy
              </h2>
              <p className="mt-3">
                This Privacy Policy may be updated periodically. If significant changes are made,
                users will be informed through the app or other appropriate communication methods.
              </p>
            </section>

            <p className="pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Sublify
            </p>
          </div>
        </article>

        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-24">
            <SectionTOC items={SECTIONS} />
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}

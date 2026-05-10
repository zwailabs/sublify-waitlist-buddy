import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Sublify" },
      { name: "description", content: "Sublify privacy policy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        to="/"
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
      >
        ← Back
      </Link>
      <h1 className="mt-6 font-display text-4xl font-black uppercase tracking-[0.02em]">
        Privacy Policy
      </h1>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Last Updated: May 2026
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-3">
            Sublify is designed to help users manage subscriptions and recurring expenses
            efficiently. We value your privacy and are committed to protecting your personal
            information. We do not sell user data or use personal information for advertising
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Information We Collect</h2>
          <p className="mt-3">
            To provide the core functionality of Sublify, we collect limited information, including:
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc">
            <li>
              <span className="text-foreground">Account Information:</span> Name and email address,
              securely stored through Supabase for account access and data synchronization.
            </li>
            <li>
              <span className="text-foreground">Subscription Information:</span> Subscription names,
              billing amounts, billing dates, and related records that you choose to store in the app.
            </li>
            <li>
              <span className="text-foreground">Preferences:</span> Settings such as selected
              currency, app theme, and notification preferences.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">3. Data Storage and Security</h2>
          <p className="mt-3">
            Your data is stored using a combination of local device storage and secure cloud
            infrastructure.
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc">
            <li>
              <span className="text-foreground">Local Storage:</span> A cached version of your data
              may remain on your device to improve app performance and offline access.
            </li>
            <li>
              <span className="text-foreground">Cloud Storage:</span> Data is securely stored using
              Supabase and PostgreSQL infrastructure.
            </li>
            <li>
              <span className="text-foreground">Security Measures:</span> Industry-standard security
              practices, including Row Level Security (RLS), are used to ensure that only authorized
              users can access their data.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Third-Party Services</h2>
          <p className="mt-3">
            Sublify uses trusted third-party services to support certain features:
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc">
            <li>
              <span className="text-foreground">Supabase</span> — Provides authentication, database,
              and backend infrastructure.
            </li>
            <li>
              <span className="text-foreground">Logo Providers</span> — Used to retrieve publicly
              available company logos when users add subscription services.
            </li>
            <li>
              <span className="text-foreground">AI Features</span> — If AI-powered analysis features
              are used, anonymized subscription data (such as service names and costs) may be
              processed to generate insights. Personal identifiers such as name or email address are
              not shared during this process.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. What We Do Not Do</h2>
          <p className="mt-3">Sublify does not:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc">
            <li>Sell personal information to third parties.</li>
            <li>Use invasive advertising trackers or tracking pixels.</li>
            <li>Request unnecessary device permissions.</li>
            <li>Share financial or subscription data with advertisers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Notifications</h2>
          <p className="mt-3">
            The app may request permission to send notifications for reminders related to
            subscription renewals, trial expirations, or payment dates. Notifications can be
            disabled at any time in your device settings.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            7. User Control and Data Deletion
          </h2>
          <p className="mt-3">Users maintain full control over their data.</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc">
            <li>
              <span className="text-foreground">Access:</span> Users can review and manage stored
              subscription data within the app.
            </li>
            <li>
              <span className="text-foreground">Deletion:</span> Users can permanently delete
              subscription records at any time.
            </li>
            <li>
              <span className="text-foreground">Account Removal:</span> Users may delete their
              account, after which associated personal data will be permanently removed from our
              systems, subject to any legal obligations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mt-3">
            This Privacy Policy may be updated periodically. If significant changes are made, users
            will be informed through the app or other appropriate communication methods.
          </p>
        </section>

        <p className="pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Sublify
        </p>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg mb-4">
        Feel free to reach out for collaborations, opportunities, or questions.
      </p>

      <div className="space-y-2">
        <p>
          Email:{" "}
          <a href="mailto:youremail@example.com" className="underline">
            youremail@example.com
          </a>
        </p>
        <p>Location: Pineville, NC</p>
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Work Experience</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        A collection of my professional experience, roles, and contributions.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Job Title — Company</h2>
          <p className="text-gray-600">Dates of employment</p>
          <p className="mt-2">
            Brief description of your role and responsibilities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Another Role — Company</h2>
          <p className="text-gray-600">Dates of employment</p>
          <p className="mt-2">
            Brief description of your role and responsibilities.
          </p>
        </div>
      </div>
    </section>
  );
}

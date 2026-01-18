import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Class12Physics() {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6">
            Class 12 Physics – Complete Course
          </h1>

          {/* VIDEO */}
          <h2 className="text-2xl font-semibold mb-4">Video Lecture</h2>

          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <iframe
              src="https://www.youtube.com/embed/PdzH5ngzSI0"
              title="Class 12 Physics"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* PDF */}
          <h2 className="text-2xl font-semibold mb-4">Study Material</h2>

          <a
            href="https://drive.google.com/file/d/FILE_ID/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full">
              Open Physics Notes PDF
            </Button>
          </a>

        </div>
      </section>
    </Layout>
  );
}

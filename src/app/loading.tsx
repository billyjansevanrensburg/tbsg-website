import { Container } from "@/components";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-tbsg-primary border-t-transparent mb-4" />
          <p className="text-tbsg-charcoal/60">Loading...</p>
        </div>
      </Container>
    </div>
  );
}

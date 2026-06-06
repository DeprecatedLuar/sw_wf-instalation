import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { site } from "@/config/site";

type Review = {
  author_name: string;
  rating: number;
  relative_time_description?: string;
  text: string;
};

type ReviewsData = {
  rating: number;
  total: number;
  reviews: Review[];
};

export function ReviewsWidget() {
  const [data, setData] = useState<ReviewsData | null>(null);

  useEffect(() => {
    fetch("/reviews.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  const hasReviews = data && data.reviews.length > 0;

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Avaliações Google
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground lg:text-4xl">
            O que dizem nossos clientes
          </h2>

          {hasReviews ? (
            <>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.round(data!.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-display text-2xl font-bold text-foreground">
                  {data!.rating.toFixed(1)}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({data!.total} avaliações)
                </span>
              </div>
              <div className="mt-10 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
                {data!.reviews.slice(0, 6).map((r, i) => (
                  <article
                    key={i}
                    className="rounded-sm border border-border bg-card p-6 text-left shadow-sm"
                  >
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${
                            j < r.rating ? "fill-accent text-accent" : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                      {r.text}
                    </p>
                    <div className="mt-4 text-xs font-semibold text-muted-foreground">
                      {r.author_name}
                      {r.relative_time_description ? ` · ${r.relative_time_description}` : ""}
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-8 max-w-xl rounded-sm border border-border bg-card p-8">
              <p className="text-sm text-muted-foreground">
                Avaliações em breve. Veja nosso perfil no Google para conferir o histórico de atendimentos.
              </p>
              <a
                href={site.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
              >
                Ver no Google <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
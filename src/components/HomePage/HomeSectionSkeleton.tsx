import React from "react";
/** Minimal placeholder for lazy-loaded home sections. Keeps layout stable. */
const HomeSectionSkeleton: React.FC = () => (
<section className="py-8 sm:py-12 bg-muted/50">
<div className="mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-6 h-16 bg-muted rounded animate-pulse" />
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
{[1, 2, 3, 4].map((i) => (
<div key={i} className="aspect-square bg-muted rounded-lg animate-pulse" />
))}
</div>
</div>
</section>
);
export default HomeSectionSkeleton;

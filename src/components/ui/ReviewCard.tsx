
import { BsStar, BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  date: string;
  rating?: number;
  review: string;
};

type ReviewCardProps = {
  data: Testimonial;
};

export default function ReviewCard() {
  const fullStars = 4;
  const hasHalfStar = 1;

  return (
    <div className="w-full  rounded-2xl border border-border bg-background-secondary p-6 ">
      {/* Header */}
      <div className="flex items-center gap-2 justify-between">
        {/* Render stars here using fullStars & hasHalfStar */}
        <div className="flex items-center gap-1">
          {Array.from({ length: fullStars }).map((_, index) => (
            <FaStar 

              key={index}
              className="h-5 w-5 fill-primary text-primary"
            />
          ))}

          {hasHalfStar && (
            <BsStarHalf className="h-5 w-5 fill-primary text-primary" />
          )}
        </div>

        <p className="text-base font-base text-foreground-secondary">
          08/06/2026
        </p>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-lg font-semibold text-red-500">
        Graham
      </h3>

      {/* Review */}
      <p className="mt-4 text-base mb-6">
        &ldquo;Easy setup, stable uptime, and excellent speed. This BDIX hosting service has been a great choice for our growing website.&rdquo;
      </p>
    </div>
  );
}
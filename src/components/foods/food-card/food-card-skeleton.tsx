import { Skeleton } from "@/components/ui/skeleton";

export const FoodCardSkeleton = () => {
  return (
    <div className="border rounded-2xl overflow-hidden h-105 flex flex-col">
      <Skeleton className="h-48 w-full" />
      <div className="p-5 space-y-4 grow">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-10 w-full" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="pt-4 border-t flex justify-between items-center">
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  );
};
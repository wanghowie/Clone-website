import { activities, activityCategories, getActivity } from "@/data/activities";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Things to do in Dauin";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getActivity(slug);
  return renderOgImage({
    eyebrow: activity ? activityCategories[activity.category].label : "Things to do",
    title: activity?.title ?? "Things to do in Dauin",
    subtitle: activity?.summary,
  });
}

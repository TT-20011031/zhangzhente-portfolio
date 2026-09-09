import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudyPage } from "@/components/StudyPage";
import { getStudy, research } from "@/data/portfolio";

type ResearchPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return research.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy("research", slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const study = getStudy("research", slug);
  if (!study) notFound();
  return <StudyPage study={study} />;
}

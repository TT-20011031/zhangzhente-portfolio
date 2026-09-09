import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudyPage } from "@/components/StudyPage";
import { getStudy, projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy("project", slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = getStudy("project", slug);
  if (!study) notFound();
  return <StudyPage study={study} />;
}

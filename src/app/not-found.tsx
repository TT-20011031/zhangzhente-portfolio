import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found page-shell">
      <p>404 / FILE NOT FOUND</p>
      <h1>这份档案不存在。</h1>
      <Link href="/">返回作品集首页 →</Link>
    </main>
  );
}

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        <span>章振特</span>
        <small>ZHANG ZHENTE</small>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#work">项目</Link>
        <Link href="/#research">研究</Link>
        <Link href="/#profile">履历</Link>
        <a href="mailto:zhangzhente@163.com">联系</a>
      </nav>
    </header>
  );
}

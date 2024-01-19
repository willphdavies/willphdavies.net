import Image from "next/image";
import "./footer.scss";
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__copy">&copy; {year} - All rights reserved</div>
      <div className="-spacer" />
      <div>William Davies Javascript Cloud Applications</div>
      <div className="-spacer" />
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/willphdavies/" title="LinkedIn">
          <Image src="/linkedin.png" width={30} height={30} alt="LinkedIn" />
        </a>
        <a href="https://github.com/willphdavies/" title="Github">
          <Image src="/github.png" width={30} height={30} alt="Github" />
        </a>
      </div>
    </footer>
  );
}

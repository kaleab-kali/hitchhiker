export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-row">
          <span className="footer-brand">
            <span className="footer-mark">★</span> hitchhiker.dev
          </span>
          <span className="footer-text">
            © {new Date().getFullYear()} Kaleab Girma Zeleke · built with care, coffee, and an
            embarrassing number of late nights.
          </span>
          <span className="footer-meta mono">v2.6 · don't panic</span>
        </div>
      </div>
    </footer>
  );
}

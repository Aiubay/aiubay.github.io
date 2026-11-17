export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <>
      <div className="mesh"><div className="blob b1" /><div className="blob b2" /></div>
      <div className="dot-grid" />
      <main className="notfound-main" id="main-content" tabIndex={-1}>
        <div className="card notfound-card">
          <p className="section-eyebrow">404</p>
          <h1 className="notfound-title">Page not found</h1>
          <p className="notfound-desc">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <a className="btn-big btn-grad" href="/">Back to portfolio</a>
        </div>
      </main>
    </>
  );
}

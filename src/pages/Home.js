export default function Home() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column flex-center text-center bg-dark text-white row-gap-3"
    >
      <img width="400" className="mw-100" src="/logo512.png" alt="logo" />
      <p className="h1">
        Welcome to <span className="text-success">React-Bootstrap</span>{" "}
        template
      </p>
      <p className="h3">
        Created by{" "}
        <a
          className="text-info text-decoration-underline"
          href="https://amin-dasoomi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amin dasoomi
        </a>
      </p>
    </div>
  );
}

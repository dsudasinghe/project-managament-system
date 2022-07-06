import AddClientModel from "../components/AddClientModel";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
}

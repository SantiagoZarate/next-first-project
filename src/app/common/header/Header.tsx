import { NavLink } from "./NavLink";

export function Header() {
  return (
    <div className="fixed top-0 w-full p-4">
      <div className="mx-auto max-w-screen-lg flex justify-between items-center">
        <NavLink />
        <div>Login</div>
      </div>
    </div>
  );
}

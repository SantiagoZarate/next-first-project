import { NavLink } from "./NavLink";

export function Header() {
  return (
    <div className="fixed top-0 w-full max-w-screen-md p-4">
      <div className="flex justify-between items-center">
        <NavLink />
        <div>
          Login
        </div>
      </div>
    </div>
  )
}

import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return(
    <div>
        <h3>Main Page</h3>
        <LogoutButton />
    </div>
  );
}

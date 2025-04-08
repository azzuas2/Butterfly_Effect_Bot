async function handler() {
  const session = getSession();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  const [profile] = await sql`
    SELECT display_name, created_at, last_login 
    FROM user_profiles 
    WHERE user_id = ${session.user.id}
  `;

  if (!profile) {
    return { error: "Profile not found" };
  }

  return {
    profile,
  };
}
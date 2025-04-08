async function handler({ username }) {
  if (!username) {
    return { error: "Username is required" };
  }

  const [result] = await sql`
    SELECT EXISTS(
      SELECT 1 FROM user_profiles 
      WHERE display_name = ${username}
    )
  `;

  return {
    exists: result.exists,
  };
}
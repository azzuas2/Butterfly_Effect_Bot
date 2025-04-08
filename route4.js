async function handler({ limit = 50 }) {
  const session = getSession();
  if (!session?.user?.id) {
    return { messages: [] };
  }

  const messages = await sql(
    "SELECT * FROM chat_history WHERE user_id = $1 ORDER BY created_at DESC LIMIT $2",
    [session.user.id, limit]
  );

  return { messages };
}
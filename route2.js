async function handler({
  message_content,
  message_type = "user",
  image_url = null,
}) {
  const session = getSession();
  if (!session?.user?.id) {
    return { error: "Not authenticated" };
  }

  if (!message_content) {
    return { error: "Message content is required" };
  }

  const [result] = await sql(
    "INSERT INTO chat_history (user_id, message_content, message_type, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
    [session.user.id, message_content, message_type, image_url]
  );

  return { message: result };
}
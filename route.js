async function handler({ userId, content, type, imageUrl }) {
  const session = getSession();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  await sql`
    INSERT INTO chat_history 
      (user_id, message_content, message_type, image_url) 
    VALUES 
      (${session.user.id}, ${content}, ${type}, ${imageUrl})
  `;

  return { success: true };
}
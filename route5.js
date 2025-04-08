async function handler() {
  try {
    const [poetry] = await sql`
      SELECT * FROM poetry_collection 
      ORDER BY RANDOM() 
      LIMIT 1
    `;

    if (!poetry) {
      return {
        poetry: {
          poet_name: "Allama Iqbal",
          urdu_text:
            "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
          english_meaning:
            "Elevate your self so high that before every decree,\nGod himself asks you: Tell me, what is your wish?",
        },
      };
    }

    return { poetry };
  } catch (error) {
    return {
      poetry: {
        poet_name: "Allama Iqbal",
        urdu_text:
          "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
        english_meaning:
          "Elevate your self so high that before every decree,\nGod himself asks you: Tell me, what is your wish?",
      },
    };
  }
}
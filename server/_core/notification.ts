// Notification helper — sends email/webhook notification to owner
// Manus-specific notifyOwner replaced with a simple console log + optional webhook

export async function notifyOwner({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<void> {
  // Log to server console always
  console.log(`\n📬 [NOTIFICATION] ${title}\n${content}\n`);

  // Optional: Send to a webhook (e.g. Discord, Slack, Make.com)
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
    } catch (err) {
      console.error("Webhook notification failed:", err);
      // Don't throw — notification failure should not break form submission
    }
  }
}
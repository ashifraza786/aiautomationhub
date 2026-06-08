/**
 * Local development notification stub
 * In production, this would send real notifications
 */

export async function notifyOwner({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<boolean> {
  console.log("\n📧 NOTIFICATION:");
  console.log(`Title: ${title}`);
  console.log(`Content:\n${content}`);
  console.log("---\n");
  
  // In local development, we just log to console
  // In production, this would send emails/notifications
  return true;
}

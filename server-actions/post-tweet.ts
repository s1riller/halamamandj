"use server";

export async function postTweet(formData: FormData) {
  const content = formData.get("content");

  if (typeof content !== "string") {
    throw new Error("Content must be a string");
  }

  console.log(content);
}

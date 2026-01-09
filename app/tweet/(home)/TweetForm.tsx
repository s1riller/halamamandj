import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
  return (
    <form
      action={postTweet}
      className="animate-fadeInUp space-y-4 rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-white backdrop-blur-xl hover:border-cyan-400/20 transition-all duration-300"
    >
      <div>
        <label className="block text-sm font-semibold text-white/70 mb-2">Поделиться впечатлениями</label>
        <input
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
          name="content"
          placeholder="Расскажи о своем путешествии..."
          type="text"
          required
        />
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
          ✉️ Опубликовать
        </button>
      </div>
    </form>
  );
}

import { EmojiRating } from "@/components/EmojiRating";

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-rose-800 to-blue-950">
      <EmojiRating rate={5.5} />
    </div>
  );
};

export default Page;
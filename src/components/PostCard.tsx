
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const PostCard = ({ author, time, content, image, likes, comments }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="mb-4 overflow-hidden">
      <CardHeader className="p-4 flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-semibold">{author.name}</div>
          <div className="text-xs text-muted-foreground">@{author.username} • {time}</div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 py-2">{content}</div>
        {image && (
          <div className="w-full aspect-square bg-muted">
            <img src={image} alt="Post" className="w-full h-full object-cover" />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-2 flex justify-between">
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className={liked ? "text-red-500" : ""}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
          </Button>
          <span className="self-center text-sm">{likeCount}</span>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <span className="self-center text-sm">{comments}</span>
        </div>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setSaved(!saved)}
        >
          <Bookmark className={`h-5 w-5 ${saved ? "fill-primary" : ""}`} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

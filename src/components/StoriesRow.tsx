
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Story {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  hasUnseenStory: boolean;
}

const stories: Story[] = [
  {
    id: 1,
    user: { 
      name: "Космос", 
      avatar: "https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" 
    },
    hasUnseenStory: true
  },
  {
    id: 2,
    user: { 
      name: "МКС", 
      avatar: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
    },
    hasUnseenStory: true
  },
  {
    id: 3,
    user: { 
      name: "Марс", 
      avatar: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
    },
    hasUnseenStory: true
  },
  {
    id: 4,
    user: { 
      name: "Венера", 
      avatar: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1211&q=80" 
    },
    hasUnseenStory: false
  },
  {
    id: 5,
    user: { 
      name: "Юпитер", 
      avatar: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
    },
    hasUnseenStory: false
  },
];

const StoriesRow = () => {
  return (
    <div className="mb-4">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-1">
              <div className={`p-1 rounded-full ${story.hasUnseenStory ? 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500' : 'bg-transparent'}`}>
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src={story.user.avatar} alt={story.user.name} />
                  <AvatarFallback>{story.user.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs">{story.user.name}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default StoriesRow;

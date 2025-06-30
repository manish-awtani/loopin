import { User, Post } from './types';

export const dummyUsers: User[] = [
  {
    id: '1',
    username: 'alex_chen',
    name: 'Alex Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Software engineer by day, coffee enthusiast by night ☕'
  },
  {
    id: '2',
    username: 'sarah_wilson',
    name: 'Sarah Wilson',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Designer who loves creating beautiful user experiences 🎨'
  },
  {
    id: '3',
    username: 'mike_rodriguez',
    name: 'Mike Rodriguez',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Product manager passionate about building products that matter 🚀'
  },
  {
    id: '4',
    username: 'emma_thompson',
    name: 'Emma Thompson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Data scientist exploring the world through numbers 📊'
  },
  {
    id: '5',
    username: 'david_kim',
    name: 'David Kim',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    bio: 'Full-stack developer building the future one commit at a time 💻'
  }
];

export const dummyPosts: Post[] = [
  // Main posts (no parent)
  {
    id: '1',
    createdAt: '2024-01-15T10:30:00Z',
    content: 'Just deployed my first React Native app! The feeling of seeing your code running on a real device is incredible. What was your first mobile app experience like?',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '2',
    createdAt: '2024-01-14T14:20:00Z',
    content: 'Design tip of the day: Always consider accessibility first. Your users will thank you, and it often leads to better design decisions overall. What accessibility features do you prioritize in your designs?',
    user_id: '2',
    user: dummyUsers[1],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '3',
    createdAt: '2024-01-13T09:15:00Z',
    content: 'Product management is 80% communication and 20% everything else. The best products come from teams that truly understand their users. How do you gather user feedback in your process?',
    user_id: '3',
    user: dummyUsers[2],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '4',
    createdAt: '2024-01-12T16:45:00Z',
    content: 'Just finished analyzing a massive dataset and found some fascinating patterns! Data science is like being a detective, but with numbers. Anyone else love the thrill of discovering insights in data?',
    user_id: '4',
    user: dummyUsers[3],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '5',
    createdAt: '2024-01-11T11:30:00Z',
    content: 'TypeScript + React Native = ❤️. The type safety has saved me so many bugs. What\'s your favorite TypeScript feature for mobile development?',
    user_id: '5',
    user: dummyUsers[4],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '6',
    createdAt: '2024-01-10T13:20:00Z',
    content: 'Coffee break thoughts: Sometimes the best debugging happens away from the keyboard. Anyone else solve their toughest problems while walking or doing something completely unrelated?',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '7',
    createdAt: '2024-01-09T15:10:00Z',
    content: 'Just learned about dark mode design principles. The key is not just inverting colors, but creating a truly comfortable viewing experience. What\'s your approach to dark mode?',
    user_id: '2',
    user: dummyUsers[1],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '8',
    createdAt: '2024-01-08T12:00:00Z',
    content: 'The best user stories are the ones that tell a complete story. "As a user, I want to..." should always have a clear "so that I can..." What\'s your favorite user story format?',
    user_id: '3',
    user: dummyUsers[2],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '9',
    createdAt: '2024-01-07T10:45:00Z',
    content: 'Machine learning models are only as good as the data you feed them. Garbage in, garbage out! How do you ensure data quality in your ML projects?',
    user_id: '4',
    user: dummyUsers[3],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '10',
    createdAt: '2024-01-06T08:30:00Z',
    content: 'Performance optimization tip: Always measure before optimizing. You might be surprised by what\'s actually causing the bottleneck. What\'s your go-to performance profiling tool?',
    user_id: '5',
    user: dummyUsers[4],
    parent_id: null,
    parent: null,
    replies: []
  },
  // Replies
  {
    id: '11',
    createdAt: '2024-01-15T11:15:00Z',
    content: 'Congratulations! My first app was a simple todo list, but seeing it work on my phone was magical. The debugging on real devices is a whole different ball game though 😅',
    user_id: '2',
    user: dummyUsers[1],
    parent_id: '1',
    parent: null, // Will be set after creation
    replies: []
  },
  {
    id: '12',
    createdAt: '2024-01-15T12:00:00Z',
    content: 'Totally agree! I remember spending hours just staring at my phone testing every edge case. The simulator is great, but nothing beats real device testing.',
    user_id: '5',
    user: dummyUsers[4],
    parent_id: '1',
    parent: null,
    replies: []
  },
  {
    id: '13',
    createdAt: '2024-01-14T15:30:00Z',
    content: 'Great point! I always start with color contrast ratios and screen reader compatibility. It\'s amazing how accessibility improvements often benefit all users.',
    user_id: '3',
    user: dummyUsers[2],
    parent_id: '2',
    parent: null,
    replies: []
  },
  {
    id: '14',
    createdAt: '2024-01-13T10:00:00Z',
    content: 'User interviews are gold! I try to talk to at least 5 users before making any major decisions. The insights you get from real conversations are invaluable.',
    user_id: '4',
    user: dummyUsers[3],
    parent_id: '3',
    parent: null,
    replies: []
  },
  {
    id: '15',
    createdAt: '2024-01-12T17:30:00Z',
    content: 'Absolutely! I love using TypeScript\'s strict mode. It catches so many potential issues at compile time. The interface definitions are a lifesaver for API integrations.',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: '5',
    parent: null,
    replies: []
  }
];

// Set up parent relationships and replies
dummyPosts.forEach(post => {
  if (post.parent_id) {
    const parent = dummyPosts.find(p => p.id === post.parent_id);
    if (parent) {
      post.parent = parent;
      parent.replies.push(post);
    }
  }
});

export const getDummyData = () => ({
  users: dummyUsers,
  posts: dummyPosts.filter(post => post.parent_id === null) // Return only main posts
});

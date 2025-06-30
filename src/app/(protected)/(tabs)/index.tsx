import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView } from 'react-native';
import PostListItem from '@/components/PostListItem';
import { dummyPosts } from '@/dummyData';

export default function HomeScreen() {
  // Filter to show only main posts (no parent_id) for the main feed
  const mainPosts = dummyPosts.filter(post => !post.parent_id);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <View>
          <Text className="text-xl font-bold text-gray-900">Home</Text>
        </View>
        <View className="flex-row items-center space-x-4">
          <Text className="text-blue-500 text-lg">🔍</Text>
          <Text className="text-blue-500 text-lg">⚙️</Text>
        </View>
      </View>

      {/* Posts List */}
      <FlatList
        data={mainPosts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View className="h-px bg-gray-100" />}
      />
    </SafeAreaView>
  );
}

import Markdown from "react-native-markdown-display";
import PageLayout from "../ui/PageLayout";
import Title from "../ui/Title";
import homeMarkdown from "../data/Home";
import { useTheme } from "react-native-paper";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <PageLayout>
      <Title>Welcome to Roymond.NET</Title>
      <Markdown style={{body: {color: theme.colors.onSurface}}}>
        {homeMarkdown}
      </Markdown>
    </PageLayout>
  );
}

export default HomeScreen

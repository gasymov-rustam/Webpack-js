import { StoreProvider } from '../../../../providers';

export const StoreDecorator = () => (StoryComponent) =>
  (
    <StoreProvider>
      <StoryComponent />
    </StoreProvider>
  );

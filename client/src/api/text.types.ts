export type Resource<T> = {
  read: () => T;
};

export type WrappedResource = {
  text: Resource<Text>;
};

export type Text = {
  txt: string;
};

type Props = {
  children: React.ReactNode;
  height?: string;
};

function Container({ children, height = 'auto' }: Props) {
  return (
    <div className={`container max-w-5xl mx-auto h-${height} p-4`}>
      {children}
    </div>
  );
}

export default Container;

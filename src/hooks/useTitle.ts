const useTitle = (title: string) => {
  if (!document) return;
  document.title = `${title} | Hartaithan.`;
};

export default useTitle;

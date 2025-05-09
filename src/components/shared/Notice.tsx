interface NoticeProps {
  messages: string[];
}
const Notice = ({ messages }: NoticeProps) => {
  return (
    <section className="w-full flex items-start justify-center gap-1 flex-col ">
      <ul className="w-full list-disc list-inside text-sm font-normal text-gray-700 border border-gray-200 rounded-lg p-3 bg-neutral-100">
        {messages.map((message, index) => {
          return <li key={index}>{message}</li>;
        })}
      </ul>
    </section>
  );
};

export default Notice;
export default function SmallCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description?: string;
  image: string;
  link: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto mb-5 border rounded-lg shadow-lg">
        <div
          className="flex flex-col items-center justify-center w-full h-64 bg-cover rounded-t-lg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col items-center justify-center w-full p-5">
          <h1 className="mb-4 text-xl font-bold text-center">{title}</h1>
         { description && <p className="mb-4 text-center">{description}</p>}
          <a
            href={link}
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default function SmallCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description?: string;
  image?: string;
  link: string;
}) {
  return (
    <a href={link}>
      <div className="flex flex-col md:flex-row py-4 gap-6 border-b">
        <div className="flex flex-col pr-5 md:gap-4 gap-2">
          <h1 className=" text-xl font-bold font-chelten-500 text-start">
            {title}
          </h1>
          {description && (
            <p className="font-chelten-200 font-light text-sm text-start">
              {description}
            </p>
          )}
        </div>
        <div
          className="flex flex-col items-center justify-center w-full bg-cover min-h-60"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </a>
  );
}

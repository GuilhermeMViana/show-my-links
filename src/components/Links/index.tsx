import { FiTrash } from "react-icons/fi";

interface linksProps {
  textStyle: React.CSSProperties;
  colorProps: React.CSSProperties;
  title: string;
  url: string;
  deleteButton?: boolean;
}

export function Links({
  textStyle,
  colorProps,
  title,
  url,
  deleteButton,
}: linksProps) {
  return (
    <section
      className="mb-4 mt-6 py-2 rounded select-none transition:transform duration-300 hover:scale-105 cursor-pointer"
      style={colorProps}
    >
      {deleteButton ? (
        <div className="flex justify-between items-center mx-2">
          <div className="flex-grow flex justify-center">
            <a href={url}>
              <p
                className="text-base text-center md:text-lg rounded-lg py-2"
                style={textStyle}
              >
                {title}
              </p>
            </a>
          </div>
          <div className="flex items-center">
            <button className="border border-dashed rounded py-1 px-2 bg-neutral-900">
              <FiTrash size={20} color="#ffffff" />
            </button>
          </div>
        </div>
      ) : (
        <a href={url}>
            <p
                className="text-base text-center md:text-lg rounded-lg py-2"
                style={textStyle}
            >
                {title}
            </p>
        </a>
      )}
    </section>
  );
}

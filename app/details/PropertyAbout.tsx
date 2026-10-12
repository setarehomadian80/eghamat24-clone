
type Props = {
  title: string;
  description: string;
  info: any[];
  details: any[];
};

export default function AboutProperty({
  title,
  description,
  info,
  details,
}: Props) {
  return (
    <div className="mt-6 *:mt-6 text-gray-600 text-[12px]">
      
      <h2 className="text-black 
      text-[16px] md:text-[18px] xl:text-[20px]
      ">
        {title}
      </h2>


      {/* time */}
      <ul
        className="
          flex 
          justify-between
          md:justify-start
          md:gap-14
          *:text-center 
          *:flex
          *:flex-col
          *:justify-center
          *:gap-1
        "
      >
        {info.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.txt}>
              <span className="flex justify-center">
                <Icon size={20} />
              </span>

              <span>{item.txt}</span>

              <span>{item.num}</span>
            </li>
          );
        })}
      </ul>


      {/* description */}
      <p className="leading-6">
        {description}
      </p>


      {/* details */}
      <div>
        <ul
          className="
            grid 
            grid-cols-2 
            md:grid-cols-5 
            gap-5
            md:gap-2
          "
        >
          {details.map((item) => (
            <li
              key={item.txt}
              className="
                flex 
                flex-col
                md:text-center
              "
            >
              <span className="text-gray-800">
                {item.txt}
              </span>

              <span className="mt-1">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
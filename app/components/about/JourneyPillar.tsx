import Image from "next/image";

type JourneyPillarProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

const JourneyPillar = ({
  title,
  description,
  image,
  reverse,
}: JourneyPillarProps) => {
  return (
    <div className={`pillar ${reverse ? "pillar--reverse" : ""}`}>
      <div className="pillar__visual">
        <div className="pillar__image">
          <Image src={image} alt={title} fill />
        </div>
      </div>

      <div
        className={`pillar__content ${reverse ? "text-left" : "text-right"}`}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JourneyPillar;

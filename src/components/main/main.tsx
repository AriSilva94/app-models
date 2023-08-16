import Image from "next/image";
import { getModels, getStrapiMediaUrl } from "@/services/api";

export default async function Main() {
  const { name, image } = await getModels();
  console.log("IMAGE:", image);

  return (
    <main className="bg-white flex flex-col items-center justify-items-center">
      <h1>{name}</h1>
      {image?.data?.map(
        async ({ attributes }: { attributes: any }, index: any) => {
          return (
            <div key={index} className="py-4">
              <Image
                priority
                src={
                  (await getStrapiMediaUrl(attributes?.formats?.large?.url)) ||
                  ""
                }
                width={600}
                height={600}
                alt="Picture of the author"
              />
            </div>
          );
        }
      )}
    </main>
  );
}

// MARK: NPM Modules
import Image from "components/common/image";
// MARK: Types
import HomeEntry from "types/contentful/pages/home";
// MARK: Functionality
import getHomePage from "utils/contentful/queries/home";
// MARK: React Component
export default async () => {
  const entry: HomeEntry = await getHomePage()
  const { metaTitle, metaDescription, seoImage } = entry.fields

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        MetaTitle: {entry.fields.metaTitle}
        <br/>
        Description: {entry.fields.metaDescription}
        <br/>
        </p>
        <Image
        url={seoImage.fields.file.url}
        altText={seoImage.fields.description}
        width={1920}
        height={1080}
        />
      </div>
    </main>
  );
}

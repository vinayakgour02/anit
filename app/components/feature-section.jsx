import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
          title: "Brand Building Solutions",
          description:
            "From unique logos to complete brand identity kits—make a lasting impression with design that speaks for you.",
          icon: <IconHeart />,
        },
        {
          title: "Creative Design Services",
          description:
            "Stunning graphics, ad creatives, and infographics for social media, print, and digital campaigns.",
          icon: <IconAdjustmentsBolt />,
        },
        {
          title: "Digital Marketing Campaigns",
          description:
            "ROI-focused SEO, social media, and content strategies that drive visibility and customer engagement.",
          icon: <IconEaseInOut />,
        },
        {
          title: "Marketplace & E-commerce",
          description:
            "Get listed and sell on Amazon, Flipkart, or your own store—fully optimized for discovery and conversion.",
          icon: <IconCurrencyDollar />,
        },
        {
          title: "Custom Web Development",
          description:
            "Responsive, scalable websites and CMS platforms built with performance and security in mind.",
          icon: <IconCloud />,
        },
        {
          title: "UI/UX & Product Design",
          description:
            "Intuitive interfaces backed by research, wireframing, and prototyping—designed for real users.",
          icon: <IconTerminal2 />,
        },
      ];
      
  return (

    <div className="w-full flex justify-between">

<div className="flex flex-col pt-20 px-20">
    <h3 className=" text-6xl font-bold"   >
    WHAT WE DO

    </h3>
    <p className="">    As creators at heart, we’ve made breaking the social media algorithm our daily job.</p>
</div>


    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 3 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
